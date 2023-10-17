package com.onlineshopping.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshopping.daoes.AdminDao;
import com.onlineshopping.entities.Admin;

@Service
public class AdminServiceImpl implements AdminService {
@Autowired
	private AdminDao admindao;


@Override
public Admin authentication(String email, String password) {
	Admin admin = admindao.findByEmail(email);
	if (admin !=null && admin.getPassword().equals(password)) {
		return admin;
	}
	return null;
}




}
