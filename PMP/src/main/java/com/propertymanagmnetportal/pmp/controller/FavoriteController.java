package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favorites")
@CrossOrigin
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @GetMapping
    public List<Property> findAll(){
        return favoriteService.findAll();
    }

    @GetMapping("/{id}")
    public List<Property> getFavoriteById(@PathVariable int id){
        return favoriteService.getFavoriteByUserId(id);
    }

    @PostMapping
    public void addFavorite(@RequestParam int user_id, @RequestParam int property_id){
         favoriteService.addFavorite(user_id, property_id);
    }

    @DeleteMapping("/{id}")
    public void removeFavorite(@PathVariable int id){
        favoriteService.removeFavorite(id);
    }

    @DeleteMapping()
    public void removeFavouriteByUserIdAndPropertyId(@RequestParam int user_id, @RequestParam int property_id){
       favoriteService.deleteFavouriteByUserIdAndPropertyId(user_id,property_id);
    }
}
