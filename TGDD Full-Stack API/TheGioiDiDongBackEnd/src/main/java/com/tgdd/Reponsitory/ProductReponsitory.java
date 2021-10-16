package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Product;

@Repository
public interface ProductReponsitory extends JpaRepository<Product, Long> {

	
	@Query(value = "select * from products p ORDER BY ngaytao DESC", nativeQuery = true)
	public List<Product> listproduct();
	
	
	@Query(value = "select p from Product p where p.noibat=false and  p.category.ten='Laptop'  ORDER BY p.ngaytao DESC")
	public List<Product> listlaptop();

	@Query(value = "select p from Product p where p.noibat=true and  p.category.ten= 'Laptop'")
	public List<Product> listlaptophot();

	@Query(value = "select p from Product p where p.noibat=true and p.category.ten= 'Điện thoại'")
	public List<Product> listphonehot();

	@Query(value = "select p from Product p where p.noibat=false and  p.category.ten= 'Điện thoại' ORDER BY p.ngaytao DESC ")
	public List<Product> listphone();

	@Query(value = "select p from Product p where  p.category.ten= 'Phụ Kiện' ORDER BY p.ngaytao DESC")
	public List<Product> listphukien();

	@Query(value = "select p from Product p where  p.phantramgiam > 0  ORDER BY RANDOM ()")
	public List<Product> listsale();

	@Query(value = "select p from Product p where   p.noibat= false ORDER BY p.ngaytao ASC")
	public List<Product> listspcu();

	@Query(value = "select p from Product p where p.noibat=true and  p.category.ten= 'Tablet'")
	public List<Product> listtbhot();

	@Query(value = "select p from Product p where p.noibat=false and  p.category.ten= 'Tablet' ORDER BY p.ngaytao DESC")
	public List<Product> listtb();

	@Query(value = "select p from Product p where p.category.ten= 'Đồng hồ thời trang' ORDER BY p.ngaytao DESC")
	public List<Product> listdh();

	@Query(value = "select p from Product p where p.category.ten= 'Đồng hồ thông minh' ORDER BY p.ngaytao DESC")
	public List<Product> listwatch();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Điện thoại' ORDER BY RANDOM ()  LIMIT 5", nativeQuery = true)
	public List<Product> listtenphone();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Laptop' ORDER BY RANDOM ()  LIMIT 2", nativeQuery = true)
	public List<Product> listtenlaptop();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Phụ Kiện' ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
	public List<Product> listtenphukien();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Tablet' ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
	public List<Product> listtentablet();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Đồng hồ thời trang' ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
	public List<Product> listtendonghothoitrang();

	@Query(value = "select * from Products p where p.noibat=false and  p.category.ten= 'Đồng hồ thông minh' ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
	public List<Product> listtendonghothongminh();

	@Query("SELECT p FROM Product p WHERE CONCAT(LOWER(p.ten)) LIKE  %?1%  ")
	public List<Product> SearchContainsIgnoreCase(String keyword);

	@Query(value = "select * from Product ORDER BY ngaytao DESC", nativeQuery = true)
	public Page<Product> listProductBests(PageRequest of);

	@Query(value = "select * from Product  ORDER BY ngaytao DESC", nativeQuery = true)
	public Page<Product> listProductNews(PageRequest of);

	@Query(value = "select p from Product p where p.ytbrivew !=null ORDER BY p.ngaytao DESC")
	public List<Product> listytbrivew();

	@Query(value = "SELECT * FROM Products Right JOIN Categorys \r\n"
			+ "ON (Categorys.id = Products.id_categorys) where id_categorys=?1 and noibat = false  ORDER BY Products.ngaytao DESC LIMIT 10", nativeQuery = true)
	public List<Product> findByCateId(Long id_categorys);

	@Query(value = "select * from Products p where p.pkdikem=?1 ORDER BY RANDOM ()  LIMIT 10", nativeQuery = true)
	public List<Product> findByPkId(Long id_categorys);

	
	@Query(value = "SELECT * FROM Products Right JOIN Categorys ON (Categorys.id = Products.id_categorys) where id_categorys=?1 and noibat = false  ORDER BY Products.ngaytao DESC LIMIT 10", nativeQuery = true)
	public List<Product> listcatebyid(Long id_categorys);

	

	@Query(value = "SELECT * FROM Products p  ORDER BY id DESC", nativeQuery = true)
	public List<Product> listpro();

	
	




}
