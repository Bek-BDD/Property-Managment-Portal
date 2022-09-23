package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    double price;
    private String description;
    private double area;
    private int numberOfRoom;
    private String type;
    private Boolean status;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="property_id")
    private List<Image> imageUrls;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @ManyToOne
    @JoinColumn(name="owner_id")
    private User user;



}
