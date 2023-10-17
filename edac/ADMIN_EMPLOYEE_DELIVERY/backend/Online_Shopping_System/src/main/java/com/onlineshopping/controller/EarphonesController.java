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
import com.onlineshopping.models.EarphonesDTO;
import com.onlineshopping.models.EarphonesInDTO;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.EarphonesServiceImpl;

@CrossOrigin
@RestController
public class EarphonesController {
	@Autowired
	private EarphonesServiceImpl esi;
	
	@GetMapping("/earphone")
	public ResponseEntity<?> findEarphonesAll() {
		List<Earphones> list = esi.findEarphonesAll();
		Stream<EarphonesDTO> dto = list.stream().map(earphones->EarphonesDTO.fromEntity(earphones));
		return Response.success(dto);	
	}

	@PostMapping("/add-earphone")
	public ResponseEntity<?> saveEarphone(EarphonesInDTO ed){
		Earphones e = EarphonesInDTO.toEntity(ed);
		e = esi.saveEarphones(e, ed.getThumbnail());
		return Response.success(e);
	}

	@DeleteMapping("/earphone/{id}")
	public ResponseEntity<?> deleteEntity(@PathVariable("id") int id){
		esi.deleteByEarphoneId(id);

		return null;

	}
}
