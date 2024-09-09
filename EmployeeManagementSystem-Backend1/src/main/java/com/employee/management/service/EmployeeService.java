package com.employee.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entity.Employee;
import com.employee.management.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository er;



	public Employee addEmployee(Employee p) 
	{
		return er.save(p);
	}



	public List<Employee> getAllEmployee() {
		return er.findAll();
	}



	public Employee updateEmployee(int id, Employee e)
	{
		e.setEid(id);
		return er.save(e);
	}



	public void deleteEmployeeById(int id) {
		er.deleteById(id);
		
	}
	
}
