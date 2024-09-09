package com.employee.management.entity;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "Designation")
public class Designation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dc_id;

    @Column
    @NotBlank(message = "Employee name should not blank")
    private String designationName;

    @ManyToOne(fetch = FetchType.EAGER)     
    @JsonBackReference
    @JoinColumn(name = "d_id")
    private Department department;

    public int getDc_id() {
		return dc_id;
	}

    public void setDc_id(int dc_id) {
		this.dc_id = dc_id;
	}

    public String getDesignationName() {
		return designationName;
	}

    public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}

    public Department getDepartment() {
		return department;
	}

    public void setDepartment(Department department) {
		this.department = department;
	}

    
   
}