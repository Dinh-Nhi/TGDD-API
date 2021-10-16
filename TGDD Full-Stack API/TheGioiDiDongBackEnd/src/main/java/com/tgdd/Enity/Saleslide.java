package com.tgdd.Enity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "saleslide")
public class Saleslide {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String ten;
	String mieuta;
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
	public String getMieuta() {
		return mieuta;
	}
	public void setMieuta(String mieuta) {
		this.mieuta = mieuta;
	}
	
	
}
