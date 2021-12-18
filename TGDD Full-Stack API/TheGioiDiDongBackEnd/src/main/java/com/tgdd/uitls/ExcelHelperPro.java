package com.tgdd.uitls;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.tgdd.Enity.Product;

@JsonFormat(pattern="yyyy-MM-dd")
public class ExcelHelperPro {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
 static String[] HEADERs = { "id", "anh","anh2", "anh3" , "chuongtrinh", "detailanh", "giaban", "giagoc", "id_categorys", "ngaytao", "noibat"
		  , "phantramgiam", "pkdikem", "quatang", "ten", "ytbrivew"};
 
  public static boolean hasExcelFormat(MultipartFile file) {

    if (!TYPE.equals(file.getContentType())) {
      return false;
    }

    return true;
  }

  public static List<Product> excelToTutorials(InputStream is) {
    try {
      Workbook workbook = WorkbookFactory.create(is);
      Sheet sheet = workbook.getSheetAt(0);
      
      Iterator<Row> rows = sheet.iterator();

      List<Product> tutorials = new ArrayList<Product>();

      int rowNumber = 0;
      while (rows.hasNext()) {
        Row currentRow = rows.next();

        // skip header
        if (rowNumber == 0) {
          rowNumber++;
          continue;
        }

        Iterator<Cell> cellsInRow = currentRow.iterator();

        Product tutorial = new Product();

        int cellIdx = 0;
        while (cellsInRow.hasNext()) {
          Cell currentCell = cellsInRow.next();

          switch (cellIdx) {
          case 0:
              tutorial.setId((long) currentCell.getNumericCellValue());
              break;
            case 1:
            	  tutorial.setAnh( currentCell.getStringCellValue());
                break;

            case 2:
              tutorial.setAnh2(currentCell.getStringCellValue());
              break;

            case 3:
              tutorial.setAnh3(currentCell.getStringCellValue());
              break;

            case 4:
                tutorial.setChuongtrinh(currentCell.getStringCellValue());
                break;
            case 5:
                tutorial.setDetailanh(currentCell.getStringCellValue());
                break;
            case 6:
                tutorial.setGiaban((long)currentCell.getNumericCellValue());
                break;
            case 7:
                tutorial.setGiagoc((long)currentCell.getNumericCellValue());
                break;
            case 8:
                tutorial.setId_categorys((long)currentCell.getNumericCellValue());
                break;
            case 9:       	
//                tutorial.setNgaytao((Date)currentCell.getDateCellValue());
                break;
            case 10:
                tutorial.setNoibat((boolean)currentCell.getBooleanCellValue());
                break;
            case 11:
                tutorial.setPhantramgiam((long)currentCell.getNumericCellValue());
                break;
            case 12:
                tutorial.setPkdikem((long)currentCell.getNumericCellValue());
                break;
            case 13:
                tutorial.setQuatang(currentCell.getStringCellValue());
                break;
            case 14:
                tutorial.setTen(currentCell.getStringCellValue());
                break;
            case 15:
                tutorial.setYtbrivew(currentCell.getStringCellValue());
                break;
                
          default:
            break;
          }

          cellIdx++;
        }

        tutorials.add(tutorial);
      }

      workbook.close();

      return tutorials;
    } catch (IOException e) {
      throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
    }
  }
}