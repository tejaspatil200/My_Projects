package com.onlineshopping.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;

public interface EarphonesService {
	
	List<Earphones> findByBrand(String a);

	List<Earphones> findEarphonesAll();

	Earphones saveEarphones(Earphones earphone, MultipartFile thumbnail);
	void deleteByEarphoneId(Integer id);
}
