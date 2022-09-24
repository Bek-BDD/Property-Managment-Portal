package com.propertymanagmnetportal.pmp.service.Impl;


import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.repository.ApplicationRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import com.propertymanagmnetportal.pmp.Utility.EmailService;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {
    private EmailService emailService;
    private ApplicationRepo applicationRepo;
    private ModelMapper mapper;

    public ApplicationServiceImpl(EmailService emailService, ApplicationRepo applicationRepo, ModelMapper mapper){
        this.emailService=emailService;
        this.applicationRepo=applicationRepo;
        this.mapper=mapper;
    }
    public boolean sendEmail(String to, String sub, String message){
       return emailService.sendEmail(to,sub,message);
    }

    @Override
    public Boolean saveApplication(ApplicationDto applicationDto) {
        try{
            Application application = mapper.map(applicationDto,Application.class);
            applicationRepo.save(application);

            return true;
        }catch (Exception e){
            return false;
        }

        return null;
    }

    @Override
    public List<ApplicationDto> findAll() {
        return null;
    }

    @Override
    public ApplicationDto findApplicationById() {
        return null;
    }

    @Override
    public Boolean updateApplication(ApplicationDto applicationDto) {
        return null;
    }

    @Override
    public void deleteApplicationById(int id) {

    }
}
