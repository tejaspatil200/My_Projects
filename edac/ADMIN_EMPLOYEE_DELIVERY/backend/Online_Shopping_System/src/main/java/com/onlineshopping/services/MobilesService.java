package com.onlineshopping.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;

public interface MobilesService {
	List<Mobiles> findByBrand(String a);

	List<Mobiles> findMobilesAll();

	Mobiles saveMobiles(Mobiles mobile, MultipartFile thumbnail);

	void deleteByMobileId(Integer id);
}
