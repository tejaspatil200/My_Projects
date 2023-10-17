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
import com.onlineshopping.models.TvsDTO;
import com.onlineshopping.models.TvsInDTO;
import com.onlineshopping.models.Response;
import com.onlineshopping.services.TvsServiceImpl;


@CrossOrigin
@RestController
public class TvsControllerImpl {
	@Autowired
	private TvsServiceImpl tsi;
	
	@GetMapping("/tv") 
	public ResponseEntity<?> findTvsAll() {
		List<Tvs> list = tsi.findTvsAll();
		Stream<TvsDTO> dto = list.stream().map(tvs->TvsDTO.fromEntity(tvs));
		return Response.success(dto);	
}
	
	@PostMapping("/add-tv")
	public ResponseEntity<?> saveMobile(TvsInDTO td){
		Tvs t = TvsInDTO.toEntity(td);
		t = tsi.saveMobiles(t, td.getThumbnail());
		return Response.success(t);
	}
	
	@DeleteMapping("/tv/{id}")
	public ResponseEntity<?> deleteEntity(@PathVariable("id") int id){
		tsi.deleteByTvId(id);

		return null;

	}
}
