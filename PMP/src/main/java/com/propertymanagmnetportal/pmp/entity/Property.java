package com.propertymanagmnetportal.pmp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.awt.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
//@SQLDelete(sql="Update table property set deleted=true where id=?")
//@Where(clause="deleted=false")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private double price;
    private String description;
    private double area;
    private int numberOfRoom;
   // private boolean deleted =Boolean.FALSE;
    private String type;

    private LocalDate datePosted;
    private Boolean status;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="property_id")
    private List<Image> imageUrls;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="owner_id")
    private User user;



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

    public Property(int id, String name, double price, String description, double area,
                    int numberOfRoom, String type, Address address, boolean status, LocalDate datePosted) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.area = area;
        this.numberOfRoom = numberOfRoom;
        this.type = type;
        this.imageUrls = imageUrls;
        this.address = address;
        this.status = status;
        this.datePosted = datePosted;
    }
}
