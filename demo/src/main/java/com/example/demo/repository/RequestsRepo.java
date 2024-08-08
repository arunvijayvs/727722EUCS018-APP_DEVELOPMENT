package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Requests;

public interface RequestsRepo extends JpaRepository<Requests, Integer> {

}
