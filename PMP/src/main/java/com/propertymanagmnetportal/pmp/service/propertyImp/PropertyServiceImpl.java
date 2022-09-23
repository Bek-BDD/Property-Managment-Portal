package com.propertymanagmnetportal.pmp.service.propertyImp;

import com.propertymanagmnetportal.pmp.entity.Address;
import com.propertymanagmnetportal.pmp.entity.Image;
import com.propertymanagmnetportal.pmp.entity.Property;
import com.propertymanagmnetportal.pmp.repository.PropertyRepo;
import com.propertymanagmnetportal.pmp.service.PropertyService;
import com.propertymanagmnetportal.pmp.util.AwsUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class PropertyServiceImpl implements PropertyService {

    private PropertyRepo propertyRepo;
    private AwsUtil awsUtil;

    @Autowired
    public PropertyServiceImpl(PropertyRepo propertyRepo, AwsUtil awsUtil) {
        this.propertyRepo = propertyRepo;
        this.awsUtil = awsUtil;
    }

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
    public Property createProperty(Property property, List<MultipartFile> images) {
        List<String> imageUrls = awsUtil.uploadMultipleFiles(images);
        List<Image> imageList = new ArrayList<>();
        imageUrls.forEach(url -> {
            imageList.add(new Image(url));
        });
        property.setImageUrls(imageList);
        return propertyRepo.save(property);
    }


}
