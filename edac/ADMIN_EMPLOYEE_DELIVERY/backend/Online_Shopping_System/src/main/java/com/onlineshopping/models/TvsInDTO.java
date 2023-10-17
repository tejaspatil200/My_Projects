package com.onlineshopping.models;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.entities.*;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TvsInDTO {
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
	@JsonProperty("thumbnail")
	private MultipartFile thumbnail;
	//@Column(name="count_in_stock")
		private int countInStock;

		public TvsInDTO(Integer tvId, String tvName, String brand, String screenSize, String resolution, String screenType,
				String operatingSystem, double price, String description, MultipartFile thumbnail, int countInStock) {
			super();
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
			this.countInStock = countInStock;
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

		public String getResolution() {
			return resolution;
		}

		public void setResolution(String resolution) {
			this.resolution = resolution;
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

		public MultipartFile getThumbnail() {
			return thumbnail;
		}

		public void setThumbnail(MultipartFile thumbnail) {
			this.thumbnail = thumbnail;
		}

		public int getCountInStock() {
			return countInStock;
		}

		public void setCountInStock(int countInStock) {
			this.countInStock = countInStock;
		}

		@Override
		public String toString() {
			return "TvsInDTO [tvId=" + tvId + ", tvName=" + tvName + ", brand=" + brand + ", screenSize=" + screenSize
					+ ", resolution=" + resolution + ", screenType=" + screenType + ", operatingSystem="
					+ operatingSystem + ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail
					+ ", countInStock=" + countInStock + "]";
		}

		public static Tvs toEntity(TvsInDTO dto) {
			Tvs entity = new Tvs();
			BeanUtils.copyProperties(dto, entity, "thumbnail");
			return entity;
		}
}
