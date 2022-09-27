package com.propertymanagmnetportal.pmp.controller;

import com.propertymanagmnetportal.pmp.entity.Application;
import com.propertymanagmnetportal.pmp.service.OwnerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ownersx")
@CrossOrigin
public class OwnerController {

    private OwnerService ownerService;

    public OwnerController(OwnerService ownerService){
        this.ownerService = ownerService;
    }
    @GetMapping("/{id}")
    List<Application> getAllApplication(@PathVariable int id){
        System.out.println(id);
            return  ownerService.applications(id);
    }
}
