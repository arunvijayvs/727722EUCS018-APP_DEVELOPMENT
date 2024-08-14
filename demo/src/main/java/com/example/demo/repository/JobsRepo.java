package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Jobs;


public interface JobsRepo extends JpaRepository<Jobs, Integer> {

    @Modifying
    @Query(value = "DELETE FROM jobs WHERE task = :task AND staff_id = :staffId", nativeQuery = true)
    void deleteByTaskAndStaffId(@Param("task") String task, @Param("staffId") int staffId);
    List<Jobs> findByStaffId(int staffId);
    List<Jobs> findBydate(String date);
}