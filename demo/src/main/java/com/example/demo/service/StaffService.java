// package com.example.demo.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Staffs;
// import com.example.demo.repository.StaffRepo;

// @Service
// public class StaffService {

//     @Autowired
//     public StaffRepo staffRepo;

//     public List<Staffs> postStaffDetails(List<Staffs> staff) {
//         return staffRepo.saveAll(staff);
//     }

//     public List<Staffs> staffdata()
//     {
//         return staffRepo.findAll();
//     }

//     public void deletestaff(int id)
//     {
//         staffRepo.deleteById(id);
//     }

// }
