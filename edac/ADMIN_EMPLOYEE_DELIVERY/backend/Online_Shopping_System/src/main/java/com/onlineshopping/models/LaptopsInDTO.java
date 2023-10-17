package com.onlineshopping.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LaptopsInDTO {
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	private Integer laptopId;
	//@Column(name="laptop_name")
	private String laptopName;
//	@Column(name="RAM")
	private String ram;
//	@Column(name="brand")
	private String brand;
	//@Column(name="operating_system")
	private String operatingSystem;
	//@Column(name="processor")
	private String processor;
	//@Column(name="screen_size")
	private String screenSize;
	//@Column(name="price")
	private double price;
	//@Column(name="description")
	private String description;
	//@Column(name="thumbnail")
	@JsonProperty("thumbnail")
	private MultipartFile thumbnail;
	//@Column(name="count_in_stock")
private Integer countInStock;
	
	
	public LaptopsInDTO(Integer laptopId, String laptopName, String ram, String brand, String operatingSystem,
			String processor, String screenSize, double price, String description, MultipartFile thumbnail,
			Integer countInStock) {
		super();
		this.laptopId = laptopId;
		this.laptopName = laptopName;
		this.ram = ram;
		this.brand = brand;
		this.operatingSystem = operatingSystem;
		this.processor = processor;
		this.screenSize = screenSize;
		this.price = price;
		this.description = description;
		this.thumbnail = thumbnail;
		this.countInStock = countInStock;
	}
	public Integer getLaptopId() {
		return laptopId;
	}
	public void setLaptopId(Integer laptopId) {
		this.laptopId = laptopId;
	}
	public String getLaptopName() {
		return laptopName;
	}
	public void setLaptopName(String laptopName) {
		this.laptopName = laptopName;
	}
	public String getRam() {
		return ram;
	}
	public void setRam(String ram) {
		this.ram = ram;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getOperatingSystem() {
		return operatingSystem;
	}
	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}
	public String getProcessor() {
		return processor;
	}
	public void setProcessor(String processor) {
		this.processor = processor;
	}
	public String getScreenSize() {
		return screenSize;
	}
	public void setScreenSize(String screenSize) {
		this.screenSize = screenSize;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public MultipartFile getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(MultipartFile thumbnail) {
		this.thumbnail = thumbnail;
	}
public Integer getCountInStock() {
		return countInStock;
	}
	public void setCountInStock(Integer countInStock) {
		this.countInStock = countInStock;
	}
	
	public static Laptops toEntity(LaptopsInDTO dto) {
		Laptops entity = new Laptops();
		BeanUtils.copyProperties(dto, entity, "thumbnail");
		return entity;
	}
	@Override
	public String toString() {
		return "LaptopsInDTO [laptopId=" + laptopId + ", laptopName=" + laptopName + ", ram=" + ram + ", brand=" + brand
				+ ", operatingSystem=" + operatingSystem + ", processor=" + processor + ", screenSize=" + screenSize
				+ ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail + ", countInStock="
				+ countInStock + "]";
	}
	
	
}
