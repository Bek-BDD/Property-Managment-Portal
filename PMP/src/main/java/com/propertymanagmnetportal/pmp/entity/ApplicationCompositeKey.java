package com.propertymanagmnetportal.pmp.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationCompositeKey implements Serializable {
    private int user_id;
    private int property_id;
}
