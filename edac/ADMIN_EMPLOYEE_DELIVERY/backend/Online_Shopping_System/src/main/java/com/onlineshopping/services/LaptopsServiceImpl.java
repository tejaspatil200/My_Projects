package com.onlineshopping.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.daoes.*;
import com.onlineshopping.entities.*;
import com.onlineshopping.util.*;

@Transactional
@Service
public class LaptopsServiceImpl implements LaptopsService {
	@Autowired
	private LaptopsDao ld;
	@Autowired
	private StorageService storageService;

	@Override
	public List<Laptops> findLaptopsAll() {
		return ld.findAll();
	}

	@Override
	public Laptops saveLaptops(Laptops laptop, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		laptop.setThumbnail(fileName);
		return ld.save(laptop);
	}

	@Override
	public void deleteByLaptopId(Integer id) {
		ld.deleteById(id);
	}

	@Override
	public List<Laptops> findByBrand(String a) {
		List<Laptops> list = ld.findByBrand(a);

		return list;
	}

}
