package com.propertymanagmnetportal.pmp.service.Impl;

import com.propertymanagmnetportal.pmp.Exceptions.UserNotFoundException;
import com.propertymanagmnetportal.pmp.Utility.AwsUtil;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.entity.Image;
import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.entity.User;
import com.propertymanagmnetportal.pmp.repository.ApplicationRepo;
import com.propertymanagmnetportal.pmp.repository.PropertyRepo;
import com.propertymanagmnetportal.pmp.repository.UserBaseRepository;
import com.propertymanagmnetportal.pmp.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PropertyServiceImpl implements PropertyService {

    private PropertyRepo propertyRepo;
    private AwsUtil awsUtil;
    private ApplicationRepo applicationRepo;
    private UserBaseRepository userBaseRepository;

    @Autowired
    public PropertyServiceImpl(PropertyRepo propertyRepo, AwsUtil awsUtil, ApplicationRepo applicationRepo, UserBaseRepository userBaseRepository) {
        this.propertyRepo = propertyRepo;
        this.awsUtil = awsUtil;
        this.applicationRepo = applicationRepo;
        this.userBaseRepository = userBaseRepository;
    }

    @Autowired


    @Override
    public List<Property> getAllProperty() {
        return propertyRepo.findAll();
    }

    @Override
    public Property getPropertyById(int id) {
        return propertyRepo.findById(id).get();
    }

    @Override
    public Property saveProperty(Property property) {
        return propertyRepo.save(property);
    }

    @Override
    public Property createProperty(Property property, List<MultipartFile> images, String user_id) {
        User user = userBaseRepository.findById(Integer.parseInt(user_id)).get();
        if (user == null) {
            throw new UserNotFoundException("User not found");
        }
        property.setUser(user);


        List<String> imageUrls = awsUtil.uploadMultipleFiles(images);
        List<Image> imageList = new ArrayList<>();
        imageUrls.forEach(url -> {
            imageList.add(new Image(url));
        });
        property.setImageUrls(imageList);
        return propertyRepo.save(property);
    }

    @Override
    public List<Property> search(String keyWord) {
        return propertyRepo.search(keyWord);
    }

    @Override
    public List<Application> getPropertiesRented(int number) {

        return applicationRepo.findAll().stream()
                .sorted((d1, d2) -> d2.getDate().compareTo(d1.getDate()))
                .limit(number)
                .collect(Collectors.toList());
    }

    @Override
    public List<Property> getPropertiesByOwnerId() {
        Integer id ;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            User user = userBaseRepository.findByEmail(currentUserName);
            id = user.getId();
        } else throw new UserNotFoundException("user id not found!");

        Integer finalId = id;
        List<Property> listofProperty = propertyRepo.findAll().stream()
                .filter(a -> a.getUser().getId().equals(finalId))
                .collect(Collectors.toList());

        return listofProperty;
    }

    @Override
    public Property UpdateProperty(Property property, List<MultipartFile> images) {
        System.out.println(property.getImageUrls());
        if(!(images == null || images.isEmpty())) {
            List<String> imageUrls = awsUtil.uploadMultipleFiles(images);
            List<Image> imageList = new ArrayList<>();
            imageUrls.forEach(url -> {
                imageList.add(new Image(url));
            });
            property.setImageUrls(imageList);
        }

        return propertyRepo.save(property);
    }

    @Override
    public Property deleteProperty(int id) {
      Property property =  propertyRepo.findById(id).get();
         propertyRepo.deleteById(id);
         return property;
    }


}
