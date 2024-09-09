package com.employee.management.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.entity.Employee;
import com.employee.management.entity.Department;
import com.employee.management.repository.DepartmentRepository;
import com.employee.management.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/department")
public class DepartmentController {

	@Autowired
	private DepartmentRepository dr;
	
	@PostMapping("/add")
    public String addDepartment(@RequestBody  Department d) {
        dr.save(d);
        return "Department added successfully";
    }
	
	@GetMapping("/list")
	public List<Department> getAllEmployee()
	{
        return dr.findAll();
    }
	
	@GetMapping("/getbyid/{id}")
	public Department getDepartmentById(@PathVariable int id)
	{
        return dr.getById(id);
    }
	
	@DeleteMapping("/delete/{id}")
    public String deleteDepartmentById(@PathVariable int id) {
        dr.deleteById(id);
        return "Employee deleted successfully";
    }
}
