package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String role;

    public Role(String role) {
        this.role = role;
    }


    @Override
    public boolean equals(Object o) {


        Role objectRole = (Role) o;

        return objectRole.getRole().equals(this.role);
    }


}
