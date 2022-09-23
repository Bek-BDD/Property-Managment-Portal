package com.propertymanagmnetportal.pmp.entity;

import javax.persistence.*;

@Entity
public class Favorite {
    @EmbeddedId
   private FavoriteCompositeKey favoriteCompositeKey;

    @ManyToOne
    @MapsId("user_id")
    private User user;

    @ManyToOne
    @MapsId("property_id")
    private Property property;

}
