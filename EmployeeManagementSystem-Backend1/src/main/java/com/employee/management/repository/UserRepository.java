package com.employee.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.management.entity.User;

@Repository
public interface UserRepository extends JpaRepository <User,Integer>{

	public User findByEmailAndPassword(String email,String password);
	
	List<User> findByFirstNameContainingIgnoreCase(String searchText);

	
}
