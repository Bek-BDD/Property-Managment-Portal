package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.dto.ChangePasswordDto;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.service.UaaService;
import com.propertymanagmnetportal.pmp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    UaaService uaaService;
    @Autowired
    UserService userService;
    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email){

        System.out.println(email);
        User result = uaaService.getUserByEmail(email);
        System.out.println(result.getEmail());
        return result;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@RequestBody User user, @PathVariable int id){
        return ResponseEntity.ok().body( uaaService.updateUserById(user,id));
    }

    @GetMapping("/changepassword")
    public void changePassword(@RequestBody ChangePasswordDto changePasswordDto){
        userService.changePassword(changePasswordDto);
    }
}
