package com.onlineshopping.models;


import org.springframework.beans.BeanUtils;

import com.onlineshopping.entities.*;
import com.fasterxml.jackson.annotation.JsonProperty;

public class EarphonesDTO {
	private Integer earphoneId;
	//@Column(name="earphone_name")
	private String earphoneName;
	//@Column(name="brand")
	private String brand;
	//@Column(name="connectivity")
	private String connectivity;
	//@Column(name="battery_life")
	private String batteryLife;
	//@Column(name="mic")
	private String mic;
	//@Column(name="charging")
	private String charging;
	//@Column(name="price")
	private double price;
	//@Column(name="description")
	private String description;
	//@Column(name="thumbnail")
	@JsonProperty("thumbnail")
	private String thumbnail;
	//@Column(name="count_in_stock")
		private int countInStock;
		public EarphonesDTO() {
		}
		
		
		
		public EarphonesDTO(Integer earphoneId, String earphoneName, String brand, String connectivity, String batteryLife,
				String mic, String charging, double price, String description, String thumbnail, int countInStock) {
			super();
			this.earphoneId = earphoneId;
			this.earphoneName = earphoneName;
			this.brand = brand;
			this.connectivity = connectivity;
			this.batteryLife = batteryLife;
			this.mic = mic;
			this.charging = charging;
			this.price = price;
			this.description = description;
			this.thumbnail = thumbnail;
			this.countInStock = countInStock;
		}



		public Integer getEarphoneId() {
			return earphoneId;
		}
		public void setEarphoneId(Integer earphoneId) {
			this.earphoneId = earphoneId;
		}
		public String getEarphoneName() {
			return earphoneName;
		}
		public void setEarphoneName(String earphoneName) {
			this.earphoneName = earphoneName;
		}
		public String getBrand() {
			return brand;
		}
		public void setBrand(String brand) {
			this.brand = brand;
		}
		
		public String getConnectivity() {
			return connectivity;
		}



		public void setConnectivity(String connectivity) {
			this.connectivity = connectivity;
		}



		public String getBatteryLife() {
			return batteryLife;
		}
		public void setBatteryLife(String batteryLife) {
			this.batteryLife = batteryLife;
		}
		public String getMic() {
			return mic;
		}
		public void setMic(String mic) {
			this.mic = mic;
		}
		public String getCharging() {
			return charging;
		}
		public void setCharging(String charging) {
			this.charging = charging;
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
		public int getCountInStock() {
			return countInStock;
		}
		public void setCountInStock(int countInStock) {
			this.countInStock = countInStock;
		}
		
		
		@Override
		public String toString() {
			return "EarphonesDTO [earphoneId=" + earphoneId + ", earphoneName=" + earphoneName + ", brand=" + brand
					+ ", connectivity=" + connectivity + ", batteryLife=" + batteryLife + ", mic=" + mic + ", charging="
					+ charging + ", price=" + price + ", description=" + description + ", thumbnail=" + thumbnail
					+ ", countInStock=" + countInStock + "]";
		}



		public static EarphonesDTO fromEntity(Earphones entity) {
			EarphonesDTO dto = new EarphonesDTO();
			BeanUtils.copyProperties(entity, dto);
			return dto;
		}
}
