package com.onlineshopping.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="itemDetail")
public class ItemDetail {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int itemId;
	private double price;
	private int quantity;
	private String itemName;
	
	

//	@ManyToMany
//	@JoinTable(name = "orderDetail",
//	joinColumns = {@JoinColumn (name="itemId")},
//	inverseJoinColumns = {@JoinColumn (name="orderId")} )
//	private List<Orders> ordersList;



	public ItemDetail(int itemId, double price, int quantity, String itemName) {
		super();
		this.itemId = itemId;
		this.price = price;
		this.quantity = quantity;
		this.itemName = itemName;
		//this.ordersList = ordersList;
	}



	public int getItemId() {
		return itemId;
	}



	public void setItemId(int itemId) {
		this.itemId = itemId;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	public String getItemName() {
		return itemName;
	}



	public void setItemName(String itemName) {
		this.itemName = itemName;
	}



//	public List<Orders> getOrdersList() {
//		return ordersList;
//	}
//
//
//
//	public void setOrdersList(List<Orders> ordersList) {
//		this.ordersList = ordersList;
//	}



	@Override
	public String toString() {
		return "ItemDetail [itemId=" + itemId + ", price=" + price + ", quantity=" + quantity + ", itemName=" + itemName
				+ "]";
	}
	
	
	
//	@OneToMany(mappedBy = "items", cascade = CascadeType.ALL)
//	private List<Orders> orderList;
	
//	@OneToMany (cascade = CascadeType.ALL)
//	@JoinColumn(name="orderId " )
//	private Orders orderlist;

	
}
