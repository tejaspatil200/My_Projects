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
@Table(name="delivery")
public class Delivery {

	@Column(updatable = false,nullable =true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer deliveryBoyId;
	
	
	private String deliveryBoyName;
	
	private String deliveryBoyMobile;

	private String deliveryBoyEmail;
	
	
	private String deliveryBoyPassword;
	
	private String deliveryBoyGender;

	
	private String vehicleType;

	
	private String vehicleNo;
	
	@Column(nullable = true)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date dob;
	


	@Temporal(TemporalType.DATE)
	private Date joiningDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column( insertable = false, updatable = false)
	private Date created_on;
	

	
	public Delivery() {
		
	}

	public Delivery(Integer deliveryBoyId, String deliveryBoyName, String deliveryBoyMobile, String deliveryBoyEmail,
			String deliveryBoyPassword, String deliveryBoyGender, String vehicleType, String vehicleNo, Date dob,
			Date joiningDate, Date created_on) {
		super();
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyMobile = deliveryBoyMobile;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyPassword = deliveryBoyPassword;
		this.deliveryBoyGender = deliveryBoyGender;
		this.vehicleType = vehicleType;
		this.vehicleNo = vehicleNo;
		this.dob = dob;
		this.joiningDate = joiningDate;
		this.created_on = created_on;

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

	public Date getCreated_on() {
		return created_on;
	}

	public void setCreated_on(Date created_on) {
		this.created_on = created_on;
	}



	@Override
	public String toString() {
		return "Delivery [deliveryBoyId=" + deliveryBoyId + ", deliveryBoyName=" + deliveryBoyName
				+ ", deliveryBoyMobile=" + deliveryBoyMobile + ", deliveryBoyEmail=" + deliveryBoyEmail
				+ ", deliveryBoyPassword=" + deliveryBoyPassword + ", deliveryBoyGender=" + deliveryBoyGender
				+ ", vehicleType=" + vehicleType + ", vehicleNo=" + vehicleNo + ", dob=" + dob + ", joiningDate="
				+ joiningDate + ", created_on=" + created_on +  "]";
	}
	
	
	

}
