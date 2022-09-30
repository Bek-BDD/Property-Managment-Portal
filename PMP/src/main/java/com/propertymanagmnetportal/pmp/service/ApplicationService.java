package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;

import java.time.LocalDate;
import java.util.List;

public interface ApplicationService {
    public Boolean saveApplication(int userid, int propertyid,ApplicationDto application) throws Exception;
    public List<Application> findAll();
    public List<Application> findApplicationByProperty_Address_City(String city);
    public List<Application> findApplicationByProperty_Name(String name);
    public List<Application> findApplicationByDate(LocalDate date);

}
