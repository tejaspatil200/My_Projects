package com.onlineshopping.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="admin")
public class Admin {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int adminId;
	private String adminName;
	private String email;
	private String password;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_on", insertable = false, updatable = false)
	private Date createdTimestamp;
	
	public Admin() {
		
	}
	

	public Admin(int id, String adminName, String email, String password, Date createdTimestamp) {
		super();
		this.adminId = id;
		this.adminName = adminName;
		this.email = email;
		this.password = password;
		this.createdTimestamp = createdTimestamp;
	}
	


	public int getAdminId() {
		return adminId;
	}


	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}


	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", email=" + email + ", password=" + password
				+ ", createdTimestamp=" + createdTimestamp + "]";
	}

	
	
}
