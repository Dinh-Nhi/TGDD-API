import React, { Component } from 'react';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import AdminService from '../../services/AdminService';
import { confirmAlert } from 'react-confirm-alert';
class UsersAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            currentPage: 1,
            size: 10,
            disabled1: "",
            disabled2: "",
            list_product: [],
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
        if (this.state.currentPage > 1) this.state.currentPage -= 1;
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
    }
    nextPage() {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition) this.state.currentPage += 1;
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
    }
    findAll(currentPage) {
        currentPage -= 1;
        AdminService.getAdminUsers(currentPage, this.state.size)
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
        this.changcurrentPage(this.state.currentPage);
        this.findAll(this.state.currentPage);
        AdminService.ListOrderDetail(this.state.id).then((res) => {
            this.setState({ list_product: res.data });
            console.log(this.state.list_product);
            const result = this.state.list_product.reduce(
              (total, currentValue) =>
                (total = total + currentValue.price * currentValue.quantity),
              0
            );
            console.log(result);
            this.setState({ result: result });
          });
    }
    submit = (id) =>{
        confirmAlert({
          message: 'Hóa đơn này đã giao thành công !!!.',
          buttons: [
            {
              label: 'OK',
              // onClick: () => this.deleteOrder(id),
              onClick: () => this.onClose
            },
            {
              label: 'Hủy',
              onClick: () => this.onClose
            }
          ]
        });
        
      };
      editUser(id){
        this.props.history.push('/admin-add-users/'+id);
      }
      deleteUser(id) {
        AdminService.deleteUser(id).then(res => {
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
                    <a href="/admin-add-users/_add"> <button style={{ marginTop: "20px",  marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm tài khoản mới</button></a>
            <table class="table table-bordered" style={{ marginLeft: "3px", textAlign: "center" }}>
                <thead>
                                <tr style={{ textAlign: "center" }}>                                 
                                    <th ></th>                                
                                    <th >TÊN</th>
                                    <th >SĐT</th>
                                    <th >ĐỊA CHỈ</th>
                                    <th >EMIL</th>  
                                  
                                     <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.content.map((allusers) => (
                                    <tr>
                                        <td></td>                                    
                                        <td>{allusers.username}</td>
                                        <td>{allusers.phone}</td>
                                        <td>{allusers.address}</td>
                                        <td>{allusers.email}</td>
                                      
                                       
                                        <td>
                   
                  
                   <div  onClick={() => this.editUser(allusers.id)}><i class="fas fa-edit iconadmin"></i></div>
                   <br/>
                   <div onClick={() => this.deleteUser(allusers.id)} ><i  class="fas fa-trash-alt iconadmin"></i> </div>
               
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

export default UsersAdmin;