package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Circular;
import com.example.demo.repository.CircularRepo;

@Service
public class CircularService {
    @Autowired
    public CircularRepo circularRepo;

     public Circular postCircular(Circular circular) {
        return circularRepo.save(circular);
    }

    public List<Circular> circulardata()
    {
        return circularRepo.findAll();
    }

}
