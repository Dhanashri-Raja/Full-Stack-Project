package com.employee.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entity.Department;
import com.employee.management.repository.DepartmentRepository;

@Service
public class DepartmentService {
	@Autowired
	private DepartmentRepository departmentRepository;
	
	public Department addDepartment(Department dp) {
		return departmentRepository.save(dp);
	}
	public void deleteDepartment(int id) {
		departmentRepository.deleteById(id);
	}	
	}
