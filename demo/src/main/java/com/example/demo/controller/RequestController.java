package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Requests;
import com.example.demo.service.RequestsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/requests")
@CrossOrigin(origins = "http://localhost:3000")
public class RequestController {
    @Autowired
    public RequestsService requestsService;

    @PostMapping("/post")
    public String postRequestDetails(@RequestBody List<Requests> request) {
        requestsService.postRequestDetails(request);
        return "Request Added";
    }

    @GetMapping("/get")
    public List<Requests> getRequests() {
        return requestsService.getRequests();
    }
    
    @DeleteMapping("/delete")
    public void deletesrequests(@RequestParam int id)
    {
        requestsService.deleterequests(id);
    }
    
}
