import React, { Component } from 'react';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import { confirmAlert } from 'react-confirm-alert';
import AdminService from '../../services/AdminService';
class AddUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            address: '',
            email: '',
            password: '',
            phone: ' ',
            username: ' '
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({
                    address: user.address,
                    email: user.email,
                    password:user.password,
                    phone: user.phone,
                    username:user.username,
                });
            });
        }        
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            username: this.state.username};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            AdminService.CreateUser(user).then(res =>{
                this.props.history.push('/all-users-admin/page=1');
                confirmAlert({
                    message: 'Thêm thành công !!!.',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () => this.onClose
                      }
                    ]
                  });
            });
        }else{
            AdminService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/all-users-admin/page=1');
                confirmAlert({
                    message: 'Sửa thành công !!!.',
                    buttons: [
                      {
                        label: 'OK',
                        onClick: () => this.onClose
                      }
                    ]
                  });
            });
        }
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changePhoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    cancel() {
        this.props.history.push('/all-users-admin/page=1');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return  <center> 
                <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm tài khoản mới</button></center>
        }else{
            return <center> 
                 <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-info" ><i class="far fa-plus-square"></i> Sửa tài khoản </button></center>
        }
    }
   
    render() {
        return (
            <div className="sb-top4-fixed backgroundadmin">
                <HeaderAdmin />
                <div id="layoutSidetop4">
                    <MenuAdmin />
                    <div id="layoutSidetop4_content">
                        <div>
                        {
                                    this.getTitle()
                                }
                            <div style={{ backgroundColor: "white", marginLeft: "40px", marginTop: "20px", marginRight: "30px" }}>
                                <div className="card-body">
                                <form >
                                <div className="row">
                                <div className = "form-group col-md-4">
                                            <label>Tên tài khoản: </label>
                                            <input  name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group col-md-4">
                                            <label>Mật khẩu: </label>
                                            <input  name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group col-md-4">
                                            <label htmlFor="number">Phone</label>
                                            <input  name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div className = "form-group col-md-12">
                                            <label>Địa chỉ: </label>
                                            <input  name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                         <center>
                                        <div className="form-group">
                                            <button
                                                style={{ border: "white" }}>

                                                <div style={{ display: "flex" }}
                                                >
                                                    <div
                                                        style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px" }}
                                                        onClick={this.saveUser}
                                                    >
                                                        <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                                                    </div>
                                                    <div
                                                        style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                                                        onClick={this.cancel.bind(this)}
                                                    >
                                                        <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="fas fa-window-close"></i> Hủy</div>
                                                    </div>
                                                </div>

                                            </button>
                                        </div>
</center>                                    
                                      </div> 
                                     
                                </form>
                                </div>
                            </div>
                        </div>
                        <FooterAdmin />
                    </div>
                </div>
            </div>
        )
    }
}



export default AddUsers;