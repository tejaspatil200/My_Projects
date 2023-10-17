package com.onlineshopping.daoes;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.*;

public interface EarphonesDao extends JpaRepository<Earphones, Integer>{

	List<Earphones> findByBrand(String a);
}
