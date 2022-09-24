package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;

import java.util.List;

public interface ApplicationService {
    public Boolean saveApplication(ApplicationDto applicationDto);
    public List<ApplicationDto> findAll();
    public ApplicationDto findApplicationById();
    public Boolean updateApplication(ApplicationDto applicationDto);
    public void deleteApplicationById(int id);




}
