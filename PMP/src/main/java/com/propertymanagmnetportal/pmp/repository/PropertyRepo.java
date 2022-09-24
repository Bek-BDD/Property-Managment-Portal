package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Integer> {
    @Query("SELECT p FROM Property p WHERE CONCAT(p.name, ' ', p.type,  ' ', p.address.city, ' ', p.address.state, ' ', p.address.zip) LIKE %?1%")
    public List<Property> search(String keyword);

    @Query("select p from Property p where p.user.id =: id")
    List<Property> getPropertiesByOwnerId(int id);
}
