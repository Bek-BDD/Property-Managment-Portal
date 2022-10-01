package com.propertymanagmnetportal.pmp.service.Impl;


import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.entity.ApplicationCompositeKey;
import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.ApplicationRepo;
import com.propertymanagmnetportal.pmp.repository.PropertyRepo;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;


@Service
public class ApplicationServiceImpl implements ApplicationService {
    private EmailService emailService;
    private ApplicationRepo applicationRepo;
    private ModelMapper mapper;
    private PropertyRepo propertyRepo;
    private UserBaseRepository userBaseRepository;


    public ApplicationServiceImpl(EmailService emailService, ModelMapper mapper, ApplicationRepo applicationRepo, PropertyRepo propertyRepo, UserBaseRepository userBaseRepository){
        this.emailService=emailService;
        this.mapper=mapper;
        this.applicationRepo=applicationRepo;
        this.propertyRepo=propertyRepo;
        this.userBaseRepository=userBaseRepository;

    }
    public boolean sendEmail(String to, String subject, String message){
       return emailService.sendEmail(to,subject,message);
    }

    @Override
    public Boolean saveApplication(int userid, int propertyid, ApplicationDto app) throws Exception{
//            System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
//            MyUserDetails userdetail = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ApplicationCompositeKey compositeKey =new ApplicationCompositeKey(userid,propertyid);
        Property property =propertyRepo.findById(propertyid).get();
        User user =userBaseRepository.findById(userid).get();
        LocalDate now =LocalDate.now();
        Application application =mapper.map(app,Application.class);
        application.setCompositeKey(compositeKey);
        application.setDate(now);
        application.setUser(user);
        application.setProperty(property);
        applicationRepo.save(application);
        String userEmail= user.getEmail();
        String ownerEmail = property.getUser().getEmail();
        String propertyName= property.getName();
        String ownerName = property.getUser().getFirstname();

        String message="Dear "+ ownerName +" You have new application for your " +
                propertyName+",    "+ app.getFullname()+ " is saying: "+ app.getMessage()+ ",    Please contact the customer using "+ app.getPhone() +" Or " + userEmail;

        applicationRepo.save(application);
        sendEmail(ownerEmail, "New Application Submitted" + propertyName ,message);

            return true;

    }
//    public Boolean saveApplication(Application application) throws Exception{
////            System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
////            MyUserDetails userdetail = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//        String userEmail=application.getUser().getEmail();
//        String ownerEmail = application.getProperty().getUser().getEmail();
//        String propertyName= application.getProperty().getName();
//        String ownerName =application.getProperty().getUser().getFirstname();
//
//        String message="Dear "+ ownerName +" You have new application for your " +
//                propertyName+" Please contact the customer using "+userEmail;
//
//        applicationRepo.save(application);
//        sendEmail(ownerEmail, "New application for your:" + propertyName ,message);
//        return true;
//
//    }

    @Override
    public List<Application> findAll() {
        return applicationRepo.findAll();
    }

    @Override
    public List<Application> customerApplications(int id){
        return applicationRepo.findAllByUserId(id);
    }
    public List<Application> findApplicationByProperty_Address_City(String city){
        return applicationRepo.findApplicationByProperty_Address_City(city);
    }
    public List<Application> findApplicationByProperty_Name(String name){
        return applicationRepo.findApplicationByProperty_Name(name);
    }
    public List<Application> findApplicationByDate(LocalDate date){
       return applicationRepo.findByDate(date);
    }



}
