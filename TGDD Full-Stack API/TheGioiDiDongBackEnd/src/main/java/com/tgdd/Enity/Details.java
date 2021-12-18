package com.tgdd.Enity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "details")
public class Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "chitiet1")
	private String chitiet1;
	@Column(name = "chitiet2")
	private String chitiet2;
	@Column(name = "id_products")
	private long id_products;
	public Details() {
		super();
	}
	public Details(long id, String chitiet1, String chitiet2, long id_products) {
		super();
		this.id = id;
		this.chitiet1 = chitiet1;
		this.chitiet2 = chitiet2;
		this.id_products = id_products;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getChitiet1() {
		return chitiet1;
	}
	public void setChitiet1(String chitiet1) {
		this.chitiet1 = chitiet1;
	}
	public String getChitiet2() {
		return chitiet2;
	}
	public void setChitiet2(String chitiet2) {
		this.chitiet2 = chitiet2;
	}
	public long getId_products() {
		return id_products;
	}
	public void setId_products(long id_products) {
		this.id_products = id_products;
	}
	@Override
	public String toString() {
		return "Details [id=" + id + ", chitiet1=" + chitiet1 + ", chitiet2=" + chitiet2 + ", id_products="
				+ id_products + "]";
	}
	
	
	
}
