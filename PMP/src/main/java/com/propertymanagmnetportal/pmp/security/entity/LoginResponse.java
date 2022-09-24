package com.propertymanagmnetportal.pmp.security.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.repository.NoRepositoryBean;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private String jwtToken;
    private String refereshToken;
}
