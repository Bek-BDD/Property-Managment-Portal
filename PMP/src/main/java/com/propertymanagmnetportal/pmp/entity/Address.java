package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    String state;
    String city;
    int zip;
    String street;

    public Address(String state, String city, int zip, String street) {
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }
}
