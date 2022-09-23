package com.propertymanagmnetportal.pmp.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class FavoriteCompositeKey implements Serializable {

    private int user_id;
    private int property_id;
}
