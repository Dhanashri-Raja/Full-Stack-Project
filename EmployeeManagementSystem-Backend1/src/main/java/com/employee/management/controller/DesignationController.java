package com.employee.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import  com.employee.management.entity.Department;
import  com.employee.management.entity.Designation;
import com.employee.management.repository.DepartmentRepository;
import  com.employee.management.repository.DesignationRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/designation")
public class DesignationController {
	@Autowired
	private DesignationRepository r;
	
	@PostMapping("/add")
    public String addDesignation(@RequestBody  Designation d) {
        r.save(d);
        return "Designation added successfully";
    }
	
	@GetMapping("/list")
	public List<Designation> getAllEmployee()
	{
        return r.findAll();
    }
	
	@GetMapping("/getbyid/{id}")
	public Designation getDesignationById(@PathVariable int id)
	{
        return r.getById(id);
    }
	
	@DeleteMapping("/delete/{id}")
    public String deleteDesignationById(@PathVariable int id) {
        r.deleteById(id);
        return "employee deleted successfully";
    }
}



//"ename":"kalai",
//"email": "sarla1680@gmail.com",
//"salary" : 30000,
//"department" :" Developer",
//"designation" : "Java Developer",
//"joiningDate":"2024-05-01",
//"Department":{
//   "d_id":1
//}
