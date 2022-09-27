package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.Exceptions.EmailExistException;
import com.propertymanagmnetportal.pmp.Exceptions.TokenDoesnotExsist;
import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;
import com.propertymanagmnetportal.pmp.service.UaaService;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
//@RequestMapping("/uaa")
public class UaaController {
    @Autowired
    private UaaService uaaService;
    @Autowired
    private UserBaseRepository userBaseRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;


//    public  UaaController(UserBaseRepository userBaseRepository){
//        this.userBaseRepository = userBaseRepository;
//    }
//
//    public UaaController(UaaService uaaService){
//        this.uaaService = uaaService;
//    }


    @PostMapping("/uaa/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        LoginResponse response = uaaService.login(loginRequest);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/uaa/signup")

    public LoginRequest signup(@RequestBody UserDTO userDTO) throws EmailExistException {
        return uaaService.signup(userDTO);
    }

    @GetMapping("/users")
    //@PreAuthorize("hasAuthority('owner')")
    public List<User> findAllUsers(){
        return uaaService.findAll();
    }

    @GetMapping("/customers")
//    @PreAuthorize("hasAuthority('admin')")
    public List<User> findAllCustomers(){
        return  uaaService.findAllCustomers();
    }

    @GetMapping("/customers/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public User findCustomerById(@PathVariable int id){
        return uaaService.findCustomerById(id);
    }

    @DeleteMapping("/customers/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteCustomerById(@PathVariable int id){
        uaaService.deleteCustomerById(id);
    }


    @GetMapping("/owners")
//    @PreAuthorize("hasAuthority('admin')")
    public List<User> findAllOwners(){
        return uaaService.findAllOwners();
    }

    @GetMapping("/owners/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public User findAllOwnersById(@PathVariable int id){
        return uaaService.findOwnerById(id);
    }

    @DeleteMapping("/owners/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteOwnerById(@PathVariable int id){
        uaaService.deleteOwnerById(id);
    }

    @PostMapping("/uaa/resetpassword")
    public String resetPassword(HttpServletRequest request, @RequestBody LoginRequest email){
        System.out.println(email.getEmail());
        String emailToken = RandomString.make(45);
        String resetURL =uaaService.updateResetPasswordToken(emailToken,email.getEmail(),request);
        return resetURL;
    }

    @PostMapping(path = "/uaa/signupimg",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public String signUpImg(
            @RequestPart(value = "images",required = false) MultipartFile images
            , @RequestPart("firstname") String firstname
            , @RequestPart("lastname") String lastname
            , @RequestPart("password") String password
            , @RequestPart("email") String email
            , @RequestPart("roletype") String roletype

////      Address fields
            , @RequestPart(value = "city" ,required = false) String city
            , @RequestPart(value = "state", required = false) String state
            , @RequestPart(value = "street_number", required = false) String street_number
            , @RequestPart(value = "zip_code", required = false) String zip_code
    ) throws IOException {

        UserDTO userDTO = new UserDTO(images,firstname,lastname,email,password,roletype,city,state,street_number,zip_code);
        return uaaService.signUpImg(userDTO);
    }

    @GetMapping("/reset_pwd")
    public String validateToken(@Param(value = "token") String token, HttpServletResponse response){

        if(uaaService.getUserFromResetToken(token)== null)
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "token not found", new TokenDoesnotExsist("ex"));
        return "verified";
    }

    @PostMapping("/uaa/changePassword")
    @CrossOrigin
    public User changePassword(@RequestBody LoginRequest request) {
        return uaaService.changePassword(request.getEmail(), request.getPassword());
    }

    @PostMapping("/uaa/logout")
    public String logout(HttpServletRequest request) {
        uaaService.logout(request.getHeader("Authorization"));
        return null;
    }


    @DeleteMapping("/users/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteUserById(@PathVariable int id) {
        uaaService.deleteById(id);
    }

    @PutMapping("/users/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void updateUserById(@PathVariable int id) {
        uaaService.update(id);
    }


}








