package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/application")
public class ApplicationController {
    private ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping
    public ResponseEntity<?> saveApplication(Application application) throws Exception {
        return ResponseEntity.ok().body(applicationService.saveApplication(application));
    }

    @GetMapping
    public ResponseEntity<List<Application>> findAllApplication() {
        return ResponseEntity.ok().body(applicationService.findAll());
    }


}
