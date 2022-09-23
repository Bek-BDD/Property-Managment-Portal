package com.propertymanagmnetportal.pmp.entity;

import com.propertymanagmnetportal.pmp.Utility.RoleType;
import javax.persistence.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private RoleType roleType;


}
