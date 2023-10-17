package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Customers;
import com.onlineshopping.entities.Delivery;
import com.onlineshopping.entities.Orders;

//
public class OrdersDeliveryDto {
	private int orderId;
	private int customerId;
	private String customerName;
	private String customerMobile;
	private String customerAddress;
	private String customerPincode;
	private String customerCountry;
	private String customerCity;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date orderDate;

	private Double orderAmount;
	private String paymentStatus;
	private String deliveryStatus;

	public OrdersDeliveryDto() {
	}

	public OrdersDeliveryDto(int orderId, int customerId, String customerName, String customerMobile,
			String customerAddress, String customerPincode, String customerCountry, String customerCity, Date orderDate,
			Double orderAmount, String paymentStatus, String deliveryStatus) {
		super();
		this.orderId = orderId;
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerMobile = customerMobile;
		this.customerAddress = customerAddress;
		this.customerPincode = customerPincode;
		this.customerCountry = customerCountry;
		this.customerCity = customerCity;
		this.orderDate = orderDate;
		this.orderAmount = orderAmount;
		this.paymentStatus = paymentStatus;
		this.deliveryStatus = deliveryStatus;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerMobile() {
		return customerMobile;
	}

	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
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

	public String getCustomerCity() {
		return customerCity;
	}

	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
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

	public Double getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(Double orderAmount) {
		this.orderAmount = orderAmount;
	}



	@Override
	public String toString() {
		return "OrdersDeliveryDto [orderId=" + orderId + ", customerId=" + customerId + ", customerName=" + customerName
				+ ", customerMobile=" + customerMobile + ", customerAddress=" + customerAddress + ", customerPincode="
				+ customerPincode + ", customerCountry=" + customerCountry + ", customerCity=" + customerCity
				+ ", orderDate=" + orderDate + ", orderAmount=" + orderAmount + ", paymentStatus=" + paymentStatus
				+ ", deliveryStatus=" + deliveryStatus + "]";
	}

	public static OrdersDeliveryDto fromEntity(Orders entity) {
		OrdersDeliveryDto ordersDto = new OrdersDeliveryDto();
		BeanUtils.copyProperties(entity, ordersDto);

		ordersDto.setCustomerId(entity.getCustomer().getCustomerId());
		ordersDto.setCustomerName(entity.getCustomer().getCustomerName());
		ordersDto.setCustomerMobile(entity.getCustomer().getCustomerMobile());
		ordersDto.setCustomerCity(entity.getCustomer().getCustomerCity());
		ordersDto.setCustomerAddress(entity.getCustomer().getCustomerAddress());
		ordersDto.setCustomerPincode(entity.getCustomer().getCustomerPincode());
		ordersDto.setCustomerCountry(entity.getCustomer().getCustomerCountry());

		return ordersDto;
	}

}
