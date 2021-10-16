package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Category;

@Repository
public interface CategoryReponsitory extends JpaRepository<Category, Long> {

	@Query("SELECT ca FROM Category  ca WHERE ca.status='Bật'")
	public List<Category> listcate();

}
