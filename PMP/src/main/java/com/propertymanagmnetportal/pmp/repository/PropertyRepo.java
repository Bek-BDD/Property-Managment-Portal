package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Integer> {
}
