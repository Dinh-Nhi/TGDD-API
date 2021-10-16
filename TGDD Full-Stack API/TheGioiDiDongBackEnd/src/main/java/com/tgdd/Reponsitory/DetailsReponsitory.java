package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Details;

@Repository
public interface DetailsReponsitory extends JpaRepository<Details, Long> {

	@Query(value = "SELECT * FROM Details d  where d.id_products=? ", nativeQuery = true)
	public List<Details> listDetails(Long id);

}
