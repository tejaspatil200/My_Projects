package com.onlineshopping.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;

public interface LaptopsService {
	
	List<Laptops> findByBrand(String a);
	List<Laptops> findLaptopsAll();

	Laptops saveLaptops(Laptops laptop, MultipartFile thumbnail);

	void deleteByLaptopId(Integer id);
}
