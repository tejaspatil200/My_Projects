package com.onlineshopping.services;

import java.util.List;

import com.onlineshopping.entities.Employee;

public interface EmployeeService {
	List<Employee> findallemployee();

	Employee save(Employee e);

	void deleteById(Integer id);
	
	Employee authentication(String email, String password);
}
