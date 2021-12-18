package com.tgdd.Enity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "detailsimages")
public class Detailsimages {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "anh")
	private String anh;
	@Column(name = "id_products")
	private long id_products;
	@Column(name = "mau")
	private String mau;
	public Detailsimages() {
		super();
	}
	public Detailsimages(long id, String anh, long id_products, String mau) {
		super();
		this.id = id;
		this.anh = anh;
		this.id_products = id_products;
		this.mau = mau;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAnh() {
		return anh;
	}
	public void setAnh(String anh) {
		this.anh = anh;
	}
	public long getId_products() {
		return id_products;
	}
	public void setId_products(long id_products) {
		this.id_products = id_products;
	}
	public String getMau() {
		return mau;
	}
	public void setMau(String mau) {
		this.mau = mau;
	}
	@Override
	public String toString() {
		return "Detailsimages [id=" + id + ", anh=" + anh + ", id_products=" + id_products + ", mau=" + mau + "]";
	}
	
}
