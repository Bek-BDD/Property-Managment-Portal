package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.Exceptions.CredentialException;
import com.propertymanagmnetportal.pmp.Exceptions.EmailExistException;
import com.propertymanagmnetportal.pmp.Utility.AwsUtil;
import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.Address;
import com.propertymanagmnetportal.pmp.entity.Role;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.AddressRepository;
import com.propertymanagmnetportal.pmp.repository.RoleRepository;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.security.JwtUtil;
import com.propertymanagmnetportal.pmp.security.MyUserDetailService;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;
import com.propertymanagmnetportal.pmp.service.UaaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UaaServiceImpl implements UaaService {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    MyUserDetailService myUserDetailService;

    @Autowired
    UserBaseRepository userBaseRepository;

    @Autowired
    ModelMapper mapper;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    EmailService emailService;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AwsUtil awsUtil;

    @Autowired
    AddressRepository addressRepository;

    private List<String> blackList = new ArrayList<>();

    public LoginResponse login(LoginRequest request){
            System.out.println(request.getPassword());
           authenticationManager.authenticate(
                   new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetail = myUserDetailService.loadUserByUsername(request.getEmail());
        String jwtToken = jwtUtil.generateToken(userDetail);
        String refereshToken = jwtUtil.generateRefereshToken(request.getEmail());
        return new LoginResponse(jwtToken,refereshToken);
    }

    @Override
    public LoginRequest signup(UserDTO userDTO) throws EmailExistException {
        if(emailExist(userDTO.getEmail()))
            throw new EmailExistException("You already have account with this email");
        User user =  mapper.map(userDTO, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(List.of(new Role(1,"owner")));
        userBaseRepository.save(user);
        return  new LoginRequest(userDTO.getEmail(),userDTO.getPassword());
    }


    @Override
    public String updateResetPasswordToken(String token , String email, HttpServletRequest request) {

        if(emailExist(email)){
            User user = userBaseRepository.findByEmail(email);
            user.setResetpasswordtoken(token);
            userBaseRepository.save(user);
            String resetURL = "http://localhost:3000/changePassword"+ "/reset_pwd?token="+token;
            emailService.sendEmail(user.getEmail(),"Password reset Link",resetURL);
            return resetURL;
        }else{
            throw new CredentialException("We can not find this customer!!");
        }
    }

    public User getUserFromResetToken(String resetPasswordToken){
       // System.out.println(userBaseRepository.findByResetpasswordtoken(resetPasswordToken).getFirstname());
        return userBaseRepository.findByResetpasswordtoken(resetPasswordToken);
    }

    @Override
    @Cacheable(cacheNames = {"blacklist"},key = "#request")
    public String logout(String request) {
       // String header = request.getHeader("Authorization");
        String token = request.split(" ")[1].trim();
        blackList.add(token);
        return "done";
    }

    @Override
    @Transactional
    public String signUpImg(UserDTO userDTO) {
        User newUser = new User();
        newUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        newUser.setEmail(userDTO.getEmail());
        newUser.setFirstname(userDTO.getFirstname());
        newUser.setLastname(userDTO.getLastname());
        if(userDTO.getCity() == null || userDTO.getZip_code() == null||  userDTO.getState() == null ||
                userDTO.getStreet_number() == null){
                Address address = new Address();
                address.setCity(userDTO.getCity());
                address.setStreet(userDTO.getStreet_number());
            address.setZip(userDTO.getZip_code().equals("") ? null : Integer.parseInt(userDTO.getZip_code()));
                address.setState(userDTO.getState());
                addressRepository.save(address);
        }
        //Image
        if(userDTO.getImages() != null)
               newUser.setImageurl(awsUtil.uploadFile(userDTO.getImages()));

        Role role = roleRepository.findByRole(userDTO.getRoletype());
        role.setRole(userDTO.getRoletype());
        newUser.setRole(List.of(role));
        userBaseRepository.save(newUser);

        return "saved";
    }

    public void updatePassword(User user ,String newPassword){
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        user.setResetpasswordtoken(null);
        userBaseRepository.save(user);
    }

    public boolean emailExist(String email){
        if(userBaseRepository.findByEmail(email) != null)
            return true;
        return false;
    }

    public User getUserByEmail(String email){
        return userBaseRepository.findByEmail(email);
    }

    @Override
    public User updateUserById(User user, int id) {
        user.setId(id);
        return userBaseRepository.save(user);
    }

    @Override

    public User changePassword(String email, String password) {
        User result = userBaseRepository.findByEmail(email);
        result.setPassword(passwordEncoder.encode(password));
        userBaseRepository.save(result);
        return result;
    }
    @Override
    public List<User> findAll() {
        return userBaseRepository.findAll()
                .stream()
                .filter(us->us.isDeleted()==false)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<User> findUserById(int id){
        var user =  userBaseRepository.findAll()
                .stream()
                .filter(u->u.isDeleted()==false)
                .filter(ur->ur.getId()==id)
                .findFirst();
        return user;
    }

    @Override
    public List<User> findAllCustomers() {

        return userBaseRepository.findAll()
                .stream()
                .filter(user->user.getRole()
                        .contains( new Role("customer")))
                .filter(us->us.isDeleted()==false)
                .collect(Collectors.toList());
    }

    @Override
    public User findCustomerById(int id) {
        return userBaseRepository.findAll()
                .stream()
                .filter(s->s.getId()==id)
                .filter(user->user.getRole()
                        .contains( new Role("customer")))
                .filter(us->us.isDeleted()==false)
                .collect(Collectors.toList()).stream().findAny().get();

//        return Optional.of(users.stream().filter(user -> user.getId() == id).findAny().get());
    }

    @Override
    public void deleteCustomerById(int id) {
//        User u = userBaseRepository.findAll()
//                .stream()
//                .filter(s->s.getId()==id)
//                .filter(user->user.getRole()
//                        .contains( new Role("customer")))
//                .filter(us->us.isDeleted()==true)
//                .collect(Collectors.toList()).stream().findAny().get();
        userBaseRepository.updateDeleteStatus(id);
//        userBaseRepository.delete(u);

    }

    @Override
    public List<User> findAllOwners() {
        return (List<User>) userBaseRepository.findAll()
                .stream()
                .filter(user->user.getRole()
                        .contains( new Role("owner")))
                .filter(us->us.isDeleted()==false)
                .collect(Collectors.toList());
    }
    @Override
    public User findOwnerById(int id) {
        return userBaseRepository.findAll()
                .stream()
                .filter(s->s.getId()==id)
                .filter(user->user.getRole()
                        .contains( new Role("owner")))
                .filter(us->us.isDeleted()==false)
                .collect(Collectors.toList()).stream().findAny().get();
    }

    @Override
    public void deleteOwnerById(int id) {
        User u = userBaseRepository.findAll()
                .stream()
                .filter(s->s.getId()==id)
                .filter(user->user.getRole()
                        .contains( new Role("owner")))
                .filter(us->us.isDeleted()==true)
                .collect(Collectors.toList()).stream().findAny().get();
        userBaseRepository.updateDeleteStatus(id);
//        userBaseRepository.delete(u);
    }

    @Override
    public void deleteUserById(int id) {
//        userBaseRepository.findAll()
//                .stream()
//                .filter(us->us.isDeleted()==true)
//                .collect(Collectors.toList()).stream().findAny().get();

        userBaseRepository.updateDeleteStatus(id);
    }
    public void userActivate(int id){
        userBaseRepository.userActivate(id);
    };

    public void userDeactivate(int id){
        userBaseRepository.userDeactivate(id);
    };

}
