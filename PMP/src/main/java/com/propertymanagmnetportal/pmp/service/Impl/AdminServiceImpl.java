package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    UserBaseRepository userBaseRepository;

    @Override
    public void activiateDeactivate(int id) {
        userBaseRepository.updateActiveStatus(id);
    }
}
