package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite,Integer> {
    public List<Favorite> findFavoritesByUserId(int id);
    public List<Favorite> findFavoriteByUserIdAndPropertyId(int user_id, int property_id);
//    @Query("delete from Favorite f where f.user.id =:user_id and f.property.id=:property_id")
//    public void deleteFavouriteByUserIdAndPropertyId(int user_id, int property_id);
//
    public void deleteById(int id);
}
