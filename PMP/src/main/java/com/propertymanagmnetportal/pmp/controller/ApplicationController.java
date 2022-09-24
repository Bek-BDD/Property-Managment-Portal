package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.Utility.EmailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/application")
public class ApplicationController {
    private EmailService emailService;
    public ApplicationController(EmailService emailService){
        this.emailService=emailService;
    }
    @PostMapping()
    public boolean sendEmail(@RequestParam String to, @RequestParam String sub, @RequestParam String message){
        return emailService.sendEmail(to,sub,message);
    }




}
