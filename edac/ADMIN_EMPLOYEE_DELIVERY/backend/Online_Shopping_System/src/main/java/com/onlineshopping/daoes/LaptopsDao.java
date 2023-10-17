package com.onlineshopping.daoes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.Laptops;

public interface LaptopsDao extends JpaRepository<Laptops, Integer> {

	List<Laptops> findByBrand(String a);
}
