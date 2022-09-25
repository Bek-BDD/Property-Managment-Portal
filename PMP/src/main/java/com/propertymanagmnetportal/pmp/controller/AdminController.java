package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/{id}")
    public void activateDeactivate(@PathVariable int id){
        adminService.activiateDeactivate(id);
    }
}
