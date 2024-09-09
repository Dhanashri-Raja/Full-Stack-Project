package com.employee.management.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "User")
public class User {

	@Id
	@SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1, initialValue = 1001)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
	private Integer id;

	@NotBlank(message = "first name not blank")
	@Size(min = 3, message = "first name must contain at least 3 characters")
	@Column(name = "first_name", length = 60)
	private String firstName;

	@NotBlank
	@Column(name = "last_name", length = 30)
	private String lastName;


	@NotBlank
	@Email(message = "email is not valid")
	@Size(min = 5, max = 60, message = "Email must be between 5 and 60 characters")
	@Column(length = 60, unique = true)
	private String email;

//	@NotBlank
//	@Column(name = "password", length = 20)
	private String password;


//	@NotBlank
//	@Column(name = "role", length = 20)
	private String role;	
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	public User() {
	}

	public User(String firstName, String lastName,  String email,
			String pass, String role, @NotBlank String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	public String getPass() {
		return password;
	}

	public void setPass(String pass) {
		this.password = pass;
	}
	

	
	
}
