package com.tgdd.Controller.Admin;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.tgdd.Enity.Category;
import com.tgdd.Enity.Order;
import com.tgdd.Enity.OrderDetails;
import com.tgdd.Enity.Product;
import com.tgdd.Enity.Tintuc;
import com.tgdd.Enity.User;
import com.tgdd.Exception.ResourceNotFoundException;
import com.tgdd.Reponsitory.CategoryReponsitory;
import com.tgdd.Reponsitory.OrderReponsitory;
import com.tgdd.Reponsitory.ProductReponsitory;
import com.tgdd.Reponsitory.TintucReponsitory;
import com.tgdd.Reponsitory.UserRepository;
import com.tgdd.Reponsitory.OrderDetailRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {
	
@Autowired
private ProductReponsitory productReponsitory;
@Autowired
private TintucReponsitory tintucReponsitory;
@Autowired
private CategoryReponsitory categoryReponsitory;
@Autowired
private OrderReponsitory orderReponsitory;
@Autowired
private UserRepository userRepository;
@Autowired
private OrderDetailRepository orderDetailRepository;

//lay-info-user-theo-id
	@GetMapping("/info_user/{id}")
	public Order getListOrderDetail(@PathVariable(value = "id") String id) {
		return orderReponsitory.ListInfoById(id);
	}

	
	
	// get list product order
	@GetMapping("/list_order/list_product/{id}")
	public List<OrderDetails> getListOrderDetailPro(@PathVariable(value = "id") String id) {
		return orderDetailRepository.getListOrderDetail(id);
	}




private static String imageDirectory = System.getProperty("user.dir") + "/images/";
private void makeDirectoryIfNotExist(String imageDirectory) {
	File directory = new File(imageDirectory);
	if (!directory.exists()) {
		directory.mkdir();
	}
}
//add-1
@PostMapping(value = "/addimage", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file) {
	makeDirectoryIfNotExist(imageDirectory);
	String fileName = file.getOriginalFilename();
	System.out.println("fileName: " + fileName);
	Path fileNamePath = Paths.get(imageDirectory, fileName);
	try {
		Files.write(fileNamePath, file.getBytes());
		return new ResponseEntity<>(HttpStatus.CREATED);
	} catch (IOException ex) {
		return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
	}

}



//PRODUCT_ADMIN START
@GetMapping("/all-product")
Page<Product> getAllProduct(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
	return productReponsitory.findAllPro(PageRequest.of(page.orElse(1), 10, Sort.Direction.ASC, sortBy.orElse("id")));
}

@GetMapping("/all-tintuc")
Page<Tintuc> getAllTintuc(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
	return tintucReponsitory.findAllTinTuc(PageRequest.of(page.orElse(1), 10, Sort.Direction.ASC, sortBy.orElse("id")));
}
@GetMapping("/tintuc/{id}")
public ResponseEntity<Tintuc> getTintucById(@PathVariable Long id) {
	Tintuc tintuc = tintucReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Tintuc not exits with id:" + id));
	return ResponseEntity.ok(tintuc);
}
@PostMapping("/addTintuc")
public Tintuc createTintuc(@RequestBody Tintuc tintuc) {
	return tintucReponsitory.save(tintuc);
}
@PutMapping("/tintuc/{id}")
public ResponseEntity<Tintuc> updateTintuc(@PathVariable Long id, @RequestBody Tintuc tintucDetails) {
	Tintuc tintuc = tintucReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Tintuc not exits with id:" + id));
	tintuc.setAnh(tintucDetails.getAnh());
	tintuc.setAnh2(tintucDetails.getAnh2());
	tintuc.setAnh3(tintucDetails.getAnh3());
	tintuc.setChitiet(tintucDetails.getChitiet());
	tintuc.setMieuta(tintucDetails.getMieuta());
	tintuc.setTen(tintucDetails.getTen());
	tintuc.setTinchinh(tintucDetails.getTinchinh());
	tintuc.setNgaytao(tintucDetails.getNgaytao());
	tintuc.setTingame(tintucDetails.getTingame());
	tintuc.setTin_idsp(tintucDetails.getTin_idsp());
	Tintuc updateTintuc = tintucReponsitory.save(tintuc);
	return ResponseEntity.ok(updateTintuc);
}
@DeleteMapping("/tintuc/{id}")
public ResponseEntity<Map<String, Boolean>> deleteTintuc(@PathVariable Long id){
	Tintuc tintuc = tintucReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Tintuc not exist with id :" + id));
	tintucReponsitory.delete(tintuc);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}








@GetMapping("/all-categorys")
Page<Category> getAllAdminCategorys(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
	return categoryReponsitory.findAll(PageRequest.of(page.orElse(1), 10, Sort.Direction.ASC, sortBy.orElse("id")));
}
@GetMapping("/category/{id}")
public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
	Category category = categoryReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Categorys not exits with id:" + id));
	return ResponseEntity.ok(category);
}
@PostMapping("/addCategory")
public Category createCategory(@RequestBody Category category) {
	return categoryReponsitory.save(category);
}
@PutMapping("/category/{id}")
public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
	Category category = categoryReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Categorys not exits with id:" + id));
	category.setTen(categoryDetails.getTen());
	category.setIcon(categoryDetails.getIcon());
	category.setStatus(categoryDetails.getStatus());
	category.setTitle(categoryDetails.getTitle());
	Category updateCategory = categoryReponsitory.save(category);
	return ResponseEntity.ok(updateCategory);
}
@DeleteMapping("/category/{id}")
public ResponseEntity<Map<String, Boolean>> deleteCategorys(@PathVariable Long id){
	Category category = categoryReponsitory.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Categorys not exist with id :" + id));
	categoryReponsitory.delete(category);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}






@GetMapping("/all-orders")
Page<Order> getAllAdminOrders(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
	return orderReponsitory.findAllOrder(PageRequest.of(page.orElse(1), 10, Sort.Direction.ASC, sortBy.orElse("id")));
}



@PutMapping("/order/{id}")
public ResponseEntity<Order> updateOrder(@PathVariable String id, @RequestBody Order orderDetails) {
	Order order = orderReponsitory.getOrder(id);
	order.setStatus(orderDetails.getStatus());
	Order updateOrder = orderReponsitory.save(order);
	return ResponseEntity.ok(updateOrder);
}





@GetMapping("/all-users")
Page<User> getAllAdminUsers(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
	return userRepository.findAll(PageRequest.of(page.orElse(1), 10, Sort.Direction.ASC, sortBy.orElse("id")));
}
@GetMapping("/user/{id}")
public ResponseEntity<User> getUserById(@PathVariable Long id) {
	User user = userRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("User not exits with id:" + id));
	return ResponseEntity.ok(user);
}
@PostMapping("/addUser")
public User createUser(@RequestBody User user) {
	return userRepository.save(user);
}
@PutMapping("/user/{id}")
public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
	User user = userRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("User not exits with id:" + id));
	user.setAddress(userDetails.getAddress());
	user.setEmail(userDetails.getEmail());
	user.setPassword(userDetails.getPassword());
	user.setPhone(userDetails.getPhone());
	user.setUsername(userDetails.getUsername());
	User updateUser = userRepository.save(user);
	return ResponseEntity.ok(updateUser);
}
@DeleteMapping("/user/{id}")
public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
	User user = userRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
	userRepository.delete(user);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}
}