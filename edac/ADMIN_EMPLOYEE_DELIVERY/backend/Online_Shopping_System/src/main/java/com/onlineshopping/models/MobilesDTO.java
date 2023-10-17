package com.onlineshopping.models;

import javax.persistence.Column;

import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.Mobiles;
import com.fasterxml.jackson.annotation.JsonProperty;

public class MobilesDTO {
	
	// @Column(name="mobile_id")
	private Integer mobileId;
	// @Column(name="mobile_name")
	private String mobileName;
	// @Column(name="RAM")
	private String ram;
	// @Column(name="brand")
	private String brand;
	// @Column(name="battery")
	private String battery;
	// @Column(name="primary_camera")
	private String primaryCamera;
	// @Column(name="screen_resolution")
	private String screenResolution;
	// @Column(name="price")
	private double price;
	// @Column(name="description")
	private String description;
	// @Column(name="thumbnail")
	@JsonProperty("thumbnail")
	private String thumbnail;

	private int countInStock;

	public MobilesDTO() {
	}

	public MobilesDTO(Integer mobileId, String mobileName, String ram, String brand, String battery, String primaryCamera,
			String screenResolution, double price, String description, String thumbnail, int countInStock) {
		super();
		this.mobileId = mobileId;
		this.mobileName = mobileName;
		this.ram = ram;
		this.brand = brand;
		this.battery = battery;
		this.primaryCamera = primaryCamera;
		this.screenResolution = screenResolution;
		this.price = price;
		this.description = description;
		this.thumbnail = thumbnail;
		this.countInStock = countInStock;
	}

	public int getCountInStock() {
		return countInStock;
	}

	public void setCountInStock(int countInStock) {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	@Override
	public String toString() {
		return "MobilesDTO [mobileId=" + mobileId + ", mobileName=" + mobileName + ", ram=" + ram + ", brand=" + brand
				+ ", battery=" + battery + ", primaryCamera=" + primaryCamera + ", screenResolution=" + screenResolution
				+ ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail + ", countInStock="
				+ countInStock + "]";
	}

	public static MobilesDTO fromEntity(Mobiles entity) {
		MobilesDTO dto = new MobilesDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

}