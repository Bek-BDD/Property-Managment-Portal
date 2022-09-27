package com.propertymanagmnetportal.pmp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@SQLDelete(sql = "UPDATE users SET deleted = true WHERE id=?")
@Where(clause = "deleted=false")
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
    private boolean deleted = Boolean.FALSE;
    private String resetpasswordtoken;
    private boolean active = Boolean.TRUE;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private List<Role> role;
    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Property> properties;


    public User(String firstname,String lastname,String email,String password,String imageurl,Address address,List<Role> role){
        this.firstname = firstname;
        this.lastname = lastname;
        this.imageurl = imageurl;

        this.email = email;
        this.address = address;
        this.password= password;
        this.role = role;
    }
}
