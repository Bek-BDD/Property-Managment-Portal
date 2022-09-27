package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.service.UaaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@RequestBody User user, @PathVariable int id){
        return ResponseEntity.ok().body( uaaService.updateUserById(user,id));
    }
}
