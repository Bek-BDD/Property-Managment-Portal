package com.propertymanagmnetportal.pmp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private MultipartFile images;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String roletype;
    private String city;
    private String state;
    private String street_number;
    private String zip_code;


}
