package com.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.Admin;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.AdminServiceImpl;

@CrossOrigin
//@RequestMapping("/")
@RestController
public class AdminController {
 @Autowired
 AdminServiceImpl admin= new AdminServiceImpl();
 
 @PostMapping("/adminlogin")
 public ResponseEntity<?> authentication(Admin ad){
	Admin adinf = admin.authentication(ad.getEmail(),ad.getPassword());
	if (adinf !=null) {
		return Response.success(adinf);
	}
	return null;
	 
 }
	
}
