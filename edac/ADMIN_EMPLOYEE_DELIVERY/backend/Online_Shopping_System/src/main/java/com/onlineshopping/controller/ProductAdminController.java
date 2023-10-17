package com.onlineshopping.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.Earphones;
import com.onlineshopping.entities.Laptops;
import com.onlineshopping.entities.Mobiles;
import com.onlineshopping.entities.Tvs;
import com.onlineshopping.models.AdearphoneDto;
import com.onlineshopping.models.AdlaptopDto;
import com.onlineshopping.models.AdmobileDto;
import com.onlineshopping.models.AdtvDto;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.EarphonesServiceImpl;
import com.onlineshopping.services.LaptopsServiceImpl;
import com.onlineshopping.services.MobilesServiceImpl;
import com.onlineshopping.services.TvsServiceImpl;

@CrossOrigin
@RestController
public class ProductAdminController {

	@Autowired
	LaptopsServiceImpl lp;

	@Autowired
	MobilesServiceImpl mb;

	@Autowired
	EarphonesServiceImpl er;

	@Autowired
	TvsServiceImpl tv;

	@GetMapping("/laptop/{brand}")
	public ResponseEntity<?> findStocks1(@PathVariable("brand") String brand) {
		List<Laptops> laptop = lp.findByBrand(brand);
		Stream<AdlaptopDto> result = laptop.stream().map(lp -> AdlaptopDto.fromEntity(lp));
		return Response.success(result);

	}
	
	@GetMapping("/mobile/{brand}")
	public ResponseEntity<?> findStocks2(@PathVariable("brand") String brand) {
		List<Mobiles> Mobile = mb.findByBrand(brand);
		Stream<AdmobileDto> result = Mobile.stream().map(artist -> AdmobileDto.fromEntity(artist));
		return Response.success(result);

	}
	
	@GetMapping("/earphone/{brand}")
	public ResponseEntity<?> findStocks3(@PathVariable("brand") String brand) {
		List<Earphones> earphone = er.findByBrand(brand);
		Stream<AdearphoneDto> result = earphone.stream().map(artist -> AdearphoneDto.fromEntity(artist));
		return Response.success(result);

	}
	
	@GetMapping("/tv/{brand}")
	public ResponseEntity<?> findStocks4(@PathVariable("brand") String brand) {
		List<Tvs> t = tv.findByBrand(brand);
		Stream<AdtvDto> result = t.stream().map(artist -> AdtvDto.fromEntity(artist));
		return Response.success(result);

	}
}
