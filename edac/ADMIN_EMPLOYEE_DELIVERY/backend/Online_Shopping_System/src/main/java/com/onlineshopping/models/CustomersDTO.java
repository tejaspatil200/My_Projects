package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Customers;



public class CustomersDTO {
	private int customerId;
	//@Column(name="customer_name")
	private String customerName;
	//@Column(name="customer_mobile")
	private String customerMobile;
	//@Column(name="customer_gender")
	private String customerGender;
	//@Column(name="customer_email ")
	private String customerEmail;
	//@Column(name="customer_password ")
	private String customerPassword;
	//@Column(name="customer_age")
	private int customerAge;
	//@Column(name="customer_address ")
	private String customerAddress;
	//@Column(name="customer_pincode")
	private String customerPincode;
	//@Column(name="customer_country")
	private String customerCountry;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	//@Column(name="customer_dob")
	private Date customerDob;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	//@Column(name="customer_joindate")
	private Date customerJoinDate;
	
	
	public CustomersDTO() {
	}
	public CustomersDTO(int customerId, String customerName, String customerMobile, String customerGender,
			String customerEmail, String customerPassword, int customerAge, String customerAddress,
			String customerPincode, String customerCountry, Date customerDob, Date customerJoinDate) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerMobile = customerMobile;
		this.customerGender = customerGender;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.customerAge = customerAge;
		this.customerAddress = customerAddress;
		this.customerPincode = customerPincode;
		this.customerCountry = customerCountry;
		this.customerDob = customerDob;
		this.customerJoinDate = customerJoinDate;
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
	public int getCustomerAge() {
		return customerAge;
	}
	public void setCustomerAge(int customerAge) {
		this.customerAge = customerAge;
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
	@Override
	public String toString() {
		return "CustomersDTO [customerId=" + customerId + ", customerName=" + customerName + ", customerMobile="
				+ customerMobile + ", customerGender=" + customerGender + ", customerEmail=" + customerEmail
				+ ", customerPassword=" + customerPassword + ", customerAge=" + customerAge + ", customerAddress="
				+ customerAddress + ", customerPincode=" + customerPincode + ", customerCountry=" + customerCountry
				+ ", customerDob=" + customerDob + ", customerJoinDate=" + customerJoinDate + "]";
	}

	public static CustomersDTO fromEntity(Customers entity) {
		CustomersDTO dto = new CustomersDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
}

