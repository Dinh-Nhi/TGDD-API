import React, { Component } from 'react';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import AdminService from '../../services/AdminService';
import { confirmAlert } from 'react-confirm-alert';
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Bắt buộc nhập !!!
            </div>
        );
    }
};

class AddCategorys extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            ten: '',
            iclass: '',
            title: '',
            icon: ' ',
            status: 'true'
        }
        this.changeTenHandler = this.changeTenHandler.bind(this);
        this.changeIclassHandler = this.changeIclassHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeIconHandler = this.changeIconHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
    }
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getCategoryById(this.state.id).then( (res) =>{
                let category = res.data;
                this.setState({
                    ten: category.ten,
                    iclass: category.iclass,
                    title:category.title,
                    icon: category.icon,
                    status:category.status,
                });
            });
        }        
    }
    saveCategory = (e) => {
        e.preventDefault();
        let category = {
            ten: this.state.ten,
                    iclass: this.state.iclass,
                    title: this.state.title,
                    icon: this.state.icon,
                    status: this.state.status};
        console.log('category => ' + JSON.stringify(category));

        // step 5
        if(this.state.id === '_add'){
            AdminService.CreateCategory(category).then(res =>{
                this.props.history.push('/all-categorys-admin/page=1');
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
            AdminService.updateCategory(category, this.state.id).then( res => {
                this.props.history.push('/all-categorys-admin/page=1');
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

    changeTenHandler = (event) => {
        this.setState({ ten: event.target.value });
    }
    changeIclassHandler = (event) => {
        this.setState({ iclass: event.target.value });
    }
    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changeIconHandler = (event) => {
        this.setState({ icon: event.target.value });
    }
    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    cancel() {
        this.props.history.push('/all-categorys-admin/page=1');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return  <center> 
                <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm loại sản phẩm mới</button></center>
        }else{
            return <center> 
                 <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-info" ><i class="far fa-plus-square"></i> Sửa loại sản phẩm</button></center>
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
                                            <label>Tên loại sản phẩm: </label>
                                            <input  name="ten" className="form-control" 
                                                value={this.state.ten} onChange={this.changeTenHandler}/>
                                        </div>
                                        <div className = "form-group col-md-4">
                                            <label>Icon loại sản phẩm: </label>
                                            <input  name="icon" className="form-control" 
                                                value={this.state.icon} onChange={this.changeIconHandler}/>
                                        </div>
                                        <div className = "form-group col-md-4">
                                            <label htmlFor="password">Trạng thái</label>
                                            <select class="form-select" aria-label="Default select example" style={{ width: "101px", marginTop: "5px", marginLeft: "8px", fontSize: "15px" }} onChange={this.changeStatusHandler}>
                                            <option value="Tắt" selected>Tắt</option>
                                                <option value="Bật" selected>Bật</option>
                                             

                                            </select>
                                        </div>
                                        <div className = "form-group col-md-10">
                                            <label>Miêu tả loại sản phẩm: </label>
                                            <input  name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                      
                                     
                                       
                         
                         <center>
                                        <div className="form-group">
                                            <button
                                                style={{ border: "white" }}>

                                                <div style={{ display: "flex" }}
                                                >
                                                    <div
                                                        style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px" }}
                                                        onClick={this.saveCategory}
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


export default AddCategorys;