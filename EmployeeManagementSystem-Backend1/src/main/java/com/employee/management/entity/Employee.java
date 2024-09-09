package com.employee.management.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
@Entity
public class Employee 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eid;
	
	@NotBlank(message = "Employee name should not blank")
	@Size(min = 3, message = "Employee name must contain at least 3 characters")
	private String ename;
	
	@NotBlank(message = "gender name should not blank")
	private String gender;
	
	@Column(name = "emailid", unique = true, length = 25)
	@NotEmpty
	@Email(message = "Email is not valid")
	private String email;
	
	@NotNull(message = "Salary Can Not Be Empty")
	private long salary;
	
	private String joiningDate;
	
	private String image;
	
	@Column(name = "mobile_number", unique = true)
	@NotNull(message = "Mobile Number cannot be empty")
	@Pattern(regexp = "^[6-9][0-9]{9}$", message = "Invalid Mobile Number")
	private String mobile; 
	
	@ManyToOne
    @JoinColumn(name = "d_id")
     private Department department;

    @ManyToOne
    @JoinColumn(name = "dc_id")
    private Designation designation;

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	
	public String getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(String joiningDate) {
		this.joiningDate = joiningDate;
	}



	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public Designation getDesignation() {
		return designation;
	}

	public void setDesignation(Designation designation) {
		this.designation = designation;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	

}
