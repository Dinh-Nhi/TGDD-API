package com.tgdd.Enity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orderdetais")
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_detail_order;
	@Column(name = "id")
	private long id;
	@Column(name = "id_order")
	private String id_order;
	@Column(name = "quantity")
	private long quantity;
	@Column(name = "giaban")
	private long giaban;

	@Column(name = "anh")
	private String anh;
	@Column(name = "ten")
	private String ten;
	@Column(name = "mau")
	private String mau;
	public OrderDetails() {
		super();
	}
	public OrderDetails(long id_detail_order, long id, String id_order, long quantity, long giaban, String anh,
			String ten, String mau) {
		super();
		this.id_detail_order = id_detail_order;
		this.id = id;
		this.id_order = id_order;
		this.quantity = quantity;
		this.giaban = giaban;
		this.anh = anh;
		this.ten = ten;
		this.mau = mau;
	}
	public long getId_detail_order() {
		return id_detail_order;
	}
	public void setId_detail_order(long id_detail_order) {
		this.id_detail_order = id_detail_order;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getId_order() {
		return id_order;
	}
	public void setId_order(String id_order) {
		this.id_order = id_order;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public long getGiaban() {
		return giaban;
	}
	public void setGiaban(long giaban) {
		this.giaban = giaban;
	}
	public String getAnh() {
		return anh;
	}
	public void setAnh(String anh) {
		this.anh = anh;
	}
	public String getTen() {
		return ten;
	}
	public void setTen(String ten) {
		this.ten = ten;
	}
	public String getMau() {
		return mau;
	}
	public void setMau(String mau) {
		this.mau = mau;
	}



}
