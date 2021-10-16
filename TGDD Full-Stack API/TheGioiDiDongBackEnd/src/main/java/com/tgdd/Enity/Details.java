package com.tgdd.Enity;

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
	Long id;
	Long id_products;
	String chitiet1;
	String chitiet2;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getId_products() {
		return id_products;
	}
	public void setId_products(Long id_products) {
		this.id_products = id_products;
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

}
