package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Customers;
import com.onlineshopping.entities.Delivery;
import com.onlineshopping.entities.Orders;


public class OrdersAdminDto {
private int orderId;
private String customerName;
private String customerCity;

private String customerAddress;

private String customerPincode;

private String customerCountry;

private String customerMobile;


//private String deliveryBoyName;

private String paymentStatus;
private Double orderAmount;

private String transactionId;

private String deliveryStatus;

//@Temporal(TemporalType.DATE)
//@DateTimeFormat(pattern="yyyy-MM-dd")
//private Date deliveryDate;

@Temporal(TemporalType.DATE)
@DateTimeFormat(pattern="yyyy-MM-dd")
private Date orderDate;


public OrdersAdminDto() {
	
}


public OrdersAdminDto(int orderId, String customerName, String customerCity, String customerAddress,
		String customerPincode, String customerCountry, String customerMobile, 
		String paymentStatus, Double orderAmount, String transactionId, String deliveryStatus,
		Date orderDate) {
	super();
	this.orderId = orderId;
	this.customerName = customerName;
	this.customerCity = customerCity;
	this.customerAddress = customerAddress;
	this.customerPincode = customerPincode;
	this.customerCountry = customerCountry;
	this.customerMobile = customerMobile;
	//this.deliveryBoyName = deliveryBoyName;
	this.paymentStatus = paymentStatus;
	this.orderAmount = orderAmount;
	this.transactionId = transactionId;
	this.deliveryStatus = deliveryStatus;
	//this.deliveryDate = deliveryDate;
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


//public String getDeliveryBoyName() {
//	return deliveryBoyName;
//}
//
//
//public void setDeliveryBoyName(String deliveryBoyName) {
//	this.deliveryBoyName = deliveryBoyName;
//}


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


//public Date getDeliveryDate() {
//	return deliveryDate;
//}
//
//
//public void setDeliveryDate(Date deliveryDate) {
//	this.deliveryDate = deliveryDate;
//}

public Date getOrderDate() {
	return orderDate;
}


public void setOrderDate(Date orderDate) {
	this.orderDate = orderDate;
}




public static OrdersAdminDto fromEntity(Orders entity) {
	OrdersAdminDto ordersDto=new OrdersAdminDto();
	BeanUtils.copyProperties(entity, ordersDto);
	ordersDto.setCustomerName(entity.getCustomer().getCustomerName());
	ordersDto.setCustomerMobile(entity.getCustomer().getCustomerMobile());
	ordersDto.setCustomerCity(entity.getCustomer().getCustomerCity());
	ordersDto.setCustomerAddress(entity.getCustomer().getCustomerAddress());
	ordersDto.setCustomerPincode(entity.getCustomer().getCustomerPincode());
	ordersDto.setCustomerCountry(entity.getCustomer().getCustomerCountry());
//	ordersDto.setDeliveryBoyName(entity.getDeliveryBoy().getDeliveryBoyName());
	return ordersDto;
}


public static Orders tOEntity(OrdersAdminDto dto) {
	Orders entity= new Orders();
	Delivery delivery=new Delivery();
//	delivery.setDeliveryBoyName(dto.getDeliveryBoyName());
//	delivery.setDeliveryBoyId(dto.getDeliveryBoyId());
	
	Customers c= new Customers();
	c.setCustomerName(dto.getCustomerName());
	c.setCustomerAddress(dto.getCustomerAddress());
	c.setCustomerPincode(dto.getCustomerPincode());
	c.setCustomerCity(dto.getCustomerCity());
	c.setCustomerMobile(dto.getCustomerMobile());
	c.setCustomerCountry(dto.getCustomerCountry());
	
	BeanUtils.copyProperties(dto,entity);
	//entity.setDeliveryBoy(delivery);
	entity.setCustomer(c);
	return entity;
}



	
}
