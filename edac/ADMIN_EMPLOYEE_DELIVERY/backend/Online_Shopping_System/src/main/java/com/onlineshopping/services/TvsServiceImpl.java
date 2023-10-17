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
public class TvsServiceImpl implements TvsService {

	@Autowired
	private TvsDao td;
	@Autowired
	private StorageService storageService;

	@Override
	public List<Tvs> findTvsAll() {
		return td.findAll();
	}

	@Override
	public Tvs saveMobiles(Tvs tv, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		tv.setThumbnail(fileName);
		return td.save(tv);
	}

	@Override
	public void deleteByTvId(Integer id) {
		td.deleteById(id);
	}

	@Override
	public List<Tvs> findByBrand(String a) {
		List<Tvs> list = td.findByBrand(a);

		return list;
	}

}
