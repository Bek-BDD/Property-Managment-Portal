package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;

public interface UaaService {
    public LoginResponse login(LoginRequest request);

    LoginRequest signup(UserDTO userDTO);
}
