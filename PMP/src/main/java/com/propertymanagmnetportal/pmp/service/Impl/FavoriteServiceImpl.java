package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.entity.Favorite;
import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.FavoriteRepository;
import com.propertymanagmnetportal.pmp.repository.PropertyRepo;
import com.propertymanagmnetportal.pmp.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepo;

//    @Autowired
//    private UserRepository userRepository;

    @Autowired
    private PropertyRepo propertyRepo;


    @Override
    public List<Property> findAll() {
        return favoriteRepo.findAll()
                .stream().map(data->data.getProperty()).collect(Collectors.toList());
    }

    @Override
    public List<Property> getFavoriteByUserId(int id) {
        return favoriteRepo.findFavoritesByUserId(id)
                .stream()
                .map(Favorite::getProperty)
                .collect(Collectors.toList());
    }

    @Override
    public void addFavorite(int user_id, int property_id){
//       Optional<User> user = userRepo.findById(user_id);
//       Optional<Property> property = propertyRepo.findById(property_id);
//          favoriteRepo.save(new Favorite(user.get(), property.get()));
    }

    @Override
    public void removeFavorite(int id) {
        favoriteRepo.deleteById(id);
    }

    @Override
    public void removeAllFavorites() {
        favoriteRepo.deleteAll();
    }


}
