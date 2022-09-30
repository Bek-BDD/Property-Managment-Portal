package com.propertymanagmnetportal.pmp.controller;


import com.propertymanagmnetportal.pmp.entity.Address;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.entity.Image;
import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
@CrossOrigin
@RequestMapping("/properties")
@RestController
public class PropertyController {
    private PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    public List<Property> getAllProperty(){


        return propertyService.getAllProperty();
    }

    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable int id){
        return propertyService.getPropertyById(id);
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public Property saveProperty(
            @RequestPart("images") List<MultipartFile> images
            ,@RequestPart("name") String name
            ,@RequestPart("description") String description
            ,@RequestPart("price") String price
            ,@RequestPart("area") String area
            ,@RequestPart("numberOfRoom") String numberOfRoom
            ,@RequestPart("type") String type
//
////      Address fields
            ,@RequestPart("city") String city
            ,@RequestPart(value = "state", required = false) String state
            ,@RequestPart(value = "street_number", required = false) String street_number
            ,@RequestPart(value = "zip_code", required = false) String zip_code
            ,@RequestPart(value = "owner_id", required = false) String owner_id



    ) throws IOException {

        Address address = new Address(state,city,Integer.parseInt(zip_code),street_number);
        Property property = new Property(name,Double.parseDouble(price),description,Double.parseDouble(area)
                ,Integer.parseInt(numberOfRoom),type,address, false);

        return propertyService.createProperty(property, images, owner_id);
    }

    @PostMapping("/search")
    public List<Property> search(@RequestParam String keyword){
        return propertyService.search(keyword);
    }

    @GetMapping("/rented")
    public List<Application> propertiesRented(@RequestParam int number){
        return propertyService.getPropertiesRented(number);
    }

    @GetMapping("/owner")
    public List<Property> getPropertiesByOwner() {
        return propertyService.getPropertiesByOwnerId();
    }

    @PutMapping(consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public Property UpdateProperty(
            @RequestPart("images") List<MultipartFile> images
            ,@RequestPart("name") String name
            ,@RequestPart("description") String description
            ,@RequestPart("price") String price
            ,@RequestPart("area") String area
            ,@RequestPart("numberOfRoom") String numberOfRoom
            ,@RequestPart("type") String type
//
////      Address fields
            ,@RequestPart("city") String city
            ,@RequestPart(value = "state", required = false) String state
            ,@RequestPart(value = "street_number", required = false) String street_number
            ,@RequestPart(value = "zip_code", required = false) String zip_code
            ,@RequestPart(value = "owner_id", required = false) String owner_id



    ) throws IOException {

        Address address = new Address(state,city,Integer.parseInt(zip_code),street_number);
        Property property = new Property(name,Double.parseDouble(price),description,Double.parseDouble(area)
                ,Integer.parseInt(numberOfRoom),type,address, false);

        return propertyService.UpdateProperty(property, images, owner_id);
    }

    @DeleteMapping("/{id}")
    public Property deleteProperty(@PathVariable int id) {
        return propertyService.deleteProperty(id);
    }

}
