package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Detailsimages;

@Repository
public interface DetailsimagesReponsitory extends JpaRepository<Detailsimages, Long> {

	@Query(value = "SELECT * FROM Detailsimages d  where d.id_products=? ", nativeQuery = true)
	public List<Detailsimages> listDetailsimages(Long id);

}
