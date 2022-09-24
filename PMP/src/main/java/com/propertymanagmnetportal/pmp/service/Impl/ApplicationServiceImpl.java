package com.propertymanagmnetportal.pmp.service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.service.ApplicationService;


public class ApplicationServiceImpl implements ApplicationService {
    @Autowired
    private EmailService emailService;
    public boolean sendEmail(String to, String sub, String message){
       return emailService.sendEmail(to,sub,message);
    }


}
