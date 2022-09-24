package com.propertymanagmnetportal.pmp.security;

import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private UserBaseRepository userBaseRepository ;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User result = userBaseRepository.findByEmail(username);
        MyUserDetails userDetails = new MyUserDetails(result);
        return userDetails;
    }
}
