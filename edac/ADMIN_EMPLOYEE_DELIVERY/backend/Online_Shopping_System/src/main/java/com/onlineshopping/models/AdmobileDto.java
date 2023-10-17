package com.onlineshopping.models;

import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.*;

public class AdmobileDto {
	private String mobileName;

	private Double price;
	private String brand;
	private int countInStock;

	public AdmobileDto() {

	}

	public AdmobileDto(String mobileName, Double price, String brand, int countInStock) {
		super();
		this.mobileName = mobileName;
		this.price = price;
		this.brand = brand;
		this.countInStock = countInStock;
	}

	public String getMobileName() {
		return mobileName;
	}

	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
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

	public static AdmobileDto fromEntity(Mobiles entity) {
		AdmobileDto dto = new AdmobileDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;

	}
}
