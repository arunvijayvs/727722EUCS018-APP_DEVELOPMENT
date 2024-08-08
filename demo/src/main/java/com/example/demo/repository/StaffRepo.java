package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Staffs;

public interface StaffRepo extends JpaRepository<Staffs, Integer> {
    Staffs findByEmail(String username);
    
}
