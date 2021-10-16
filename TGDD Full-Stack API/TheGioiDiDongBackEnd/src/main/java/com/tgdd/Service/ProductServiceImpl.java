package com.tgdd.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tgdd.Enity.Product;
import com.tgdd.Reponsitory.ProductReponsitory;


@Service
public class ProductServiceImpl implements ProductService{
	  @Autowired
	    private ProductReponsitory productReponsitory;
	//Search Product
	  public List<Product> listAll(String keyword) {
	        if (keyword != null) {
	            return productReponsitory.SearchContainsIgnoreCase(keyword);
	        }
	        return productReponsitory.findAll();
	    }
	 
		
		public Product getProductsById(long productId) throws Exception {
			return productReponsitory.findById(productId).orElseThrow(() ->new Exception("Product is not found"));
		}

}
