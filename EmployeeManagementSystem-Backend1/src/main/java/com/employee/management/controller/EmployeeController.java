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
import com.employee.management.repository.EmployeeRepository;
import com.employee.management.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employee")
public class EmployeeController 

{
	@Autowired
	private EmployeeService es;
	
	@Autowired
	private EmployeeRepository er;
	
	@PostMapping("/addemployee")
    public String addEmployee(@RequestBody  Employee e) {
        es.addEmployee(e);
        return "Employee added successfully";
    }

	
	@GetMapping("/employeelist")
	public List<Employee> getAllEmployee()
	{
        return es.getAllEmployee();
    }
	
	@GetMapping("/getEmployeeById/{id}")
	public Employee getEmployeeById(@PathVariable int id)
	{
        return er.findById(id).get();
    }
	
	@PutMapping("/updateemployee/{id}")
	public Employee updateEmployee(@PathVariable int id , @RequestBody Employee e) {
		return es.updateEmployee(id, e);
       
    }
	
	@DeleteMapping("/deleteemployee/{id}")
    public String deleteEmployeeById(@PathVariable int id) {
        es.deleteEmployeeById(id);
        return "Employee deleted successfully";
    }
}
