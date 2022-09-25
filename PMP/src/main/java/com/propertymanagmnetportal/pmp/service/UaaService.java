package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;

import javax.servlet.http.HttpServletRequest;

import java.util.List;

public interface UaaService {
    public LoginResponse login(LoginRequest request);

    LoginRequest signup(UserDTO userDTO);

    String updateResetPasswordToken(String token, String email, HttpServletRequest request);

    User getUserFromResetToken(String resetPasswordToken);

    String logout(HttpServletRequest request);

    String signUpImg(User user);

    public List<User> findAll();
    public List<User> findAllCustomers();

    public User findCustomerById(int id);

    public void deleteCustomerById(int id);

    public List<User> findAllOwners();

    public User findOwnerById(int id);

    public void deleteOwnerById(int id);
}
