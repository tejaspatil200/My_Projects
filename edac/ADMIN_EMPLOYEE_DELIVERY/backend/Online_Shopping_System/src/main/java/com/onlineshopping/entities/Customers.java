package com.onlineshopping.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "customer")
public class Customers {

	@Column(updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int customerId;

	@Column(updatable = false)
	private String customerName;

	@Column(updatable = false)
	private String customerMobile;

	@Column(updatable = false)
	private String customerGender;

	@Column(updatable = false)
	private String customerEmail;

	@Column(updatable = false)
	private String customerPassword;

	@Column(updatable = false)
	private Integer customerAge;

	@Column(updatable = false)
	private String customerCity;

	@Column(updatable = false)
	private String customerAddress;

	@Column(updatable = false)
	private String customerPincode;

	@Column(updatable = false)
	private String customerCountry;

	@Column(updatable = false)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date customerDob;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "customerJoinDate", insertable = false, updatable = false)
	private Date customerJoinDate;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<Orders> orderList;

	public Customers() {

	}

	public Customers(int customerId, String customerName, String customerMobile, String customerGender,
			String customerEmail, String customerPassword, Integer customerAge, String customerCity,
			String customerAddress, String customerPincode, String customerCountry, Date customerDob,
			Date customerJoinDate, List<Orders> orderList) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerMobile = customerMobile;
		this.customerGender = customerGender;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.customerAge = customerAge;
		this.customerCity = customerCity;
		this.customerAddress = customerAddress;
		this.customerPincode = customerPincode;
		this.customerCountry = customerCountry;
		this.customerDob = customerDob;
		this.customerJoinDate = customerJoinDate;
		this.orderList = orderList;
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

	public String getCustomerGender() {
		return customerGender;
	}

	public void setCustomerGender(String customerGender) {
		this.customerGender = customerGender;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

	public Integer getCustomerAge() {
		return customerAge;
	}

	public void setCustomerAge(Integer customerAge) {
		this.customerAge = customerAge;
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

	public Date getCustomerDob() {
		return customerDob;
	}

	public void setCustomerDob(Date customerDob) {
		this.customerDob = customerDob;
	}

	public Date getCustomerJoinDate() {
		return customerJoinDate;
	}

	public void setCustomerJoinDate(Date customerJoinDate) {
		this.customerJoinDate = customerJoinDate;
	}

	public List<Orders> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Orders> orderList) {
		this.orderList = orderList;
	}

	@Override
	public String toString() {
		return "Customers [customerId=" + customerId + ", customerName=" + customerName + ", customerMobile="
				+ customerMobile + ", customerGender=" + customerGender + ", customerEmail=" + customerEmail
				+ ", customerPassword=" + customerPassword + ", customerAge=" + customerAge + ", customerCity="
				+ customerCity + ", customerAddress=" + customerAddress + ", customerPincode=" + customerPincode
				+ ", customerCountry=" + customerCountry + ", customerDob=" + customerDob + ", customerJoinDate="
				+ customerJoinDate + ", orderList=" + orderList + "]";
	}

}
