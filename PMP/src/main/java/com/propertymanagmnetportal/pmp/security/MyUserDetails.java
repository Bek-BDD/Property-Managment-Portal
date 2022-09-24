package com.propertymanagmnetportal.pmp.security;

import com.propertymanagmnetportal.pmp.entity.Role;
import com.propertymanagmnetportal.pmp.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public class MyUserDetails implements UserDetails {


    private String email;
    private String password;
    private List<SimpleGrantedAuthority> authorities;

    public MyUserDetails(User user){

        this.email = user.getEmail();
        this.password = user.getPassword();
        this.authorities = (user.getRole()).stream().map(role -> role.getRole()).map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
