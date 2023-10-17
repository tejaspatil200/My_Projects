package com.onlineshopping.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ForeignKey;
import org.springframework.format.annotation.DateTimeFormat;



@Entity
@Table(name="orders")
public class Orders {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id	
	private int orderId;
	
	@Column(updatable = false)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date orderDate;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date deliveryDate;
	
	@Column(updatable = false)
	private Double orderAmount;
	
	@Column(updatable = false)
	private String transactionId;
	
	private String paymentStatus;
	
	private String deliveryStatus;
	

	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customerId",updatable = false )
	private Customers customer;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="deliveryBoyId",nullable = true)
	private Delivery deliveryBoy;

//
//	@ManyToMany(mappedBy="ordersList" , cascade = CascadeType.ALL)
//  private List<ItemDetail> productsList;
//	
	public Orders() {
		
	}

	public Orders(int orderId, Date orderDate, Date deliveryDate, Double orderAmount, String transactionId,
			String paymentStatus, String deliveryStatus, Customers customer, Delivery deliveryBoy) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.deliveryDate = deliveryDate;
		this.orderAmount = orderAmount;
		this.transactionId = transactionId;
		this.paymentStatus = paymentStatus;
		this.deliveryStatus = deliveryStatus;
		this.customer = customer;
		this.deliveryBoy = deliveryBoy;
		//this.productsList = productsList;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
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

	public Customers getCustomer() {
		return customer;
	}

	public void setCustomer(Customers customer) {
		this.customer = customer;
	}

	public Delivery getDeliveryBoy() {
		return deliveryBoy;
	}

	public void setDeliveryBoy(Delivery deliveryBoy) {
		this.deliveryBoy = deliveryBoy;
	}

//	public List<ItemDetail> getProductsList() {
//		return productsList;
//	}
//
//	public void setProductsList(List<ItemDetail> productsList) {
//		this.productsList = productsList;
//	}
//	


	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", orderDate=" + orderDate + ", deliveryDate=" + deliveryDate
				+ ", orderAmount=" + orderAmount + ", transactionId=" + transactionId + ", paymentStatus="
				+ paymentStatus + ", deliveryStatus=" + deliveryStatus + ", customer=" + customer + ", deliveryBoy="
				+ deliveryBoy + "]";
	}


	
	
}
