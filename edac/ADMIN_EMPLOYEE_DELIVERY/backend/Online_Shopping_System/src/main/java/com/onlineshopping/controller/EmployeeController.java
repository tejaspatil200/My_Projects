package com.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.Customers;
import com.onlineshopping.entities.Employee;
import com.onlineshopping.models.Response;
import com.onlineshopping.models.CustomersDTO;
import com.onlineshopping.services.CustomersServiceImpl;
import com.onlineshopping.services.EmployeeServiceImpl;
import java.util.List;
import java.util.stream.Stream;

@CrossOrigin
@RequestMapping("/employee")
@RestController
public class EmployeeController {
	@Autowired
	EmployeeServiceImpl employee = new EmployeeServiceImpl();
	
	@Autowired
	private CustomersServiceImpl csi;

	@PostMapping("/employeelogin")
	public ResponseEntity<?> authentication(Employee emp) {
		//System.out.println("hello i am here");
		Employee empinf = employee.authentication(emp.getEmployeeEmail(), emp.getEmployeePassword());
		if (empinf != null) {
			return Response.success(empinf);
		}
		return null;
	}
	
	@GetMapping("/customer")
	public ResponseEntity<?> findCustomersAll() {
		//System.out.println("hello i am here");
		List<Customers> list = csi.findCustomersAll();
		Stream<CustomersDTO> dto = list.stream().map(customers->CustomersDTO.fromEntity(customers));
		return Response.success(dto);
	}
	
	
	
	
}
