// package com.example.demo.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Staffs;
// import com.example.demo.service.StaffService;

// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// @RestController
// @RequestMapping("/staffs")
// public class StaffController {
//     @Autowired
//     public StaffService staffService;

//     @PostMapping("/post")
//     public String postStaffDetails(@RequestBody List<Staffs> staff) {
//         staffService.postStaffDetails(staff);
//         return "Staff Added";
//     }

//     @GetMapping("/get")
//     public List<Staffs> staffdata() 
//     {
//         return staffService.staffdata();
//     }

//     @DeleteMapping("/delete")
//     public void deletestaff(@RequestParam int id)
//     {
//         staffService.deletestaff(id);
//     }
    
// }