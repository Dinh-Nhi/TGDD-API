import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import authService from '../../pages/user/auth.service';
import AdminService from '../../services/AdminService';
import axios from "axios";
import ReactExport from "react-data-export";
import { confirmAlert } from 'react-confirm-alert';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
var today = new Date(),
ngaytao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
class AdminProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          currentPage: this.props.match.params.page,
          size: 10,
          disabled1: "",
          disabled2: "",
          showAdminBoard: false,
          currentUser: undefined,
        };      
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
      }
      changcurrentPage(currentPage) {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition)
          if (currentPage === 1) this.setState({ disabled1: "disabled" });
          else this.setState({ disabled1: " " });
        if (currentPage === condition) this.setState({ disabled2: "disabled" });
        else this.setState({ disabled2: " " });
      }
      previousPage() {
        if (this.state.currentPage > 1)   this.props.history.push("/all-product-admin/page="+(this.state.currentPage -= 1));
      
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      nextPage() {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition)   this.props.history.push("/all-product-admin/page="+(this.state.currentPage += 1));
      
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      // findAll(currentPage) {
      //   currentPage -=1;
      //   AdminService.getAllAdminProducts(currentPage, this.state.size)
      
      //     .then((response) => response.data)
      //     .then((data) => {
      //       this.setState({
      //         content: data.content,
      //         totalPages: data.totalPages,
      //         totalElements: data.totalElements,
      //         currentPage: data.number + 1,
      //       });
      //     });
      // }
      findAll(currentPage) {
        currentPage -= 1;
        axios.get("http://localhost:8080/admin/all-product?page=" + currentPage)
        .then((response) => response.data)
        .then((data) => {
       this.setState({
            content: data.content,
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            currentPage: data.number + 1,
        });
        });
    }
    
        componentDidMount() {
          const user = authService.getCurrentUser();
      
          if (user) {
            this.setState({
              currentUser: user,
              showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
          }
          if (user !== null) {
        
            if (user.roles.includes("ROLE_USER") === true) {
              this.props.history.push("/");
            }
         
          }else{
            this.props.history.push("/");
          }
        
        this.changcurrentPage(this.state.currentPage);
        this.findAll(this.state.currentPage);
      
      }
    
      editProduct(id){
        this.props.history.push('/admin-add-products/'+id);
      }
      deleteProduct(id) {
        AdminService.deleteProduct(id).then(res => {
          this.setState({ content: this.state.content.filter(content => content.id !== id) });
          confirmAlert({
            message: 'Xóa thành công !!!.',
            buttons: [
              {
                label: 'OK',
                onClick: () => this.onClose
              }
            ]
          });
        });
      }
  
      render() {
        const DataSetSp = [
          {
              columns:[
                  {title:"id", width: {wpx: 100}},  
                  {title:"anh", width: {wpx: 100}},  
                  {title:"anh2", width: {wpx: 100}},   
                  {title:"anh3", width: {wpx: 100}},    
                  {title:"chuongtrinh", width: {wpx: 100}},
                  {title:"detailanh", width: {wpx: 100}},
                  {title:"giaban", width: {wpx: 100}},
                  {title:"giagoc", width: {wpx: 100}},
                  {title:"id_categorys", width: {wpx: 100}},   
                  {title:"ngaytao", width: {wpx: 100}},
                  {title:"noibat", width: {wpx: 100}},
                  {title:"phantramgiam", width: {wpx: 100}},
                  {title:"pkdikem", width: {wpx: 100}},
                  {title:"quatang", width: {wpx: 100}},
                  {title:"ten", width: {wpx: 240}},
                  {title:"ytbrivew", width: {wpx: 100}},
              ],
              data:
              (this.state.content.map((pro) =>[
                  {value:pro.id},
                 
                  {value:pro.anh},
                  {value:pro.anh2},
                  {value:pro.anh3},
                  {value:pro.chuongtrinh},
                  {value:pro.detailanh},
                  {value:pro.giaban},
                  {value:pro.giagoc},                        
                 {value:pro.id_categorys},
                 {value:pro.ngaytao},
                  {value:pro.noibat},
                   {value:pro.phantramgiam},
                   {value:pro.pkdikem},
                  {value:pro.quatang},
                  {value:pro.ten}, 
                  {value:pro.ytbrivew},
               
              ]))
          }
      ]
        return (
            <div className="sb-top4-fixed backgroundadmin">
        <HeaderAdmin />
        <div id="layoutSidetop4">
          <MenuAdmin />
          <div id="layoutSidetop4_content">
            <div>
          <a href="/admin-add-products/_add">      <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" onClick={this.addProduct}><i class="far fa-plus-square"></i> Thêm sản phẩm mới</button></a>
          <a> 
          <ExcelFile
                        filename = "Danh sách sản phẩm"
                        element = {<button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }}  type="button" className="btn btn-success">Xuất Ra Excel</button>}
                        >
<ExcelSheet dataSet={DataSetSp} name="Danh sách sản phẩm"/>


                        </ExcelFile>
         </a>
         <a href="/admin-add-productsexcel">      <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm bằng Excel</button></a>
        
        
         
         
           </div>
            <table class="table table-bordered" style={{ marginLeft: "3px", textAlign: "center" }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                <th></th>
                  <th>ID</th>
                  <th >ẢNH</th>
                
                  <th >TÊN</th>
                  <th> <i style={{color:"black"}} class="fas fa-eye"></i></th>
                  <th >GIÁ</th>
                  <th >GIẢM</th>
                  <th >GIÁ BÁN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.content.map((allproduct) => (
                  <tr>
                        <th></th>
                    <th scope="row">{allproduct.id}</th>
                    <td><img style={{ width: "80px", height: "100px" }} src={`/images/products/${allproduct.anh}`} alt="" /></td>
                 
                    <td style={{ textAlign: "center" }}>{allproduct.ten}</td>
                    <td >
                                        <br/>
                                        <br/>
                                        <a
                                            type="button"
                                            className="btn btn-primary"
                                            style={{ fontSize: "12px",color:"white" }}
                                            href={
                                                "/products/" +
                                                allproduct.id
                                              }
                                        >
                                            XEM
                                        </a>
                                        </td>
                    <td><NumberFormat value={allproduct.giaban} displayType={'text'} thousandSeparator={true} />₫</td>
                    <td><NumberFormat value={allproduct.phantramgiam} displayType={'text'} thousandSeparator={true} />%</td>
                    <td><NumberFormat value={(allproduct.giaban- (allproduct.giaban * allproduct.phantramgiam) / 100)} displayType={'text'} thousandSeparator={true} />₫</td>
                  
                    <td>
                   
                      
                        <div  onClick={() => this.editProduct(allproduct.id)}><i class="fas fa-edit iconadmin"></i></div>
                        <br/>
                        <div onClick={() => this.deleteProduct(allproduct.id)}><i  class="fas fa-trash-alt iconadmin"></i> </div>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <center>
            <div class="form-row">
           <div  className={"page-item form-group " + this.state.disabled1} >
                <button
                  className="page-link"
                  href="#"
                  onClick={this.previousPage}
                >
                  Previous
                </button></div>
           <div  className="page-item form-group ">
              <button
                  className="page-link"
                  value={this.state.currentPage}
                  onChange={this.changcurrentPage}
                >
                  {this.state.currentPage}
                </button></div>
           <div className={"page-item form-group  " + this.state.disabled2}>
              <button
                className="page-link"
                href="#"
                onClick={this.nextPage}
              >
                Next
              </button></div>
           </div>
           </center>
           
           
           
          
            <FooterAdmin />
          </div>
        </div>
      </div>
        );
    }
}

export default AdminProducts;