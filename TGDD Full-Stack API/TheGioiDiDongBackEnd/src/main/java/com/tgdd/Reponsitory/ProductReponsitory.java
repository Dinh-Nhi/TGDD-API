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

	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Tablet'and pro.noibat = 'true'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	public List<Product> listtbhot();

	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Tablet'and pro.noibat = 'false'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	public List<Product> listtb();

	
	
	
	
	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Đồng hồ thời trang'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	public List<Product> listdh();

	
	
	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Đồng hồ thông minh'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	public List<Product> listwatch();

	
	
	
	
	
	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Điện thoại' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 5", nativeQuery = true)
	public List<Product> listtenphone();

	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Laptop' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 2", nativeQuery = true)
public List<Product> listtenlaptop();

	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Phụ Kiện' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
public List<Product> listtenphukien();

	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Tablet' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
public List<Product> listtentablet();

	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Đồng hồ thời trang' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
public List<Product> listtendonghothoitrang();

	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Đồng hồ thông minh' and pro.noibat = 'false'  ORDER BY RANDOM ()  LIMIT 3", nativeQuery = true)
public List<Product> listtendonghothongminh();
	
	
	
	
	
	

	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Laptop' and pro.noibat = 'false'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	
	public List<Product> listlaptop();

	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Laptop' and pro.noibat = 'true'", nativeQuery = true)
public List<Product> listlaptophot();

	
	
	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Điện thoại' and pro.noibat = 'true'", nativeQuery = true)
public List<Product> listphonehot();

	
	

	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Điện thoại' and pro.noibat = 'false'  ORDER BY  pro.ngaytao Desc", nativeQuery = true)
	
	public List<Product> listphone();

	@Query(value = "select * from products pro , categorys cate , catepro cp where cp.id_categorys = cate.id and cp.id_products = pro.id and \r\n"
			+ "cate.ten = 'Phụ Kiện'  ORDER BY p.ngaytao DESC", nativeQuery = true)
	public List<Product> listphukien();

	
	
	@Query(value = "select * from products p ORDER BY ngaytao DESC", nativeQuery = true)
	public List<Product> listproduct();
	
	

	@Query(value = "select * from Products  where phantramgiam > 0  ORDER BY RANDOM ()", nativeQuery = true)
	public List<Product> listsale();

	@Query(value = "select p from Product p where   p.noibat= false ORDER BY p.ngaytao ASC")
	public List<Product> listspcu();


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


	@Query(value = "SELECT * FROM Products  ORDER BY id DESC", nativeQuery = true)
	public Page<Product> findAllPro(PageRequest of);

	
	




}
