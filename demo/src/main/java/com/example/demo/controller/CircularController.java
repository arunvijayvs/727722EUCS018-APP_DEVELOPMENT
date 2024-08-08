package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Circular;
import com.example.demo.service.CircularService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/circular")
@CrossOrigin(origins = "http://localhost:3000") 
public class CircularController {
    @Autowired
    public CircularService circularService;

    @PostMapping
    public String postCircular(@RequestBody Circular circular) {
        circularService.postCircular(circular);
        return "Circular Added";
    }
    
    @GetMapping
    public List<Circular> circulardata() 
    {
        return circularService.circulardata();
    }

}
