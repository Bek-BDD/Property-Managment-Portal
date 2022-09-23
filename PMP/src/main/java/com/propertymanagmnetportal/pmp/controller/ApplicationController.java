package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.Utility.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    private EmailService emailService;

    @PostMapping()
    public boolean sendEmail(@RequestParam String to, @RequestParam String sub, @RequestParam String message){
        return emailService.sendEmail(to,sub,message);
    }




}
