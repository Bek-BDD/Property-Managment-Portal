package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.propertymanagmnetportal.pmp.Utility.RoleType;
import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String role;

    public Role(String role){
        this.role = role;
    }



}
