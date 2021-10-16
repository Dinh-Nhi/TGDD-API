package com.tgdd.Service;

import java.util.List;

import com.tgdd.Enity.Product;


public interface ProductService {
	  public List<Product> listAll(String keyword);
	  public Product getProductsById(long productId) throws Exception;  
}
