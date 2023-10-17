package com.onlineshopping.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.Employee;

import com.onlineshopping.models.EmployeeDto;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.EmployeeServiceImpl;

@CrossOrigin
@RestController
public class EmployeeAdmincontroller {

	@Autowired
	private EmployeeServiceImpl emp;

	@GetMapping("/employee")
	public ResponseEntity<?> findAllemployee() {
		List<Employee> employee = emp.findallemployee();
		Stream<EmployeeDto> dto = employee.stream().map(emp -> EmployeeDto.fromEntity(emp));
		return Response.success(dto);
	}

	@PostMapping("/add-employee")
	public ResponseEntity<?> addemployee(EmployeeDto dto) {
		Employee epmentity = EmployeeDto.toEntity(dto);
		Employee employee = emp.save(epmentity);
		return Response.success(employee);
	}

	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deleteEntity(@PathVariable("id") int id) {
		emp.deleteById(id);
		return null;

	}

}
