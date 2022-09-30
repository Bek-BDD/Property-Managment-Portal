package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;

import java.util.List;

public interface ApplicationService {
    public Boolean saveApplication(Application application) throws Exception;
    public List<Application> findAll();
    List<Application> customerApplications(int id);

}
