package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.Exceptions.CredentialException;
import com.propertymanagmnetportal.pmp.dto.ChangePasswordDto;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserBaseRepository userBaseRepository;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;
    @Override
    @Transactional
    public void changePassword(ChangePasswordDto changePasswordDto) {
        User user = userBaseRepository.findById(changePasswordDto.getId()).orElseThrow();
        System.out.println(passwordEncoder.encode(changePasswordDto.getOldPassword()));
        System.out.println(user.getPassword());
        if(passwordEncoder.matches(changePasswordDto.getOldPassword(),user.getPassword()))
                user.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
        else
            throw new CredentialException("password does not match");
    }
}
