package com.onlineshopping.daoes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.Customers;

public interface CustomersDao extends JpaRepository<Customers, Integer>{

}
