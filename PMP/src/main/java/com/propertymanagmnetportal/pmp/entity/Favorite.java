package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

//@SQLDelete(sql = "UPDATE favorite SET deleted = true WHERE id=?")
//@Where(clause = "deleted=false")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   // private boolean deleted=Boolean.FALSE;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    public Favorite(User user, Property property) {
        this.user = user;
        this.property = property;
    }

}
