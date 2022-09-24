package com.propertymanagmnetportal.pmp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String user_type;
    private String resetpasswordtoken;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Role> role;
    @OneToMany(mappedBy = "user")
    private List<Property> properties;

}
