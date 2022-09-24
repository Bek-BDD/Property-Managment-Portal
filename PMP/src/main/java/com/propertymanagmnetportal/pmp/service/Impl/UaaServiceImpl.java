package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.Exceptions.CredentialException;
import com.propertymanagmnetportal.pmp.Exceptions.EmailExistException;
import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.Utility.SiteUrl;
import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.Role;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.security.JwtUtil;
import com.propertymanagmnetportal.pmp.security.MyUserDetailService;
import com.propertymanagmnetportal.pmp.security.MyUserDetails;
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
import java.net.http.HttpRequest;
import java.util.List;

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

    private List<String> blackList;

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
            String resetURL = SiteUrl.getSiteURL(request) + "/reset_pwd?token="+token;
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
   // @Cacheable(())
    public String logout(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        String token = header.split(" ")[1].trim();
        blackList.add(token);
        return "done";
    }

    @Override
    public String signUpImg(User user) {
        userBaseRepository.save(user);
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


}
