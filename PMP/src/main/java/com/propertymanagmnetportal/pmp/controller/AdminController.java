package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.dto.ChangePasswordDto;
import com.propertymanagmnetportal.pmp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasAuthority('admin')")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/{id}")
    public void activateDeactivate(@PathVariable int id){
        adminService.activiateDeactivate(id);
    }

    @PostMapping("/changePassword")
    public void changePassword(@RequestBody ChangePasswordDto changePasswordDto){
        adminService.changePassword(changePasswordDto);
    }
}
