package com.onlineshopping.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entities.Delivery;
import com.onlineshopping.entities.Orders;
import com.onlineshopping.models.DeliveryDto;
import com.onlineshopping.models.LaptopsDTO;
import com.onlineshopping.models.OrderDetailsDto;
import com.onlineshopping.models.OrdersAdminDto;
import com.onlineshopping.models.OrdersDeliveryDto;
import com.onlineshopping.models.OrderupdateDto;
import com.onlineshopping.models.Response;

import com.onlineshopping.services.OrdersServiceImpl;

@CrossOrigin

@RestController
public class OrdersController {
	@Autowired
	OrdersServiceImpl order;

	@GetMapping("/order")
	public ResponseEntity<?> findordersAll() {
		List<Orders> orderlist = order.findOrderAll();
		Stream<OrdersAdminDto> dto = orderlist.stream().map(order -> OrdersAdminDto.fromEntity(order));
		return Response.success(dto);
	}

	@GetMapping("/orderlist")
	public ResponseEntity<?> findorderList() {
		List<Orders> orderlist = order.findOrderAll();
		Stream<OrdersDeliveryDto> dto = orderlist.stream().map(order -> OrdersDeliveryDto.fromEntity(order));
		return Response.success(dto);
	}

	@PostMapping("/orderupdate/update")
	public ResponseEntity<?> updateOrder(OrderupdateDto dto) {
		Orders entity = OrderupdateDto.tOEntity(dto);
		Orders order1 = order.save(entity);
		return Response.success(order1);
	}

	@GetMapping("/orderdetails/{id}")
	public ResponseEntity<?> orderDetails(@PathVariable("id") int a) {
		System.out.println("hello Tejas");
		Orders ord = order.findById(a);
			
		OrderDetailsDto dto = OrderDetailsDto.fromEntity(ord);
		return Response.success(dto);
		
	}

}
