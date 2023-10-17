package com.onlineshopping.models;

import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.*;

public class AdearphoneDto {
	private String earphoneName;

	private Double price;
	private String brand;
	private int countInStock;

	public AdearphoneDto() {

	}

	public AdearphoneDto(String earphoneName, Double price, String brand, int countInStock) {
		super();
		this.earphoneName = earphoneName;
		this.price = price;
		this.brand = brand;
		this.countInStock = countInStock;
	}

	public String getEarphoneName() {
		return earphoneName;
	}

	public void setEarphoneName(String earphoneName) {
		this.earphoneName = earphoneName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getCountInStock() {
		return countInStock;
	}

	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}

	public static AdearphoneDto fromEntity(Earphones entity) {
		AdearphoneDto dto = new AdearphoneDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;

	}
}
