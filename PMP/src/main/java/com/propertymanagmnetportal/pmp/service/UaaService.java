package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.dto.UserDTO;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.security.entity.LoginRequest;
import com.propertymanagmnetportal.pmp.security.entity.LoginResponse;

import javax.servlet.http.HttpServletRequest;

import java.util.List;
import java.util.Optional;

public interface UaaService {
    public LoginResponse login(LoginRequest request);

    LoginRequest signup(UserDTO userDTO);

    String updateResetPasswordToken(String token, String email, HttpServletRequest request);

    User getUserFromResetToken(String resetPasswordToken);

    String logout(HttpServletRequest request);

    String signUpImg(User user);

    public List<User> findAllCustomers();

    public Optional<User> findAllCustomersById(int id);

    public void deleteCustomerById(int id);

    public List<User> findAllOwners();

    public Optional<User> findAllOwnersById(int id);

    public void deleteOwnerById(int id);
}
