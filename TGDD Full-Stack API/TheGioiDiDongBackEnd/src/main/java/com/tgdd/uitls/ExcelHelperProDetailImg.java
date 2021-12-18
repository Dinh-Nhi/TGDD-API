package com.tgdd.uitls;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.web.multipart.MultipartFile;

import com.tgdd.Enity.Detailsimages;



public class ExcelHelperProDetailImg {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
static String[] HEADERs = { "id", "anh","id_products","mau"};
  
  public static boolean hasExcelFormat(MultipartFile file) {

    if (!TYPE.equals(file.getContentType())) {
      return false;
    }

    return true;
  }

  public static List<Detailsimages> excelToTutorials(InputStream is) {
    try {
      Workbook workbook = WorkbookFactory.create(is);
      Sheet sheet = workbook.getSheetAt(0);
      
      Iterator<Row> rows = sheet.iterator();

      List<Detailsimages> tutorials = new ArrayList<Detailsimages>();

      int rowNumber = 0;
      while (rows.hasNext()) {
        Row currentRow = rows.next();

        // skip header
        if (rowNumber == 0) {
          rowNumber++;
          continue;
        }

        Iterator<Cell> cellsInRow = currentRow.iterator();

        Detailsimages tutorial = new Detailsimages();

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
              tutorial.setId_products((long)currentCell.getNumericCellValue());
              break;

            case 3:
                tutorial.setMau(currentCell.getStringCellValue());
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