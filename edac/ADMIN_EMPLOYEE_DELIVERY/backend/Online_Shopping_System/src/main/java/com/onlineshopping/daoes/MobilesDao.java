package com.onlineshopping.daoes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.*;

public interface MobilesDao extends JpaRepository<Mobiles, Integer> {

	List<Mobiles> findByBrand(String a);
}
