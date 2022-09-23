package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

@DiscriminatorValue("owner")
@Entity
public class Owner  extends User{

    @OneToMany
    @JoinColumn(name="owner_id")
    private List<Property> properties;
}
