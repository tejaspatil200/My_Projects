package com.onlineshopping.daoes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	Employee findByEmployeeEmail(String email);

	Employee findByEmployeePassword(String password);
}
