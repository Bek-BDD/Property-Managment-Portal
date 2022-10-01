package com.propertymanagmnetportal.pmp.service;

import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.entity.Image;
import com.propertymanagmnetportal.pmp.entity.Property;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface PropertyService {
    List<Property> getAllProperty();

    Property getPropertyById(int id);

    List<Property> getPropertiesByOwnerId(long id);

    Property saveProperty(Property property);

    Property createProperty(Property property, List<MultipartFile> images, String userId);

    List<Property> search(String keyWord);

    List<Application> getPropertiesRented(int number);



    Property UpdateProperty(Property property, List<MultipartFile> images);

    Property deleteProperty(int id);
}
