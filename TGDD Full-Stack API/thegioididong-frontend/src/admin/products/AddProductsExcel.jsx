import React, { Component } from 'react';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
var file ;
class AddProductsExcel extends Component {

    state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChangeImg = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    saveProductImg = (e) => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("http://localhost:8080/api/excel/uploadproDetailImg", formData);
      this.props.history.push('/all-product-admin/page=1');
  confirmAlert({
      message: 'Thêm thành công !!!.',
      buttons: [
        {
          label: 'OK',
          onClick: () => this.onClose
        }
      ]
    });
    };
    
  // On file select (from the pop up)
  onFileChangeDetail = event => {
    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };
  
  // On file upload (click the upload button)
  saveProductDetail = (e) => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8080/api/excel/uploadproDetail", formData);
    this.props.history.push('/all-product-admin/page=1');
  confirmAlert({
      message: 'Thêm thành công !!!.',
      buttons: [
        {
          label: 'OK',
          onClick: () => this.onClose
        }
      ]
    });
  };
  
 // On file select (from the pop up)
 onFileChangeCate = event => {
    
  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};

// On file upload (click the upload button)
saveProductCate = (e) => {

  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
    "file",
    this.state.selectedFile,
    this.state.selectedFile.name
  );

  // Details of the uploaded file
  console.log(this.state.selectedFile);

  // Request made to the backend api
  // Send formData object
  axios.post("http://localhost:8080/api/excel/uploadcatepro", formData);
  this.props.history.push('/all-product-admin/page=1');
  confirmAlert({
      message: 'Thêm thành công !!!.',
      buttons: [
        {
          label: 'OK',
          onClick: () => this.onClose
        }
      ]
    });
};
 // On file select (from the pop up)
 onFileChangePro = event => {
    
  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};

// On file upload (click the upload button)
saveProductPro = (e) => {
  const formData = new FormData();
  formData.append(
    "file",
    this.state.selectedFile,
    this.state.selectedFile.name
  );
  console.log(this.state.selectedFile);
  axios.post("http://localhost:8080/api/excel/uploadpro", formData);
};


  cancel() {
    this.props.history.push("/all-product-admin/page=" + localStorage.getItem("pagePresent"));
  }
    render() {
        return (
            <div className="sb-top4-fixed backgroundadmin">
            <HeaderAdmin />
            <div id="layoutSidetop4">
              <MenuAdmin />
              <div id="layoutSidetop4_content">
                <div >
                <center> 
                <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm sản phẩm mới bằng Excel</button></center>
        
                  <div style={{ backgroundColor: "white", marginLeft: "40px", marginTop: "20px", marginRight: "30px" }}>
                    <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group  col-md-3">
                              <label htmlFor="username">File Sản Phẩm</label>
                              <input
                              name="name" 
                                type="file"
                                onChange={this.onFileChangePro}
                                className="form-control"
                              /> 
                                 <center>
                               <button
                                              style={{ border: "white" }}                                       
                                          >
  
                                              <div style={{ display: "flex" }}
                                              >
                                                
                                                  <div
                                                      style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                     onClick={this.saveProductPro}>
                                                    
                                                      <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                                                  </div>
                                              </div>
  
                                          </button>
                                                  </center>
                            </div>
                            <div className="form-group  col-md-3">
                              <label htmlFor="username">File Category Kết Products</label>
                              <input
                              name="name" 
                                type="file"
                                onChange={this.onFileChangeCate}
                                className="form-control"
                              /> 
                                 <center>
                               <button
                                              style={{ border: "white" }}                                       
                                          >
  
                                              <div style={{ display: "flex" }}
                                              >
                                                
                                                  <div
                                                      style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                     onClick={this.saveProductCate}>
                                                    
                                                      <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                                                  </div>
                                              </div>
  
                                          </button>
                                                  </center>
                            </div>
                          
                     













                         <div className="form-group  col-md-3">
                              <label htmlFor="username">File Thông Số Kỹ Thuật </label>
                              <input
                            name="name" 
                                type="file"
                                onChange={this.onFileChangeDetail}
                                className="form-control"
                              /> 
                                   <center>
                               <button
                                              style={{ border: "white" }}                                       
                                          >
  
                                              <div style={{ display: "flex" }}
                                              >
                                                
                                                  <div
                                                      style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                     onClick={this.saveProductDetail}>
                                                    
                                                      <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                                                  </div>
                                              </div>
  
                                          </button>
                                                  </center>
                            </div>
                            <div className="form-group  col-md-3">
                              <label htmlFor="username">File Loại Ảnh </label>
                              <input          
                                className="form-control"
                                type="file" 
                                name="name" 
                                onChange={this.onFileChangeImg}
                              /> 
                               <center>
                               <button
                                              style={{ border: "white" }}                                       
                                          >
  
                                              <div style={{ display: "flex" }}
                                              >
                                                
                                                  <div
                                                      style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                     onClick={this.saveProductImg}>
                                                    
                                                      <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                                                  </div>
                                              </div>
  
                                          </button>
                                                  </center>
                            </div>

  
                        </div>
                        </form>
    <center>
    <div className="form-group">
                                          <button
                                              style={{ border: "white" }}                                       
                                          >
  
                                              <div style={{ display: "flex" }}
                                              >
                                                
                                                  <div
                                                      style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                      onClick={this.cancel.bind(this)}
                                                  >
                                                      <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="fas fa-window-close"></i>Quay Lại</div>
                                                  </div>
                                              </div>
  
                                          </button>
                                      </div>
    </center>
                     
                  
                    </div>
                  </div>
                </div>
    
    
                <FooterAdmin />
              </div>
            </div>
          </div>
      
            
        );
    }
}

export default AddProductsExcel;