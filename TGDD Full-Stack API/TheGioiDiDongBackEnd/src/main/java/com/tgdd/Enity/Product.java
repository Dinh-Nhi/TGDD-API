package com.tgdd.Enity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "products")
public class Product {
	@Id
	@Column(name = "id")
	private Long id;
	@Column(name = "id_categorys")
	private Long id_categorys;
	@Column(name = "anh")
	private String anh;
	@Column(name = "ten")
	private String ten;
	@Column(name = "giaban")
	private long giaban;
	@Column(name = "phantramgiam")
	private Long phantramgiam;
	@Column(name = "anh2")
	private String anh2;
	@Column(name = "detailanh")
	private String detailanh;
	@Column(name = "noibat")
	private Boolean noibat;
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "ngaytao")
//	@Temporal(TemporalType.DATE)
//	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private Date ngaytao;
	@Column(name = "anh3")
	private String anh3;
	@Column(name = "chuongtrinh")
	private String chuongtrinh;
	@Column(name = "quatang")
	private String quatang;
	@Column(name = "pkdikem")
	private Long pkdikem;
	@Column(name = "ytbrivew")
	private String ytbrivew;
	@Column(name = "giagoc")
	private long giagoc;
	public Product() {
		super();
	}
	public Product(Long id, Long id_categorys, String anh, String ten, long giaban, Long phantramgiam, String anh2,
			String detailanh, Boolean noibat, Date ngaytao, String anh3, String chuongtrinh, String quatang,
			Long pkdikem, String ytbrivew, long giagoc) {
		super();
		this.id = id;
		this.id_categorys = id_categorys;
		this.anh = anh;
		this.ten = ten;
		this.giaban = giaban;
		this.phantramgiam = phantramgiam;
		this.anh2 = anh2;
		this.detailanh = detailanh;
		this.noibat = noibat;
		this.ngaytao = ngaytao;
		this.anh3 = anh3;
		this.chuongtrinh = chuongtrinh;
		this.quatang = quatang;
		this.pkdikem = pkdikem;
		this.ytbrivew = ytbrivew;
		this.giagoc = giagoc;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getId_categorys() {
		return id_categorys;
	}
	public void setId_categorys(Long id_categorys) {
		this.id_categorys = id_categorys;
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
	public long getGiaban() {
		return giaban;
	}
	public void setGiaban(long giaban) {
		this.giaban = giaban;
	}
	public Long getPhantramgiam() {
		return phantramgiam;
	}
	public void setPhantramgiam(Long phantramgiam) {
		this.phantramgiam = phantramgiam;
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
	public String getChuongtrinh() {
		return chuongtrinh;
	}
	public void setChuongtrinh(String chuongtrinh) {
		this.chuongtrinh = chuongtrinh;
	}
	public String getQuatang() {
		return quatang;
	}
	public void setQuatang(String quatang) {
		this.quatang = quatang;
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
	public long getGiagoc() {
		return giagoc;
	}
	public void setGiagoc(long giagoc) {
		this.giagoc = giagoc;
	}
	@Override
	public String toString() {
		return "Tutorial [id=" + id + ",anh=" + anh + ", anh2=" + anh2 + ",  anh3=" + anh3 + ",chuongtrinh=\" + chuongtrinh\r\n"
				+ "	+ \", detailanh=\" + detailanh\r\n"
				+ "				+ \",giaban=\"\r\n"
				+ "				+ giaban + \", giagoc=\" + giagoc\r\n"
				+ "				+ \", id_categorys=" + id_categorys + ",  ngaytao=\" + ngaytao + \", noibat=\" + noibat + \",  phantramgiam=" + phantramgiam + ",pkdikem=\" + pkdikem + \", quatang=" + quatang + ",ten=\" + ten + \",  ytbrivew=" + ytbrivew + ", ]";
	}



}
