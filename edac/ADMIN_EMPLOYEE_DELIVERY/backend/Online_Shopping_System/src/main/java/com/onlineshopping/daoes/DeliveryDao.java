package com.onlineshopping.daoes;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.Delivery;
import java.lang.String;


public interface DeliveryDao extends JpaRepository<Delivery, Integer> {

	Delivery findByDeliveryBoyEmail(String deliveryboyemail);
	Delivery findByDeliveryBoyPassword(String deliveryboypassword);
	
}