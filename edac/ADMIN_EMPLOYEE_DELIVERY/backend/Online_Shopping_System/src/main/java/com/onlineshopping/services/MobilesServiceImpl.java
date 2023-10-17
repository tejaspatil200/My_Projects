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
public class MobilesServiceImpl implements MobilesService {

	@Autowired
	private MobilesDao md;
	@Autowired
	private StorageService storageService;

	@Override
	public List<Mobiles> findMobilesAll() {
		return md.findAll();
	}

	@Override
	public Mobiles saveMobiles(Mobiles mobile, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		mobile.setThumbnail(fileName);
		return md.save(mobile);
	}

	@Override
	public void deleteByMobileId(Integer id) {
		md.deleteById(id);
	}

	@Override
	public List<Mobiles> findByBrand(String a) {
		List<Mobiles> list = md.findByBrand(a);
		return list;
	}
}
