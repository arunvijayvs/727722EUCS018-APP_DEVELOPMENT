package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Jobs;


public interface JobsRepo extends JpaRepository<Jobs, Integer> {

    List<Jobs> findByStaffId(int staffId);
}
