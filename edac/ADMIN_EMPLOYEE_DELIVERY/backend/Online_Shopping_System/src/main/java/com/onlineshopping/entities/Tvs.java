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
@Table(name="tv")
public class Tvs {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer tvId;
//	@Column(name="tv_name")
	private String tvName;
	//@Column(name="brand")
	private String brand;
	//@Column(name="screen_size")
	private String screenSize;
	//@Column(name="screen_resolution")
	private String resolution;
	//@Column(name="screen_type")
	private String screenType;
	//@Column(name="operating_system")
	private String operatingSystem;
	//@Column(name="price")
	private double price;
	//@Column(name="description")
	private String description;
	//@Column(name="thumbnail")
	private String thumbnail;
	//@Column(name="count_in_stock")
		private int countInStock;
	


	public Tvs() {
	}

	public Tvs(Integer tvId, String tvName, String brand, String screenSize, String resolution, String screenType,
			String operatingSystem, double price, String description, String thumbnail) {
		this.tvId = tvId;
		this.tvName = tvName;
		this.brand = brand;
		this.screenSize = screenSize;
		this.resolution = resolution;
		this.screenType = screenType;
		this.operatingSystem = operatingSystem;
		this.price = price;
		this.description = description;
		this.thumbnail = thumbnail;

	}

	public Integer getTvId() {
		return tvId;
	}

	public void setTvId(Integer tvId) {
		this.tvId = tvId;
	}

	

	public String getTvName() {
		return tvName;
	}

	public void setTvName(String tvName) {
		this.tvName = tvName;
	}

	public String getResolution() {
		return resolution;
	}

	public void setResolution(String resolution) {
		this.resolution = resolution;
	}

	public int getCountInStock() {
		return countInStock;
	}

	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getScreenSize() {
		return screenSize;
	}

	public void setScreenSize(String screenSize) {
		this.screenSize = screenSize;
	}

	public String getScreenType() {
		return screenType;
	}

	public void setScreenType(String screenType) {
		this.screenType = screenType;
	}

	public String getOperatingSystem() {
		return operatingSystem;
	}

	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
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

	@Override
	public String toString() {
		return "Tvs [tvId=" + tvId + ", tvName=" + tvName + ", brand=" + brand + ", screenSize=" + screenSize
				+ ", resolution=" + resolution + ", screenType=" + screenType + ", operatingSystem=" + operatingSystem
				+ ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail + ", countInStock="
				+ countInStock + "]";
	}



	
}
