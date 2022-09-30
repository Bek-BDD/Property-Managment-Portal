package com.propertymanagmnetportal.pmp.repository;

import com.propertymanagmnetportal.pmp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBaseRepository extends JpaRepository<User, Integer> {
    User findByEmail(String username);

    User findByResetpasswordtoken(String resetPaswordToken);

    @Query("update User u set u.active= false where u.id=:id")
    void updateActiveStatus(int id);

    @Query("update User u set u.deleted= true where u.id=:id")
    void updateDeleteStatus(int id);

}
