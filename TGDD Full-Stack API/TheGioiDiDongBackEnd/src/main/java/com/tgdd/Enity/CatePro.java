package com.tgdd.Enity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "catepro")
public class CatePro {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		@Column(name = "id_categorys")
		private long id_categorys;
		@Column(name = "id_products")
		private long id_products;
		
		public CatePro() {
			super();
		}

		public CatePro(long id, long id_categorys, long id_products) {
			super();
			this.id = id;
			this.id_categorys = id_categorys;
			this.id_products = id_products;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public long getId_categorys() {
			return id_categorys;
		}

		public void setId_categorys(long id_categorys) {
			this.id_categorys = id_categorys;
		}

		public long getId_products() {
			return id_products;
		}

		public void setId_products(long id_products) {
			this.id_products = id_products;
		}

		@Override
		public String toString() {
			return "CatePro [id=" + id + ", id_categorys=" + id_categorys + ", id_products=" + id_products + "]";
		}
	
				
}
