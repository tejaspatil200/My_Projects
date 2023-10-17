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
public class EarphonesServiceImpl implements EarphonesService{

	@Autowired
	private EarphonesDao ed;
	@Autowired
	private StorageService storageService;
	
	@Override
	public List<Earphones> findEarphonesAll() {
	return ed.findAll();
	}

	@Override
	public Earphones saveEarphones(Earphones earphone, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		earphone.setThumbnail(fileName);
		return ed.save(earphone);
	}

	@Override
	public void deleteByEarphoneId(Integer id) {
		ed.deleteById(id);
	}
	
	@Override
	public List<Earphones> findByBrand(String a) {
		List<Earphones> list = ed.findByBrand(a);

		return list;
	}

}
