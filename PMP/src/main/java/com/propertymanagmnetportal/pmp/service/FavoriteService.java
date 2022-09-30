package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.entity.Property;

import java.util.List;

public interface FavoriteService {

    List<Property> findAll();

    List<Property> getFavoriteByUserId(int id);

    void addFavorite(int user_id, int property_id);

    void removeFavorite(int id);

    void removeAllFavorites();
     void deleteFavouriteByUserIdAndPropertyId(int user_id, int property_id);

}
