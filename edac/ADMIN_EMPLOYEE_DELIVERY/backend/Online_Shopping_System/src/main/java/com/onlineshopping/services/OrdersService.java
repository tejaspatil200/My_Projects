package com.onlineshopping.services;

import java.util.Date;
import java.util.List;

import com.onlineshopping.entities.Delivery;
import com.onlineshopping.entities.Orders;

public interface OrdersService {
	List<Orders> findOrderAll();
	Orders save(Orders o);
	Orders findById(Integer a);
	

}
