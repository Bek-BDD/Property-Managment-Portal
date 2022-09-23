package com.propertymanagmnetportal.pmp.entity;

import javax.persistence.*;

@Entity
public class Favorite {
    @EmbeddedId
   private FavoriteCompositeKey favoriteCompositeKey;

    @ManyToOne
    @MapsId("user_id")
    private Customer customer;

    @ManyToOne
    @MapsId("property_id")
    private Property property;

}
