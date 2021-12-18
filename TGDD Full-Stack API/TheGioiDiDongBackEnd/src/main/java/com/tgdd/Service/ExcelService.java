package com.tgdd.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.tgdd.Enity.CatePro;
import com.tgdd.Enity.Details;
import com.tgdd.Enity.Detailsimages;
import com.tgdd.Enity.Product;
import com.tgdd.Reponsitory.CateProRepository;
import com.tgdd.Reponsitory.DetailsReponsitory;
import com.tgdd.Reponsitory.DetailsimagesReponsitory;
import com.tgdd.Reponsitory.ProductReponsitory;
import com.tgdd.uitls.ExcelHelperCatePro;
import com.tgdd.uitls.ExcelHelperPro;
import com.tgdd.uitls.ExcelHelperProDetail;
import com.tgdd.uitls.ExcelHelperProDetailImg;


@Service
public class ExcelService {
  @Autowired
  CateProRepository cateProRepository;
  @Autowired
  ProductReponsitory productReponsitory;
  @Autowired
  DetailsReponsitory detailsReponsitory;
  @Autowired
  DetailsimagesReponsitory detailsimagesReponsitory ;

  
  
  
  
  
  
  
  
  
  public void savecatepro(MultipartFile file) {
    try {
      List<CatePro> tutorials = ExcelHelperCatePro.excelToTutorials(file.getInputStream());
      cateProRepository.saveAll(tutorials);
    } catch (IOException e) {
      throw new RuntimeException("fail to store excel data: " + e.getMessage());
    }
  }

  public void savepro(MultipartFile file) {
	    try {
	      List<Product> tutorials = ExcelHelperPro.excelToTutorials(file.getInputStream());
	      productReponsitory.saveAll(tutorials);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store excel data: " + e.getMessage());
	    }
	  }

public void saveprodetail(MultipartFile file) {
    try {
	      List<Details> tutorials = ExcelHelperProDetail.excelToTutorials(file.getInputStream());
	      detailsReponsitory.saveAll(tutorials);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store excel data: " + e.getMessage());
	    }
	  }

public void saveprodetailimg(MultipartFile file) {
    try {
	      List<Detailsimages> tutorials = ExcelHelperProDetailImg.excelToTutorials(file.getInputStream());
	      detailsimagesReponsitory.saveAll(tutorials);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store excel data: " + e.getMessage());
	    }
	  }




}