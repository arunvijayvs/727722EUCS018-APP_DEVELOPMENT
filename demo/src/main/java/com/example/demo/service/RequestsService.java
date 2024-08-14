package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Requests;
import com.example.demo.repository.RequestsRepo;

@Service
public class RequestsService {

    @Autowired
    public RequestsRepo requestRepo;

    public Requests postRequestDetails(Requests request)
    {
        return requestRepo.save(request);
    }

    public List<Requests> getRequests()
    {
        return requestRepo.findAll();
    }

    public void deleterequests(int id)
    {
        requestRepo.deleteById(id);
    }
}