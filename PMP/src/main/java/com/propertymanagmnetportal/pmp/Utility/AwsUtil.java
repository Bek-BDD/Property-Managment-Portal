package com.propertymanagmnetportal.pmp.Utility;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Component
public class AwsUtil {

    private AmazonS3 amazonS3;

    public AwsUtil(AmazonS3 amazonS3) {
        this.amazonS3 = amazonS3;
    }

    public String uploadFile(MultipartFile file) {

        String filenameExtension = StringUtils.getFilenameExtension(file.getOriginalFilename());

        String key = System.currentTimeMillis() + "_" + filenameExtension;

        ObjectMetadata metaData = new ObjectMetadata();
        metaData.setContentLength(file.getSize());
        metaData.setContentType(file.getContentType());

        try {
            amazonS3.putObject("propertymanagmentportal", key, file.getInputStream(), metaData);
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An exception occured while uploading the file");
        }

        amazonS3.setObjectAcl("propertymanagmentportal", key, CannedAccessControlList.PublicRead);
        URL url = amazonS3.getUrl("propertymanagmentportal", key);

        return url.toString();
    }

    public List<String> uploadMultipleFiles(List<MultipartFile> files) {
        List<String> urlList = new ArrayList<>();

        files.forEach(file -> {
            urlList.add(uploadFile(file));
        });

        return urlList;
    }
}
