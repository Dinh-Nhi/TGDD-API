package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Saleslide;
import com.tgdd.Enity.Slider;



@Repository
public interface SliderReponsitory extends JpaRepository<Slider, Long>  {
	@Query(value = "select s from Slider s")
	List<Slider> listslide();

	@Query(value = "select s from Saleslide s")
	List<Saleslide> listsaleslide();

	
}
