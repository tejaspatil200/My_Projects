package com.onlineshopping.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshopping.daoes.DeliveryDao;

import com.onlineshopping.entities.Delivery;

@Service
public class DeliveryServiceImpl implements DeliveryService {
@Autowired
private DeliveryDao dd;

	@Override
	public List<Delivery> findDeliveryBoys() {
         List<Delivery> list = dd.findAll();
		return list;
	}

	@Override
	public Delivery save(Delivery d) {
		Delivery dboy = dd.save(d);
		return dboy;
	}

	@Override
	public void deleteById(Integer id) {
	dd.deleteById(id);
		
	}

	@Override
	public Delivery findById(Integer a) {
		Optional<Delivery> delivery = dd.findById(a);
		return delivery.orElse(null);
	}

	@Override
	public Delivery authentication(String email, String password) {
	Delivery delivery = dd.findByDeliveryBoyEmail(email);
		if (delivery !=null && delivery.getDeliveryBoyPassword().equals(password)) {
			return delivery;
		}
		
		return null;
	}



	

	
	

}
