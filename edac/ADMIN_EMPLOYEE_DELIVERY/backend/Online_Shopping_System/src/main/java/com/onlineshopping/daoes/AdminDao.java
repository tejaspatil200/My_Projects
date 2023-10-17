package com.onlineshopping.daoes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.Admin;
import java.lang.String;


public interface AdminDao extends JpaRepository<Admin, Integer> {
	Admin findByEmail(String email);
	Admin findByPassword(String password);
}
