import React, { Component } from 'react';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import authService from '../../pages/user/auth.service';
import AdminService from '../../services/AdminService';
import { confirmAlert } from 'react-confirm-alert';
class AdminCategorys extends Component {
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
        if (this.state.currentPage > 1)   this.props.history.push("/all-categorys-admin/page="+(this.state.currentPage -= 1));
      
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      nextPage() {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition)   this.props.history.push("/all-categorys-admin/page="+(this.state.currentPage += 1));
      
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      findAll(currentPage) {
        currentPage -=1;
        AdminService.getAllAdminCategorys(currentPage, this.state.size)
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
    
      editCategory(id){
        this.props.history.push('/admin-add-categorys/'+id);
      }
      deleteCategory(id) {
        AdminService.deleteCategory(id).then(res => {
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
        return (
            <div className="sb-top4-fixed backgroundadmin">
        <HeaderAdmin />
        <div id="layoutSidetop4">
          <MenuAdmin />
          <div id="layoutSidetop4_content">
           <a href="/admin-add-categorys/_add"> <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm loại mới</button></a>
            <table class="table table-bordered" style={{ marginLeft: "3px", textAlign: "center" }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                <th></th>              
                  <th >ICON</th>                     
                  <th >TÊN</th>         
                  <th >CHI TIẾT</th>
                  <th >TRẠNG THÁI</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.content.map((allcate) => (
                  <tr>
                     <th></th> 
                                
                    <td  style={{ textAlign: "center" }}> <i className={allcate.icon} /></td>
                    <td style={{ textAlign: "center" }}>{allcate.ten}</td>
                    <td style={{ textAlign: "center" }}>{allcate.title}</td>
                    <td style={{ textAlign: "center" }}>{allcate.status}</td>
                    <td>
                   
                     
                        <div onClick={() => this.editCategory(allcate.id)}><i class="fas fa-edit iconadmin"></i></div>
                        <br/>
                        <div onClick={() => this.deleteCategory(allcate.id)}><i  class="fas fa-trash-alt iconadmin"></i> </div>
                    
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

export default AdminCategorys;