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
import com.onlineshopping.models.*;

import com.onlineshopping.models.*;
import com.onlineshopping.services.*;

@CrossOrigin
@RestController
public class MobilesController {
	@Autowired
	private MobilesServiceImpl msi;

	@GetMapping("/mobile")
	public ResponseEntity<?> findMobilesAll() {
		List<Mobiles> list = msi.findMobilesAll();
		Stream<MobilesDTO> dto = list.stream().map(mobiles->MobilesDTO.fromEntity(mobiles));
		return Response.success(dto);	
	}

	@PostMapping("/add-mobile")
	public ResponseEntity<?> saveMobile(MobilesInDTO md){
		Mobiles m = MobilesInDTO.toEntity(md);
		m = msi.saveMobiles(m, md.getThumbnail());
		return Response.success(m);
	}

	@DeleteMapping("/mobile/{id}")
	public ResponseEntity<?> deleteEntity(@PathVariable("id") int id){
		msi.deleteByMobileId(id);

		return null;

	}

}
