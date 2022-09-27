package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.entity.Application;

import java.util.List;

public interface OwnerService {

    List<Application> applications(int id);
}
