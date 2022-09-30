package com.propertymanagmnetportal.pmp.service.Impl;


import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.repository.ApplicationRepo;
import com.propertymanagmnetportal.pmp.repository.PropertyRepo;
import com.propertymanagmnetportal.pmp.security.MyUserDetails;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {
    private EmailService emailService;
    private ApplicationRepo applicationRepo;
    private PropertyRepo propertyRepo;
    private ModelMapper mapper;

    public ApplicationServiceImpl(EmailService emailService, ApplicationRepo applicationRepo, ModelMapper mapper, PropertyRepo propertyRepo) {
        this.emailService = emailService;
        this.applicationRepo = applicationRepo;
        this.propertyRepo = propertyRepo;
        this.mapper = mapper;
    }

    public boolean sendEmail(String to, String subject, String message) {
        return emailService.sendEmail(to, subject, message);
    }

    @Override
    public Boolean saveApplication(Application application) throws Exception {
        try {
            MyUserDetails userdetail = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String userEmail = userdetail.getUsername();
            String ownerEmail = application.getProperty().getUser().getEmail();
            String propertyName = application.getProperty().getName();
            String ownerName = application.getProperty().getUser().getFirstname();

            String message = "Dear " + ownerName + " You have new application for your " +
                    propertyName + " Please contact the customer using " + userEmail;

            sendEmail(ownerEmail, "New application for your:" + propertyName, message);
            return true;
        } catch (Exception e) {
            throw new Exception();
        }
    }

    @Override
    public List<Application> findAll() {
        return applicationRepo.findAll();
    }


}
