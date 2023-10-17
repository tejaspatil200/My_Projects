package com.onlineshopping.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshopping.daoes.CustomersDao;
import com.onlineshopping.entities.Customers;
import com.onlineshopping.entities.Employee;

@Service
public class CustomersServiceImpl implements CustomersService {

	@Autowired
	private CustomersDao cd;

	@Override
	public List<Customers> findCustomersAll() {
		List<Customers> list = cd.findAll();

		return list;
	}

}
