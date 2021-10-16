package com.tgdd.Enity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "tintuc")
public class Tintuc {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String anh;
	String ten;
	String mieuta;
	String chitiet;
	String anh2;
	String anh3;
	Boolean tinchinh;
	@DateTimeFormat(pattern = "MM/dd/yyyy")
	Date ngaytao;
	Boolean tingame;
	Integer tin_idsp;
	public Tintuc() {
		super();
	}
	public Tintuc(Long id, String anh, String ten, String mieuta, String chitiet, String anh2, String anh3,
			Boolean tinchinh, Date ngaytao, Boolean tingame, Integer tin_idsp) {
		super();
		this.id = id;
		this.anh = anh;
		this.ten = ten;
		this.mieuta = mieuta;
		this.chitiet = chitiet;
		this.anh2 = anh2;
		this.anh3 = anh3;
		this.tinchinh = tinchinh;
		this.ngaytao = ngaytao;
		this.tingame = tingame;
		this.tin_idsp = tin_idsp;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getMieuta() {
		return mieuta;
	}
	public void setMieuta(String mieuta) {
		this.mieuta = mieuta;
	}
	public String getChitiet() {
		return chitiet;
	}
	public void setChitiet(String chitiet) {
		this.chitiet = chitiet;
	}
	public String getAnh2() {
		return anh2;
	}
	public void setAnh2(String anh2) {
		this.anh2 = anh2;
	}
	public String getAnh3() {
		return anh3;
	}
	public void setAnh3(String anh3) {
		this.anh3 = anh3;
	}
	public Boolean getTinchinh() {
		return tinchinh;
	}
	public void setTinchinh(Boolean tinchinh) {
		this.tinchinh = tinchinh;
	}
	public Date getNgaytao() {
		return ngaytao;
	}
	public void setNgaytao(Date ngaytao) {
		this.ngaytao = ngaytao;
	}
	public Boolean getTingame() {
		return tingame;
	}
	public void setTingame(Boolean tingame) {
		this.tingame = tingame;
	}
	public Integer getTin_idsp() {
		return tin_idsp;
	}
	public void setTin_idsp(Integer tin_idsp) {
		this.tin_idsp = tin_idsp;
	}
	
	
}
