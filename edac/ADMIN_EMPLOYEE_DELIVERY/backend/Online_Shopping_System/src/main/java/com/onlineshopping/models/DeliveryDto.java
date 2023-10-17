package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Delivery;

public class DeliveryDto {
	private Integer deliveryBoyId;
	private String deliveryBoyName;

	private String deliveryBoyMobile;

	private String deliveryBoyEmail;

	private String deliveryBoyPassword;
	private String deliveryBoyGender;
	private String vehicleType;
	private String vehicleNo;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date joiningDate;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dob;

	public DeliveryDto(Integer deliveryBoyId, String deliveryBoyName, String deliveryBoyMobile, String deliveryBoyEmail,
			String deliveryBoyPassword, String deliveryBoyGender, String vehicleType, String vehicleNo,
			Date joiningDate, Date dob) {
		super();
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyMobile = deliveryBoyMobile;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyPassword = deliveryBoyPassword;
		this.deliveryBoyGender = deliveryBoyGender;
		this.vehicleType = vehicleType;
		this.vehicleNo = vehicleNo;
		this.joiningDate = joiningDate;
		this.dob = dob;
	}
	public DeliveryDto() {

	}

	public Integer getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(Integer deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}

	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}

	public String getDeliveryBoyMobile() {
		return deliveryBoyMobile;
	}

	public void setDeliveryBoyMobile(String deliveryBoyMobile) {
		this.deliveryBoyMobile = deliveryBoyMobile;
	}

	public String getDeliveryBoyEmail() {
		return deliveryBoyEmail;
	}

	public void setDeliveryBoyEmail(String deliveryBoyEmail) {
		this.deliveryBoyEmail = deliveryBoyEmail;
	}

	public String getDeliveryBoyPassword() {
		return deliveryBoyPassword;
	}

	public void setDeliveryBoyPassword(String deliveryBoyPassword) {
		this.deliveryBoyPassword = deliveryBoyPassword;
	}

	public String getDeliveryBoyGender() {
		return deliveryBoyGender;
	}

	public void setDeliveryBoyGender(String deliveryBoyGender) {
		this.deliveryBoyGender = deliveryBoyGender;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "DeliveryDto [deliveryBoyId=" + deliveryBoyId + ", deliveryBoyName=" + deliveryBoyName
				+ ", deliveryBoyMobile=" + deliveryBoyMobile + ", deliveryBoyEmail=" + deliveryBoyEmail
				+ ", deliveryBoyPassword=" + deliveryBoyPassword + ", deliveryBoyGender=" + deliveryBoyGender
				+ ", vehicleType=" + vehicleType + ", vehicleNo=" + vehicleNo + ", joiningDate=" + joiningDate
				+ ", dob=" + dob + "]";
	}

	public static DeliveryDto fromEntity(Delivery entity) {
		DeliveryDto dto = new DeliveryDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	public static Delivery toEntity(DeliveryDto dto) {
		Delivery entity = new Delivery();
		BeanUtils.copyProperties(dto, entity);
//		entity.setDeliveryBoyEmail(dto.getDeliveryBoyEmail());
//		entity.setDeliveryBoyPassword(dto.getDeliveryBoyPassword());
		return entity;
	}

}
