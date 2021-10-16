package com.tgdd.Controller.Order;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tgdd.Enity.Order;
import com.tgdd.Enity.User;
import com.tgdd.Exception.ResourceNotFoundException;
import com.tgdd.Payload.Response.MessageResponse;
import com.tgdd.Reponsitory.OrderReponsitory;
import com.tgdd.Reponsitory.UserRepository;


@RestController
@CrossOrigin
public class ProfileUserController {
	@Autowired
	private OrderReponsitory orderReponsitory;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	private UserRepository userRepository;
	// get all order theo id
		@GetMapping("/list_order/{id}")
		public List<Order> getAllOrder(@PathVariable(value = "id") Long id) {
			return orderReponsitory.ListOrder(id);
		}
		//get-product-by-id
			@GetMapping("/change_user/{id}")
			public ResponseEntity<User> getProductById(@PathVariable Long id) {
				User user = userRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("User not exits with id:" + id));
				return ResponseEntity.ok(user);
			}
		// update employee rest api
			@PutMapping("/change_user/{id}")
			public ResponseEntity<User> updateEmployee(@PathVariable Long id, @RequestBody User userDetails) {
				User user = userRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Product not exits with id:" + id));
				user.setUsername(userDetails.getUsername());
				user.setAddress(userDetails.getAddress());
				user.setEmail(userDetails.getEmail());
				user.setPhone(userDetails.getPhone());
				User updateUser = userRepository.save(user);
				return ResponseEntity.ok(updateUser);
			}
			
			@PutMapping("/change-password/{id}/{np}")
			public ResponseEntity<?> updatePassword(@PathVariable (value="id") Long id, @Valid @RequestBody User userDetails,@PathVariable (value="np") String password)
			throws ResourceNotFoundException{
				User user = userRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("User not exits with id:" + id));
				if(user.getPassword().equals(userDetails.getPassword()))
				{
					user.setPassword(encoder.encode(password));
				}else {
					return ResponseEntity.badRequest().body(new MessageResponse("Mật khẩu không chính xác"));
				}
				final User updateUser = userRepository.save(user);
				return ResponseEntity.ok(new MessageResponse("Đổi mật khẩu thành công"));
			}
			@GetMapping("/info/{id}")
			public ResponseEntity<User> getUserById(@PathVariable Long id) {
				User user = userRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
				
				return ResponseEntity.ok(user);
			}
	}

