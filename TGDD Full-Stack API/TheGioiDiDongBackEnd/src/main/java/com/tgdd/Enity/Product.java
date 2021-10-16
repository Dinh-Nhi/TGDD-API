package com.tgdd.Enity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String chuongtrinh;
	String anh;
	String ten;
	Double giaban;
	Integer phantramgiam;
	String quatang;
	String anh2;
	String detailanh;
	Boolean noibat;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "MM/dd/yyyy")
	Date ngaytao;
	String anh3;
	Long pkdikem;
	String ytbrivew;
	
	
	@ManyToOne
	@JoinColumn(name = "id_categorys")
	Category category;
	

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "id_products", nullable = true)
	private Set<Detailsimages> detailsimages = new HashSet<>();


	
	public Product(String chuongtrinh, String anh, String ten, Double giaban, Integer phantramgiam, String quatang,
			String anh2, String detailanh, Boolean noibat, Date ngaytao, String anh3, Long pkdikem, String ytbrivew,
			Category category, Set<Detailsimages> detailsimages) {
		super();
		this.chuongtrinh = chuongtrinh;
		this.anh = anh;
		this.ten = ten;
		this.giaban = giaban;
		this.phantramgiam = phantramgiam;
		this.quatang = quatang;
		this.anh2 = anh2;
		this.detailanh = detailanh;
		this.noibat = noibat;
		this.ngaytao = ngaytao;
		this.anh3 = anh3;
		this.pkdikem = pkdikem;
		this.ytbrivew = ytbrivew;
		this.category = category;
		this.detailsimages = detailsimages;
	}


	public Product() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getChuongtrinh() {
		return chuongtrinh;
	}


	public void setChuongtrinh(String chuongtrinh) {
		this.chuongtrinh = chuongtrinh;
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


	public Double getGiaban() {
		return giaban;
	}


	public void setGiaban(Double giaban) {
		this.giaban = giaban;
	}


	public Integer getPhantramgiam() {
		return phantramgiam;
	}


	public void setPhantramgiam(Integer phantramgiam) {
		this.phantramgiam = phantramgiam;
	}


	public String getQuatang() {
		return quatang;
	}


	public void setQuatang(String quatang) {
		this.quatang = quatang;
	}


	public String getAnh2() {
		return anh2;
	}


	public void setAnh2(String anh2) {
		this.anh2 = anh2;
	}


	public String getDetailanh() {
		return detailanh;
	}


	public void setDetailanh(String detailanh) {
		this.detailanh = detailanh;
	}


	public Boolean getNoibat() {
		return noibat;
	}


	public void setNoibat(Boolean noibat) {
		this.noibat = noibat;
	}


	public Date getNgaytao() {
		return ngaytao;
	}


	public void setNgaytao(Date ngaytao) {
		this.ngaytao = ngaytao;
	}


	public String getAnh3() {
		return anh3;
	}


	public void setAnh3(String anh3) {
		this.anh3 = anh3;
	}


	public Long getPkdikem() {
		return pkdikem;
	}


	public void setPkdikem(Long pkdikem) {
		this.pkdikem = pkdikem;
	}


	public String getYtbrivew() {
		return ytbrivew;
	}


	public void setYtbrivew(String ytbrivew) {
		this.ytbrivew = ytbrivew;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Set<Detailsimages> getDetailsimages() {
		return detailsimages;
	}


	public void setDetailsimages(Set<Detailsimages> detailsimages) {
		this.detailsimages = detailsimages;
	}

	
	
	
	
}
