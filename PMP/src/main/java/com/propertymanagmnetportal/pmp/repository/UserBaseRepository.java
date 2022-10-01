package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserBaseRepository extends JpaRepository<User, Integer> {
    User findByEmail(String username);

    User findByResetpasswordtoken(String resetPaswordToken);

    @Transactional
    @Query("update User u set u.active= false where u.id=:id")
    @Modifying
    void updateActiveStatus(int id);

    @Transactional
    @Query("update User u set u.deleted= true where u.id=:id")
    @Modifying
    void updateDeleteStatus(int id);

    @Transactional
    @Query("update User u set u.active = true where u.id=:id")
    @Modifying
    void userActivate(int id);

    @Transactional
    @Query("update User u set u.active = false where u.id=:id")
    @Modifying
    void userDeactivate(int id);

}
