package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Customers;
import com.onlineshopping.entities.Delivery;
import com.onlineshopping.entities.Orders;

public class OrderupdateDto {

	private Integer orderId;
	private Integer deliveryBoyId;

	private String deliveryBoyName;
	private String deliveryBoyMobile;
	private String deliveryBoyGender;
	private String deliveryBoyEmail;
	private String deliveryBoyPassword;
	private String vehicleType;
	private String vehicleNo;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date dob;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date joiningDate;

	private Integer customerId;
	private String paymentStatus;
	private String deliveryStatus;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date deliveryDate;

	public OrderupdateDto(Integer orderId, Integer deliveryBoyId, String deliveryBoyName, String deliveryBoyMobile,
			String deliveryBoyGender, String deliveryBoyEmail, String deliveryBoyPassword, String vehicleType,
			String vehicleNo, Date dob, Date joiningDate, Integer customerId, String paymentStatus,
			String deliveryStatus, Date deliveryDate) {
		super();
		this.orderId = orderId;
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyMobile = deliveryBoyMobile;
		this.deliveryBoyGender = deliveryBoyGender;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyPassword = deliveryBoyPassword;
		this.vehicleType = vehicleType;
		this.vehicleNo = vehicleNo;
		this.dob = dob;
		this.joiningDate = joiningDate;
		this.customerId = customerId;
		this.paymentStatus = paymentStatus;
		this.deliveryStatus = deliveryStatus;
		this.deliveryDate = deliveryDate;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
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

	public String getDeliveryBoyGender() {
		return deliveryBoyGender;
	}

	public void setDeliveryBoyGender(String deliveryBoyGender) {
		this.deliveryBoyGender = deliveryBoyGender;
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getDeliveryStatus() {
		return deliveryStatus;
	}

	public void setDeliveryStatus(String deliveryStatus) {
		this.deliveryStatus = deliveryStatus;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public static Orders tOEntity(OrderupdateDto dto) {
		Orders entity = new Orders();
		Delivery delivery = new Delivery();
		Customers cust = new Customers();

		delivery.setDeliveryBoyId(dto.getDeliveryBoyId());
		delivery.setDeliveryBoyName(dto.getDeliveryBoyName());
		delivery.setDeliveryBoyMobile(dto.getDeliveryBoyMobile());
		delivery.setDeliveryBoyGender(dto.getDeliveryBoyGender());
		delivery.setDeliveryBoyEmail(dto.getDeliveryBoyEmail());
		delivery.setDeliveryBoyPassword(dto.getDeliveryBoyPassword());
		delivery.setVehicleType(dto.getVehicleType());
		delivery.setVehicleNo(dto.getVehicleNo());
		delivery.setDob(dto.getDob());
		delivery.setJoiningDate(dto.getJoiningDate());
		
		cust.setCustomerId(dto.getCustomerId());

		entity.setOrderId(dto.getOrderId());
		entity.setDeliveryDate(dto.getDeliveryDate());
		entity.setPaymentStatus(dto.getPaymentStatus());
		entity.setDeliveryStatus(dto.getDeliveryStatus());
		entity.setDeliveryBoy(delivery);
		entity.setCustomer(cust);

		BeanUtils.copyProperties(dto, entity);

		return entity;
	}

}
