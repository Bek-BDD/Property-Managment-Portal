package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.Exceptions.EmailExistException;
import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;
import com.propertymanagmnetportal.pmp.service.UaaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    @PreAuthorize("hasRole('owner')")
    public String test(){
        return "<h2>Test</h2>";
    }



}
