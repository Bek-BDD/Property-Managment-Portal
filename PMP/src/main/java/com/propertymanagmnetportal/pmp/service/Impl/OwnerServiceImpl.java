package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.repository.ApplicationRepo;
import com.propertymanagmnetportal.pmp.service.OwnerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerServiceImpl implements OwnerService {
    private ApplicationRepo applicationRepo;
    public  OwnerServiceImpl(ApplicationRepo applicationRepo){
        this.applicationRepo = applicationRepo;
    }
    @Override
    public List<Application> applications(int id) {
        return applicationRepo.findAllByPropertyUserId(id);
    }
}
