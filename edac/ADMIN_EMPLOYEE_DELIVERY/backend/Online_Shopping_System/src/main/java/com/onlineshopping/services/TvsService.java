package com.onlineshopping.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;

public interface TvsService {
	List<Tvs> findByBrand(String a);

	List<Tvs> findTvsAll();

	Tvs saveMobiles(Tvs tv, MultipartFile thumbnail);

	void deleteByTvId(Integer id);
}
