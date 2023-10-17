package com.onlineshopping.services;

import com.onlineshopping.entities.Admin;

public interface AdminService {

	//Admin findByEmail(String email);
	//Admin findByPassword(String password);
	Admin authentication(String email,String password);
}
