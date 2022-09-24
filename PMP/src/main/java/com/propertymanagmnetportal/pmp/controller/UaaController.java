package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.Exceptions.EmailExistException;
import com.propertymanagmnetportal.pmp.Exceptions.TokenDoesnotExsist;
import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.Address;
import com.propertymanagmnetportal.pmp.entity.Role;
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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
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

    @GetMapping("/test")
    //@PreAuthorize("hasAuthority('owner')")
    public List<User> test(){
        return userBaseRepository.findAll();
    }

    @PostMapping("/uaa/resetpassword")
    public String resetPassword(HttpServletRequest request, @RequestBody String email){
       String emailToken = RandomString.make(45);
       String resetURL =uaaService.updateResetPasswordToken(emailToken,email,request);
       return resetURL;
    }

    @PostMapping(path = "/uaa/signupimg",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public String signUpImg(
             @RequestPart("images") List<MultipartFile> images
            ,@RequestPart("firstname") String firstname
            ,@RequestPart("lastname") String lastname
            ,@RequestPart("password") String password
            ,@RequestPart("email") String email
            ,@RequestPart("roletype") String roletype
//
////      Address fields
            ,@RequestPart("city") String city
            ,@RequestPart(value = "state", required = false) String state
            ,@RequestPart(value = "street_number", required = false) String street_number
            ,@RequestPart(value = "zip_code", required = false) String zip_code
            ) throws IOException {
//        System.out.println("hello");
        Address address = new Address(state,city,Integer.parseInt(zip_code),street_number);
        Role role;
        if(roletype == "owner"){
            role = new Role("owner");
        }else if(roletype == "customer"){
            role = new Role("customer");
        }else{
            role = new Role("admin");
        }


        //call dagis method here

        User user = new User( firstname,lastname,email,passwordEncoder.encode(password),"XXXXX",address,List.of(role));

        return uaaService.signUpImg(user);
    }
    @GetMapping("/reset_pwd")
    public String validateToken(@Param(value = "token") String token, HttpServletResponse response){

            if(uaaService.getUserFromResetToken(token)== null)
                throw new ResponseStatusException(
                        HttpStatus.NOT_FOUND,"token not found",new TokenDoesnotExsist("ex"));
            return "verified";
        }

        @PostMapping("/uaa/logout")
    public String logout(HttpServletRequest request){
            uaaService.logout(request);
            return null;
        }

    }





