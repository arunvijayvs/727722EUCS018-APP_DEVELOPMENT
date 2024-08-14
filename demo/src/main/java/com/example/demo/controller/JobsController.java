package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Jobs;
import com.example.demo.service.JobsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/jobsalloted")
@CrossOrigin(origins = "http://localhost:3000")
public class JobsController {
    @Autowired
    public JobsService jobsService;

    @PostMapping("/post")
    public String postTask(@RequestBody Jobs jobs) {
        jobsService.postTask(jobs);
        return "Job Alloted";
    }

    @GetMapping("/get")
    public List<Jobs> jobsdata(@RequestParam int staffId) 
    {
        return jobsService.jobsdata(staffId);
    }
    @GetMapping("/getbydate")
    public List<Jobs> jobsdata(@RequestParam String date) 
    {
        return jobsService.jobsdatabydate(date);
    }

   @DeleteMapping("/delete")
    public ResponseEntity<Void> deletesjob(@RequestParam String task, @RequestParam int staffId) 
    {
        jobsService.deletejob(task, staffId);
        return ResponseEntity.noContent().build();
    }
    
}