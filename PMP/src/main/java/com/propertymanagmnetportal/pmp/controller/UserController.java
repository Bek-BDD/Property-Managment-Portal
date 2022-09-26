package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.service.UaaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    UaaService uaaService;
    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email){
       return uaaService.getUserByEmail(email);
    }
}
