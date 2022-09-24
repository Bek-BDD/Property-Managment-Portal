package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpRequest;

public interface UaaService {
    public LoginResponse login(LoginRequest request);

    LoginRequest signup(UserDTO userDTO);

    String updateResetPasswordToken(String token, String email, HttpServletRequest request);

    User getUserFromResetToken(String resetPasswordToken);

    String logout(String request);

    String signUpImg(UserDTO userDTO);
}
