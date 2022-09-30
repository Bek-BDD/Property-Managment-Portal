package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.service.UaaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    UaaService uaaService;
    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email){

        System.out.println(email);
        User result = uaaService.getUserByEmail(email);
        System.out.println(result.getEmail());
        return result;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@RequestBody User user, @PathVariable int id){
        return ResponseEntity.ok().body( uaaService.updateUserById(user,id));
    }


    @GetMapping("/users")
    //@PreAuthorize("hasAuthority('owner')")
    public List<User> findAllUsers(){
        return uaaService.findAll();
    }

    @GetMapping("/customers")
//    @PreAuthorize("hasAuthority('admin')")
    public List<User> findAllCustomers(){
        return  uaaService.findAllCustomers();
    }

    @GetMapping("/customers/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public User findCustomerById(@PathVariable int id){
        return uaaService.findCustomerById(id);
    }

    @DeleteMapping("/customers/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteCustomerById(@PathVariable int id){
        uaaService.deleteCustomerById(id);
    }


    @GetMapping("/owners")
//    @PreAuthorize("hasAuthority('admin')")
    public List<User> findAllOwners(){
        return uaaService.findAllOwners();
    }

    @GetMapping("/owners/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public User findAllOwnersById(@PathVariable int id){
        return uaaService.findOwnerById(id);
    }

    @DeleteMapping("/owners/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteOwnerById(@PathVariable int id){
        uaaService.deleteOwnerById(id);
    }

    @DeleteMapping("/users/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void deleteUserById(@PathVariable int id){
        uaaService.deleteUserById(id);
    }

    @GetMapping("/users/activate/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void userActivate(@PathVariable int id){
        uaaService.userActivate(id);
    }

    @GetMapping("/users/deactivate/{id}")
//    @PreAuthorize("hasAuthority('admin')")
    public void userDeactivate(@PathVariable int id){
        uaaService.userDeactivate(id);
    }
}
