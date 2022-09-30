package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepo extends JpaRepository<Application, Integer> {
        List<Application> findAllByPropertyUserId(int id);

        List<Application> findAllByUserId(int id);

}
