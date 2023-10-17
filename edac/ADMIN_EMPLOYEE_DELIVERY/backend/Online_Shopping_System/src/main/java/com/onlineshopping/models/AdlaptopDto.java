package com.onlineshopping.models;

import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.*;

public class AdlaptopDto {

	private String laptopName;
	private String brand;
	private int countInStock;

	private Double price;

	public AdlaptopDto() {

	}

	public AdlaptopDto(String laptopName, String brand, int countInStock, Double price) {
		super();
		this.laptopName = laptopName;
		this.brand = brand;
		this.countInStock = countInStock;
		this.price = price;
	}

	public String getLaptopName() {
		return laptopName;
	}

	public void setLaptopName(String laptopName) {
		this.laptopName = laptopName;
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

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public static AdlaptopDto fromEntity(Laptops entity) {
		AdlaptopDto dto = new AdlaptopDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;

	}
}
