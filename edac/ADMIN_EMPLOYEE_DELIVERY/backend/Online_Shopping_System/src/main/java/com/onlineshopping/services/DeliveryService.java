package com.onlineshopping.services;

import java.util.List;

import com.onlineshopping.entities.Delivery;



public interface DeliveryService {
List<Delivery> findDeliveryBoys();
Delivery save(Delivery d);
void deleteById(Integer id) ;
Delivery findById(Integer a);
Delivery authentication(String email,String password);


}
