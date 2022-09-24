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
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
//@RequestMapping("/uaa")
public class UaaController {
    @Autowired
    private UaaService uaaService;
    @Autowired
    private UserBaseRepository userBaseRepository;


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
    @GetMapping("/reset_pwd")
    public String validateToken(@Param(value = "token") String token, HttpServletResponse response){

            if(uaaService.getUserFromResetToken(token)== null)
                throw new ResponseStatusException(
                        HttpStatus.NOT_FOUND,"token not found",new TokenDoesnotExsist("ex"));
            return "verified";
        }

        @PostMapping("/uaa/logout")
    public String logout(){
            uaaService.logout();
            return null;
        }

    }





