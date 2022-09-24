package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstname;
    private String lastname;
    @Column(unique = true)
    private String email;
    private String password;
    private String imageurl;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Role> role;
    @OneToMany(mappedBy = "user")
    private List<Property> properties;

}
