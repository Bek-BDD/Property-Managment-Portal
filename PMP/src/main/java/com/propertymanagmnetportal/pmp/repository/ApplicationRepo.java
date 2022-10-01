package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ApplicationRepo extends JpaRepository<Application, Integer> {
        List<Application> findAllByPropertyUserId(int id);
    public List<Application> findApplicationByProperty_Address_City(String city);
    public List<Application> findApplicationByProperty_Name(String name);
    public List<Application> findByDate(LocalDate date);
    List<Application> findAllByUserId(int id);


}
