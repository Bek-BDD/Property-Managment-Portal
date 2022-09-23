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
    private double price;
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

    public Property(String name, double price, String description, double area, int numberOfRoom, String type, Address address, boolean status) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.area = area;
        this.numberOfRoom = numberOfRoom;
        this.type = type;
        this.imageUrls = imageUrls;
        this.address = address;
        this.status = status;
    }
}
