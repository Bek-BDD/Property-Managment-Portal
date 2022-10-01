package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.dto.ApplicationDto;
import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.service.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/application")
public class ApplicationController {
    private ApplicationService applicationService;
    public ApplicationController(ApplicationService applicationService){
        this.applicationService=applicationService;
    }
    @PostMapping
    public ResponseEntity<?> saveApplication(@RequestParam int userid, @RequestParam int propertyid, @RequestBody ApplicationDto application ) throws Exception {
       return ResponseEntity.ok().body(applicationService.saveApplication(userid,propertyid,application));
    }
    @GetMapping
    public ResponseEntity<List<Application>>findAllApplication(){
        return ResponseEntity.ok().body(applicationService.findAll());
    }
    @GetMapping("/filter/city")
    public List<Application> findApplicationByProperty_Address_City(@PathVariable String cityname){
        return applicationService.findApplicationByProperty_Address_City(cityname);
    }
    @GetMapping("/filter/name")
    public List<Application> findApplicationByProperty_Name(@PathVariable String name){
        return applicationService.findApplicationByProperty_Name(name);
    }
    @GetMapping("/filter/date/")
    public List<Application> findApplicationByDate(@RequestParam LocalDate date){
        return findApplicationByDate(date);
    }

    @GetMapping("/customers/{id}")
    public List<Application> customerApplication(@PathVariable int id){
        return applicationService.customerApplications(id);
    }

    //////////////////
    /////api fetch by user id
    //////////////////





}
