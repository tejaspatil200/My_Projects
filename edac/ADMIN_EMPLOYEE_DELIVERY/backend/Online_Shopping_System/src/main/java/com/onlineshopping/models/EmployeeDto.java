package com.onlineshopping.models;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.onlineshopping.entities.Employee;

public class EmployeeDto {

	private int employeeId;

	private String employeeName;

	private String employeeMobile;

	private String employeeGender;

	private String employeeEmail;

	private String employeePassword;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date employeeDob;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date employeeJoindate;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;

	public EmployeeDto() {

	}

	public EmployeeDto(int employeeId, String employeeName, String employeeMobile, String employeeGender,
			String employeeEmail, String employeePassword, Date employeeDob, Date employeeJoindate,
			Date createdTimestamp) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.employeeMobile = employeeMobile;
		this.employeeGender = employeeGender;
		this.employeeEmail = employeeEmail;
		this.employeePassword = employeePassword;
		this.employeeDob = employeeDob;
		this.employeeJoindate = employeeJoindate;
		this.createdTimestamp = createdTimestamp;
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

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	public static EmployeeDto fromEntity(Employee entity) {
		EmployeeDto dto = new EmployeeDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	public static Employee toEntity(EmployeeDto dto) {
		Employee entity = new Employee();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
}
