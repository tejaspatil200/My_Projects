package com.onlineshopping.daoes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entities.*;

public interface TvsDao extends JpaRepository<Tvs, Integer>{

	List<Tvs> findByBrand(String a);
}
