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


import com.onlineshopping.entities.Delivery;
import com.onlineshopping.models.DeliveryDto;

import com.onlineshopping.models.Response;
import com.onlineshopping.services.DeliveryServiceImpl;

//@RequestMapping("/delivery")
@CrossOrigin
@RestController
public class DeliveryController {
@Autowired
private DeliveryServiceImpl ds;
	
	@GetMapping("/delivery")
	public ResponseEntity<?> findAllDeliveryBoys(){
		List<Delivery> list = ds.findDeliveryBoys();
		Stream<DeliveryDto> dto = list.stream().map(order->DeliveryDto.fromEntity(order));
		return Response.success(dto);
		}
		
		@PostMapping("/add-delivery")
		public ResponseEntity<?> addBoy(DeliveryDto d){
			Delivery dboy = DeliveryDto.toEntity(d);
			Delivery deliveryBoy = ds.save(dboy);
			return Response.success(deliveryBoy);
		}
	
		@DeleteMapping("/delivery/{id}")
		public ResponseEntity<?> deleteEntity(@PathVariable("id") int id){
			ds.deleteById(id);
			
			return null;
			
		}
		
		
		@GetMapping("/profile/{id}")
		public ResponseEntity<?> profile(@PathVariable("id") int a){
			Delivery delivery = ds.findById(a);
					return Response.success(delivery);
		}
		
		@PostMapping("/deliverylogin")
		 public ResponseEntity<?> authentication(DeliveryDto dto){
			Delivery delivery = ds.authentication(dto.getDeliveryBoyEmail(),dto.getDeliveryBoyPassword());
			if (delivery !=null) {
				return Response.success(delivery);
			}
			return null;
			 
		 }
		
		
}
