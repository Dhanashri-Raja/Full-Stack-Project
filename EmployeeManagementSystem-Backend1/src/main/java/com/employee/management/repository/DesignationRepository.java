package com.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.entity.Designation;



public interface DesignationRepository extends JpaRepository<Designation, Integer> {

}