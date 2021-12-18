package com.tgdd.Enity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "categorys")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String ten;
	String iclass;
	String title;
	String icon;
	String status;

	public Category() {
		super();
	}

	public Category(Long id, String ten, String iclass, String title, String icon, String status) {
		super();
		this.id = id;
		this.ten = ten;
		this.iclass = iclass;
		this.title = title;
		this.icon = icon;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTen() {
		return ten;
	}

	public void setTen(String ten) {
		this.ten = ten;
	}

	public String getIclass() {
		return iclass;
	}

	public void setIclass(String iclass) {
		this.iclass = iclass;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
