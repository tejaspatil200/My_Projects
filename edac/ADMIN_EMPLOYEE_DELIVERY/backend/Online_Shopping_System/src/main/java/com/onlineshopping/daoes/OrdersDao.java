package com.onlineshopping.daoes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.onlineshopping.entities.Orders;
import com.onlineshopping.entities.Delivery;

import java.util.Date;
import java.util.List;

@Repository
public interface OrdersDao extends JpaRepository<Orders, Integer>,CrudRepository<Orders, Integer> {

	List<Orders> findByDeliveryBoy(Delivery deliveryboy);
	
	
}
