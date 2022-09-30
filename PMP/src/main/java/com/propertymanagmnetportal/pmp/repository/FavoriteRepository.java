package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
    public Optional<Favorite> findFavoritesByUserId(int id);
}
