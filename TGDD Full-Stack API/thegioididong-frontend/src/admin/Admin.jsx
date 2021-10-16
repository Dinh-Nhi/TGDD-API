import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import MenuAdmin from './share/MenuAdmin';
import FooterAdmin from './share/FooterAdmin';
class Admin extends Component {
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
      findAll(currentPage) {
        currentPage -=1;
        AdminService.getAllAdminTinTuc(currentPage, this.state.size)
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
      
          if (user.roles.includes("ROLE_ADMIN") === false) {
            authService.logout();
            this.props.history.push("/login-admin");
            
           
          }
       
        }else{
          this.props.history.push("/login-admin");
        }
        this.changcurrentPage(this.state.currentPage);
        this.findAll(this.state.currentPage);
      
      }
    
    
  
      render() {
        return (
            <div className="sb-top4-fixed backgroundadmin">
        <HeaderAdmin />
        <div id="layoutSidetop4">
          <MenuAdmin />
          <div id="layoutSidetop4_content">
            <button style={{ width: "198px", height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" onClick={this.addProduct}><i class="far fa-plus-square"></i> Thêm sản phẩm mới</button>
            <table class="table table-bordered" style={{ marginLeft: "3px", textAlign: "center" }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>ID</th>
                  <th >ẢNH</th>
                  <th >LOẠI</th>
                  <th >TÊN</th>
                
                  <th >GIÁ</th>
                  <th >GIẢM</th>
                  <th >GIÁ BÁN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.content.map((allproduct) => (
                  <tr>
                    <th scope="row">{allproduct.id}</th>
                    <td><img style={{ width: "80px", height: "100px" }} src={`/images/products/${allproduct.anh}`} alt="" /></td>
                    <td style={{ textAlign: "center" }}>{allproduct.category.ten}</td>
                    <td style={{ textAlign: "center" }}>{allproduct.ten}</td>
                
                    <td><NumberFormat value={allproduct.giaban} displayType={'text'} thousandSeparator={true} />₫</td>
                    <td><NumberFormat value={allproduct.phantramgiam} displayType={'text'} thousandSeparator={true} />%</td>
                    <td><NumberFormat value={(allproduct.giaban- (allproduct.giaban * allproduct.phantramgiam) / 100)} displayType={'text'} thousandSeparator={true} />₫</td>
                  
                    <td>
                   
                        <div><i class="fas fa-eye iconadmin"></i></div>
                        <br/>
                        <div><i class="fas fa-edit iconadmin"></i></div>
                        <br/>
                        <div ><i  class="fas fa-trash-alt iconadmin"></i> </div>
                    
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

export default Admin;