package com.tgdd.Reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgdd.Enity.Tintuc;

@Repository
public interface TintucReponsitory extends JpaRepository<Tintuc, Long> {

	@Query(value = "select * from Tintuc p where p.tinchinh = true ", nativeQuery = true)
	public List<Tintuc> listtinchinh();

	@Query(value = "select * from Tintuc p where p.tinchinh = false and  p.tingame=false ORDER BY p.ngaytao DESC ", nativeQuery = true)
	public List<Tintuc> listtintuc();

	@Query(value = "select * from Tintuc p where p.tingame=true ORDER BY p.ngaytao DESC  LIMIT 1", nativeQuery = true)
	public List<Tintuc> listtingame();

	@Query(value = "select *  from Tintuc p where p.tin_idsp = ?1  ORDER BY p.ngaytao DESC  LIMIT 6", nativeQuery = true)
	public List<Tintuc> findTinCungLoaiById(Integer tin_idsp);

}
