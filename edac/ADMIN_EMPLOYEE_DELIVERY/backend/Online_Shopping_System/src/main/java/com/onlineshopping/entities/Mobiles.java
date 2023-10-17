package com.onlineshopping.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mobile")
public class Mobiles {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer mobileId;
	private String mobileName;
	private String ram;
	private String brand;
	private String battery;
	private String primaryCamera;
	private String screenResolution;
	private double price;
	private String thumbnail;
	private String description;
	private int countInStock;
	
	public Mobiles() {
		// TODO Auto-generated constructor stub
	}

	public Mobiles(Integer mobileId, String mobileName, String ram, String brand, String battery, String primaryCamera,
			String screenResolution, double price, String thumbnail, String description, int countInStock) {
		super();
		this.mobileId = mobileId;
		this.mobileName = mobileName;
		this.ram = ram;
		this.brand = brand;
		this.battery = battery;
		this.primaryCamera = primaryCamera;
		this.screenResolution = screenResolution;
		this.price = price;
		this.thumbnail = thumbnail;
		this.description = description;
		this.countInStock = countInStock;
	}

	public Integer getMobileId() {
		return mobileId;
	}

	public void setMobileId(Integer mobileId) {
		this.mobileId = mobileId;
	}

	public String getMobileName() {
		return mobileName;
	}

	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
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

	public String getBattery() {
		return battery;
	}

	public void setBattery(String battery) {
		this.battery = battery;
	}

	public String getPrimaryCamera() {
		return primaryCamera;
	}

	public void setPrimaryCamera(String primaryCamera) {
		this.primaryCamera = primaryCamera;
	}

	public String getScreenResolution() {
		return screenResolution;
	}

	public void setScreenResolution(String screenResolution) {
		this.screenResolution = screenResolution;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCountInStock() {
		return countInStock;
	}

	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}

	@Override
	public String toString() {
		return "Mobile [mobileId=" + mobileId + ", mobileName=" + mobileName + ", ram=" + ram + ", brand=" + brand
				+ ", battery=" + battery + ", primaryCamera=" + primaryCamera + ", screenResolution=" + screenResolution
				+ ", price=" + price + ", thumbnail=" + thumbnail + ", description=" + description + ", countInStock="
				+ countInStock + "]";
	}
	
	
}
