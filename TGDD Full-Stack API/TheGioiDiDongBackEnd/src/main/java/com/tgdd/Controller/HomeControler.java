package com.tgdd.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tgdd.Enity.Category;
import com.tgdd.Enity.Details;
import com.tgdd.Enity.Detailsimages;
import com.tgdd.Enity.Product;
import com.tgdd.Enity.Saleslide;
import com.tgdd.Enity.Slider;
import com.tgdd.Enity.Tintuc;
import com.tgdd.Exception.ResourceNotFoundException;
import com.tgdd.Reponsitory.CategoryReponsitory;
import com.tgdd.Reponsitory.DetailsReponsitory;
import com.tgdd.Reponsitory.DetailsimagesReponsitory;
import com.tgdd.Reponsitory.ProductReponsitory;
import com.tgdd.Reponsitory.SliderReponsitory;
import com.tgdd.Reponsitory.TintucReponsitory;
import com.tgdd.Service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeControler {
	@Autowired
	private ProductReponsitory productReponsitory;
	@Autowired
	private CategoryReponsitory categoryReponsitory;
	@Autowired
	private SliderReponsitory sliderReponsitory;
	@Autowired
	private TintucReponsitory tintucReponsitory;
	@Autowired
	private DetailsimagesReponsitory detailsimagesReponsitory;
	@Autowired
	private DetailsReponsitory detailsReponsitory;
	@Autowired
	private ProductService productService;
	
	
	@GetMapping("/phu-kien-lien-quan/{id}")
	public List<Product> getPkById(@PathVariable Long id) {
		Product product = productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		return productReponsitory.findByPkId(product.getId_categorys());

	}


	
	
	@GetMapping("/san-pham-cung-loai/{id}")
	public List<Product> getCateById(@PathVariable Long id) {
		Product product = productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		return productReponsitory.findByCateId(product.getId_categorys());

	}
	
	
	
	
	

	@GetMapping("/products")
	public List<Product> getpro() {
		return productReponsitory.listproduct();
	}
	@GetMapping("/categorys")
	public List<Category> getcate() {
		return categoryReponsitory.listcate();
	}
	@GetMapping("/categorys/{id_categorys}")
	public List<Product> getcatebyid(@PathVariable Long id_categorys) {
		return productReponsitory.listcatebyid(id_categorys);
	}


	
	@GetMapping("/products/images/{id}")
	public List<Detailsimages> listDetailsimages(@PathVariable Long id) {
		return detailsimagesReponsitory.listDetailsimages(id);
	}

	@GetMapping("/thongsokythuat/{id}")
	public List<Details> listDetails(@PathVariable Long id) {
		return detailsReponsitory.listDetails(id);
	}

	@GetMapping("/laptop")
	public List<Product> getlaptop() {
		return productReponsitory.listlaptop();
	}

	@GetMapping("/laptop-noibat")
	public List<Product> getlaptophot() {
		return productReponsitory.listlaptophot();
	}

	@GetMapping("/tenlaptop")
	public List<Product> tenlaptop() {
		return productReponsitory.listtenlaptop();
	}

	@GetMapping("/phone-noibat")
	public List<Product> getphonehot() {
		return productReponsitory.listphonehot();
	}

	@GetMapping("/phone")
	public List<Product> getphone() {
		return productReponsitory.listphone();
	}

	@GetMapping("/tenphone")
	public List<Product> tenphone() {
		return productReponsitory.listtenphone();
	}

	@GetMapping("/phukien")
	public List<Product> getphukien() {
		return productReponsitory.listphukien();
	}

	@GetMapping("/tenphukien")
	public List<Product> tenphukien() {
		return productReponsitory.listtenphukien();
	}

	@GetMapping("/sale")
	public List<Product> getsale() {
		return productReponsitory.listsale();
	}

	@GetMapping("/sanphamcu")
	public List<Product> getspcu() {
		return productReponsitory.listspcu();
	}

	@GetMapping("/tablet-noibat")
	public List<Product> gettbhot() {
		return productReponsitory.listtbhot();
	}

	@GetMapping("/tablet")
	public List<Product> gettb() {
		return productReponsitory.listtb();
	}

	@GetMapping("/tentablet")
	public List<Product> tentablet() {
		return productReponsitory.listtentablet();
	}

	@GetMapping("/tendonghothoitrang")
	public List<Product> tendonghothoitrang() {
		return productReponsitory.listtendonghothoitrang();
	}

	@GetMapping("/donghothoitrang")
	public List<Product> getdh() {
		return productReponsitory.listdh();
	}

	@GetMapping("/donghothongminh")
	public List<Product> getwatch() {
		return productReponsitory.listwatch();
	}

	@GetMapping("/tendonghothongminh")
	public List<Product> tendonghothongminh() {
		return productReponsitory.listtendonghothongminh();
	}

	@GetMapping("/saleslides")
	public List<Saleslide> getsaleslide() {
		return sliderReponsitory.listsaleslide();
	}

	@GetMapping("/slides")
	public List<Slider> getslide() {
		return sliderReponsitory.listslide();
	}

	@GetMapping("/tinchinh")
	public List<Tintuc> gettinchinh() {
		return tintucReponsitory.listtinchinh();
	}

	@GetMapping("/tintuc")
	public List<Tintuc> gettintuc() {
		return tintucReponsitory.listtintuc();
	}

	@GetMapping("/tingame")
	public List<Tintuc> gettingame() {
		return tintucReponsitory.listtingame();
	}

	@GetMapping("/ytbrivew")
	public List<Product> getytbrivew() {
		return productReponsitory.listytbrivew();
	}

	@GetMapping("/tin-tuc/{id}")
	public ResponseEntity<Tintuc> getTintuctById(@PathVariable Long id) {
		Tintuc tintuc = tintucReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tintuc not exist with id :" + id));
		return ResponseEntity.ok(tintuc);
	}

	@GetMapping("/tin-tuc-lien-quan/{id}")
	public List<Tintuc> getTinCungLoaiById(@PathVariable Long id) {
		Tintuc tintuc = tintucReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tintuc not exist with id :" + id));
		return tintucReponsitory.findTinCungLoaiById(tintuc.getTin_idsp());
	}


	@GetMapping("/products/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
	}

	@RequestMapping("/search")
	public List<Product> viewHomePage(@Param("keyword") String keyword) {
		List<Product> listProducts = productService.listAll(keyword);
		return listProducts;
	}

	@GetMapping("/bestinpageorther")
	Page<Product> listProductBestsInPageOther(@RequestParam Optional<Integer> page,
			@RequestParam Optional<String> sortBy) {
		return productReponsitory
				.listProductBests(PageRequest.of(page.orElse(1), 4, Sort.Direction.ASC, sortBy.orElse("id")));
	}

	// san-pham-moi-trang khac lay 3sp
	@GetMapping("/newinpageorther")
	Page<Product> listProductNewsInPageOther(@RequestParam Optional<Integer> page,
			@RequestParam Optional<String> sortBy) {
		return productReponsitory
				.listProductNews(PageRequest.of(page.orElse(1), 4, Sort.Direction.ASC, sortBy.orElse("id")));
	}

}
