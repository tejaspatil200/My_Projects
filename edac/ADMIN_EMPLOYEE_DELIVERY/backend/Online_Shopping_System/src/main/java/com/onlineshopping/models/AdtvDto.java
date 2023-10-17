package com.onlineshopping.models;

import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.*;

public class AdtvDto {

	private String tvName;

	private Double price;
	private String brand;
	private int countInStock;

	public AdtvDto() {

	}

	public AdtvDto(String tvName, Double price, String brand, int countInStock) {
		super();
		this.tvName = tvName;
		this.price = price;
		this.brand = brand;
		this.countInStock = countInStock;
	}

	public String getTvName() {
		return tvName;
	}

	public void setTvName(String tvName) {
		this.tvName = tvName;
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

	public static AdtvDto fromEntity(Tvs entity) {
		AdtvDto dto = new AdtvDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;

	}
}
