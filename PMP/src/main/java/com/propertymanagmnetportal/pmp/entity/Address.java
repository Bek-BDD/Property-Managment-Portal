package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
//@SQLDelete(sql = "UPDATE address SET deleted = true WHERE id=?")
//@Where(clause = "deleted=false")
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    String state;
    String city;
    int zip;
    String street;

   // private boolean deleted =Boolean.FALSE;

    public Address(String state, String city, int zip, String street) {
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }
}
