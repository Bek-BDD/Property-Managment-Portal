package com.propertymanagmnetportal.pmp.dto;

import lombok.Data;

@Data
public class ChangePasswordDto {
    private int id;
    private String newPassword;
    private String oldPassword;
}
