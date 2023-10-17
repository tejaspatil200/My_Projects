package com.onlineshopping.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshopping.daoes.OrdersDao;

import com.onlineshopping.entities.Orders;


@Service
public class OrdersServiceImpl implements OrdersService {
@Autowired
OrdersDao orderdao;
	
	@Override
	public List<Orders> findOrderAll() {
		List<Orders> orderList = orderdao.findAll();
		return orderList;
	}

	@Override
	public Orders save(Orders o) {
		Orders order = orderdao.save(o);
		return order;
	}

	@Override
	public Orders findById(Integer a) {
		Optional<Orders> order = orderdao.findById(a);
			return order.orElse(null);
		
	}


}
