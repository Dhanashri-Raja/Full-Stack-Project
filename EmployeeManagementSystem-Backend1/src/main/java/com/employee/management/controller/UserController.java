package com.employee.management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import  com.employee.management.entity.User;
import com.employee.management.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserRepository ur;

	

	@PostMapping
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		return new ResponseEntity<User>(ur.save(user), HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Integer id) {
		User user = ur.findById(id).get();
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable Integer id) {
		ur.deleteById(id);
		return new ResponseEntity<String>("The User is deleted successfully", HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = ur.findAll();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}


	@PostMapping("login")
	public ResponseEntity<User> loginUser(@RequestBody User user) {
		return new ResponseEntity<User>(this.ur.findByEmailAndPassword(user.getEmail(), user.getPass()), HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<User> updateUserInfo(@PathVariable Integer id, @RequestBody User user) {
		User u = ur.findById(id).get();
		u.setFirstName(user.getFirstName());
		u.setLastName(user.getLastName());
		ur.save(u);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}
	//http://localhost:8080/api/user/search?searchText=va
	@GetMapping("/search")
	public ResponseEntity<List<User>> searchUsers(@RequestParam String searchText) {
		List<User> searchResults = ur.findByFirstNameContainingIgnoreCase(searchText);
		return ResponseEntity.ok(searchResults);
	}

}