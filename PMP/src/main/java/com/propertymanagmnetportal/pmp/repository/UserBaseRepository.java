package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBaseRepository<T extends User> extends JpaRepository<T,Integer> {
    T findByEmail(String username);
}
