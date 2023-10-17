package com.onlineshopping.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.*;
import com.onlineshopping.models.LaptopsDTO;
import com.onlineshopping.models.LaptopsInDTO;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.LaptopsServiceImpl;

@CrossOrigin
@RestController
public class LaptopsController {
	@Autowired
	private LaptopsServiceImpl lsi;
	
	@GetMapping("/laptop")
	public ResponseEntity<?> findLaptopsAll() {
		List<Laptops> list = lsi.findLaptopsAll();
		Stream<LaptopsDTO> dto = list.stream().map(laptops->LaptopsDTO.fromEntity(laptops));
		return Response.success(dto);
	}
	@PostMapping("/add-laptop")
	public ResponseEntity<?> saveMobile(LaptopsInDTO ld){
		Laptops l = LaptopsInDTO.toEntity(ld);
		l = lsi.saveLaptops(l, ld.getThumbnail());
		return Response.success(l);
	}

	@DeleteMapping("/laptop/{id}")
	public ResponseEntity<?> deleteEntity(@PathVariable("id") int id){
		lsi.deleteByLaptopId(id);

		return null;

	}
}
