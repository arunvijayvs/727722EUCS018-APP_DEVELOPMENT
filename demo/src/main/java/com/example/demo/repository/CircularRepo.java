package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Circular;

public interface CircularRepo extends JpaRepository<Circular, Integer> {

}
