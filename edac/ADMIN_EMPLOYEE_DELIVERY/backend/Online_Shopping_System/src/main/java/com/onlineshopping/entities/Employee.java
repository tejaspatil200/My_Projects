package com.onlineshopping.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name="employee")
public class Employee {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
  private int employeeId;
	
	private String employeeName; 
	
	private String employeeMobile;
	
	private String employeeGender;
	
	private String employeeEmail;
	
	private String employeePassword;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date employeeDob;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date employeeJoindate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date created_on;
	
	
	public Employee() {
	}
	
	

		public Employee(int employeeId, String employeeName, String employeeMobile, String employeeGender,
			String employeeEmail, String employeePassword, Date dob, Date joinDate, Date createdTimestamp) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.employeeMobile = employeeMobile;
		this.employeeGender = employeeGender;
		this.employeeEmail = employeeEmail;
		this.employeePassword = employeePassword;
		this.employeeDob = dob;
		this.employeeJoindate = joinDate;
		this.created_on = createdTimestamp;
	}



		public int getEmployeeId() {
			return employeeId;
		}



		public void setEmployeeId(int employeeId) {
			this.employeeId = employeeId;
		}



		public String getEmployeeName() {
			return employeeName;
		}



		public void setEmployeeName(String employeeName) {
			this.employeeName = employeeName;
		}



		public String getEmployeeMobile() {
			return employeeMobile;
		}



		public void setEmployeeMobile(String employeeMobile) {
			this.employeeMobile = employeeMobile;
		}



		public String getEmployeeGender() {
			return employeeGender;
		}



		public void setEmployeeGender(String employeeGender) {
			this.employeeGender = employeeGender;
		}



		public String getEmployeeEmail() {
			return employeeEmail;
		}



		public void setEmployeeEmail(String employeeEmail) {
			this.employeeEmail = employeeEmail;
		}



		public String getEmployeePassword() {
			return employeePassword;
		}



		public void setEmployeePassword(String employeePassword) {
			this.employeePassword = employeePassword;
		}



		public Date getEmployeeDob() {
			return employeeDob;
		}



		public void setEmployeeDob(Date employeeDob) {
			this.employeeDob = employeeDob;
		}



		public Date getEmployeeJoindate() {
			return employeeJoindate;
		}



		public void setEmployeeJoindate(Date employeeJoindate) {
			this.employeeJoindate = employeeJoindate;
		}



		public Date getCreated_on() {
			return created_on;
		}



		public void setCreated_on(Date created_on) {
			this.created_on = created_on;
		}



		@Override
		public String toString() {
			return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", employeeMobile="
					+ employeeMobile + ", employeeGender=" + employeeGender + ", employeeEmail=" + employeeEmail
					+ ", employeePassword=" + employeePassword + ", employeeDob=" + employeeDob + ", employeeJoindate="
					+ employeeJoindate + ", created_on=" + created_on + "]";
		}



}