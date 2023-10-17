package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Orders;

public class OrderDetailsDto {

	private int orderId;
	private String customerName;
	private String customerCity;

	private String customerAddress;

	private String customerPincode;

	private String customerCountry;

	private String customerMobile;

	private String deliveryBoyName;

	private String deliveryBoyMobile;
	private String vehicleNo;

	private String paymentStatus;
	private Double orderAmount;

	private String transactionId;

	private String deliveryStatus;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date deliveryDate;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date orderDate;

	public OrderDetailsDto() {

	}

	public OrderDetailsDto(int orderId, String customerName, String customerCity, String customerAddress,
			String customerPincode, String customerCountry, String customerMobile, String deliveryBoyName,
			String deliveryBoyMobile, String vehicleNo, String paymentStatus, Double orderAmount, String transactionId,
			String deliveryStatus, Date deliveryDate, Date orderDate) {
		super();
		this.orderId = orderId;
		this.customerName = customerName;
		this.customerCity = customerCity;
		this.customerAddress = customerAddress;
		this.customerPincode = customerPincode;
		this.customerCountry = customerCountry;
		this.customerMobile = customerMobile;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyMobile = deliveryBoyMobile;
		this.vehicleNo = vehicleNo;
		this.paymentStatus = paymentStatus;
		this.orderAmount = orderAmount;
		this.transactionId = transactionId;
		this.deliveryStatus = deliveryStatus;
		this.deliveryDate = deliveryDate;
		this.orderDate = orderDate;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerCity() {
		return customerCity;
	}

	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public String getCustomerPincode() {
		return customerPincode;
	}

	public void setCustomerPincode(String customerPincode) {
		this.customerPincode = customerPincode;
	}

	public String getCustomerCountry() {
		return customerCountry;
	}

	public void setCustomerCountry(String customerCountry) {
		this.customerCountry = customerCountry;
	}

	public String getCustomerMobile() {
		return customerMobile;
	}

	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
	}

	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}

	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public Double getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(Double orderAmount) {
		this.orderAmount = orderAmount;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
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

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getDeliveryBoyMobile() {
		return deliveryBoyMobile;
	}

	public void setDeliveryBoyMobile(String deliveryBoyMobile) {
		this.deliveryBoyMobile = deliveryBoyMobile;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public static OrderDetailsDto fromEntity(Orders entity) {

		OrderDetailsDto ordersDto = new OrderDetailsDto();

		BeanUtils.copyProperties(entity, ordersDto);
		
		ordersDto.setCustomerName(entity.getCustomer().getCustomerName());
		ordersDto.setCustomerMobile(entity.getCustomer().getCustomerMobile());
		ordersDto.setCustomerCity(entity.getCustomer().getCustomerCity());
		ordersDto.setCustomerAddress(entity.getCustomer().getCustomerAddress());
		ordersDto.setCustomerPincode(entity.getCustomer().getCustomerPincode());
		ordersDto.setCustomerCountry(entity.getCustomer().getCustomerCountry());
		
		ordersDto.setDeliveryBoyName(entity.getDeliveryBoy().getDeliveryBoyName());
		ordersDto.setDeliveryBoyMobile(entity.getDeliveryBoy().getDeliveryBoyMobile());
		ordersDto.setVehicleNo(entity.getDeliveryBoy().getVehicleNo());
		return ordersDto;
	}

}
