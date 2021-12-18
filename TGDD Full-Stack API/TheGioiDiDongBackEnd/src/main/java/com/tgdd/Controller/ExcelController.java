package com.tgdd.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.tgdd.Payload.Response.ResponseMessage;
import com.tgdd.Service.ExcelService;
import com.tgdd.uitls.ExcelHelperCatePro;
import com.tgdd.uitls.ExcelHelperPro;
import com.tgdd.uitls.ExcelHelperProDetail;
import com.tgdd.uitls.ExcelHelperProDetailImg;


@CrossOrigin("http://localhost:3000")
@Controller
@RequestMapping("/api/excel")
public class ExcelController {

  @Autowired
  ExcelService fileService;

  

  @PostMapping("/uploadproDetailImg")
  public ResponseEntity<ResponseMessage> uploadFileProDetailImg(@RequestParam("file") MultipartFile file) {
    String message = "";

    if (ExcelHelperProDetailImg.hasExcelFormat(file)) {
      try {
        fileService.saveprodetailimg(file);

        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
      }
    }

    message = "Please upload an excel file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
  }
  
  
  
  
  @PostMapping("/uploadproDetail")
  public ResponseEntity<ResponseMessage> uploadFileProDetail(@RequestParam("file") MultipartFile file) {
    String message = "";

    if (ExcelHelperProDetail.hasExcelFormat(file)) {
      try {
        fileService.saveprodetail(file);

        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
      }
    }

    message = "Please upload an excel file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
  }
  
  
  @PostMapping("/uploadpro")
  public ResponseEntity<ResponseMessage> uploadFilePro(@RequestParam("file") MultipartFile file) {
    String message = "";

    if (ExcelHelperPro.hasExcelFormat(file)) {
      try {
        fileService.savepro(file);

        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
      }
    }

    message = "Please upload an excel file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
  }

  
  
  
  
  
  
  
  
  
  
  @PostMapping("/uploadcatepro")
  public ResponseEntity<ResponseMessage> uploadFileCatePro(@RequestParam("file") MultipartFile file) {
    String message = "";

    if (ExcelHelperCatePro.hasExcelFormat(file)) {
      try {
        fileService.savecatepro(file);

        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
      }
    }

    message = "Please upload an excel file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
  }

}