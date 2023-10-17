package com.onlineshopping.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="laptop")
public class Laptops {
	
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	@Id
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
	private String thumbnail;
	//@Column(name="count_in_stock")
	private Integer countInStock;
	//@ManyToOne
	//@JoinColumn(name="employeeId")
	//private Employee employee;
	public Laptops() {
	}
	
	public Laptops(Integer laptopId, String laptopName, String ram, String brand, String operatingSystem, String processor,
			String screenSize, double price, String description, String thumbnail, Integer countInStock) {
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
		ram = ram;
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
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	public Integer getCountInStock() {
		return countInStock;
	}
	public void setCountInStock(Integer countInStock) {
		this.countInStock = countInStock;
	
	}

	@Override
	public String toString() {
		return "Laptops [laptopId=" + laptopId + ", laptopName=" + laptopName + ", ram=" + ram + ", brand=" + brand
				+ ", operatingSystem=" + operatingSystem + ", processor=" + processor + ", screenSize=" + screenSize
				+ ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail + ", countInStock="
				+ countInStock + "]";
	}
	
}
	/*public Employee getEmployee() {
	return employee;
}

public void setEmployee(Employee employee) {
	this.employee = employee;
}*/
	


		

	

