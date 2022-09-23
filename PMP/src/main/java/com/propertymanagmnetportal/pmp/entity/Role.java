package com.propertymanagmnetportal.pmp.entity;

import javax.persistence.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String role;


}
