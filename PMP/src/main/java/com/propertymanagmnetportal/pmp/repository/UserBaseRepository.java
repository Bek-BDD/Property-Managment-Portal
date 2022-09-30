package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBaseRepository extends JpaRepository<User,Integer> {
    User findByEmail(String username);

    User findByResetpasswordtoken(String resetPaswordToken);
    @Query("update User u set u.active= false where u.id=:id")
    void updateActiveStatus(int id);

    @Query("update User u set u.deleted= true where u.id=:id")
    void updateDeleteStatus(int id);

    @Query("update User u set u.active = true where u.id=:id")
    void userActivate(int id);

    @Query("update User u set u.active = true where u.id=:id")
    void userDeactivate(int id);

}
