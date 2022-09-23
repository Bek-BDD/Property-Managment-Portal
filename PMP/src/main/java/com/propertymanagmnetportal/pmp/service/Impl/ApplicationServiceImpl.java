package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.Utility.EmailServiceImpl;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

public class ApplicationServiceImpl implements ApplicationService {
    @Autowired
    EmailService emailService;
    public boolean sendEmail(String to, String sub, String message){
       return emailService.sendEmail(to,sub,message);
    }


}
