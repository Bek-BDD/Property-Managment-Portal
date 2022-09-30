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
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    String state;
    String city;
    int zip;
    String street;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public Address(String state, String city, int zip, String street) {
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }
}
