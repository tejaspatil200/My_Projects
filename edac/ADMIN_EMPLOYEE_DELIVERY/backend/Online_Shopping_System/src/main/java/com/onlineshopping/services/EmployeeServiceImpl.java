package com.onlineshopping.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshopping.daoes.EmployeeDao;
import com.onlineshopping.entities.Employee;
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao dao;
	
	
	@Override
	public List<Employee> findallemployee() {
		List<Employee> list = dao.findAll();
		return list;
	}

	@Override
	public Employee save(Employee e) {
	Employee employee = dao.save(e);
		return employee;
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);
	}
	
	@Override
	public Employee authentication(String email, String password) {
		Employee employee = dao.findByEmployeeEmail(email);
		if (employee != null && employee.getEmployeePassword().equals(password)) {
			return employee;
		}
		return null;
	}


}
