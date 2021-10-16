import React, { Component } from 'react';
import FooterAdmin from './../share/FooterAdmin';
import MenuAdmin from './../share/MenuAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import AdminService from '../../services/AdminService';
import { confirmAlert } from 'react-confirm-alert';
import Service from '../../services/Service';
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Bắt buộc nhập !!!
            </div>
        );
    }
};
var anh = [];
var anh2 = [];
var anh3 = [];
class AddTintuc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            ten: '',
            chitiet: '',
            mieuta: '',
            anh: '',
            anh2: '',
            anh3: '',
            tinchinh: 'false',
            tingame: 'false',
            ngaytao: '',
            tin_idsp: '',
            primg: [],
            mau: '0',
            selectedFile: null
        }
        this.MauValueChange = this.MauValueChange.bind(this);
        this.changeTenHandler = this.changeTenHandler.bind(this);
        this.changeChiTietHandler = this.changeChiTietHandler.bind(this);
        this.changMieuTaHandler = this.changMieuTaHandler.bind(this);
        this.changeTinChinhHandler = this.changeTinChinhHandler.bind(this);
        this.changeTinGameHandler = this.changeTinGameHandler.bind(this);
        this.changeTinIdspHandler = this.changeTinIdspHandler.bind(this);
        this.changeNgayTaohHandler = this.changeNgayTaohHandler.bind(this);
        this.addProductImage = this.addProductImage.bind(this);
        this.saveTintuc = this.saveTintuc.bind(this);
    }
    componentDidMount(){
        Service.getAllSP(this.state.id).then(res => {
            this.setState({ primg: res.data });
          });
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getTintucById(this.state.id).then( (res) =>{
                let tintuc = res.data;
                this.setState({
            ten: tintuc.ten,
            chitiet:tintuc.chitiet,
            mieuta: tintuc.mieuta,
            anh: tintuc.anh,
            anh2: tintuc.anh2,
            anh3: tintuc.anh3,
            tinchinh: tintuc.tinchinh,
            tingame: tintuc.tingame,
            ngaytao: tintuc.ngaytao,
            tin_idsp:tintuc.tin_idsp,
                });
            });
        }        
    }
    saveTintuc = (e) => {
        e.preventDefault();
        let tintuc = {
            ten: this.state.ten,
            chitiet: this.state.chitiet,
            mieuta: this.state.mieuta,
            anh: this.state.anh,
            anh2: this.state.anh2,
            anh3: this.state.anh3,
            tinchinh: this.state.tinchinh,
            tingame: this.state.tingame,
            ngaytao: this.state.ngaytao,
            tin_idsp: this.state.tin_idsp};
        console.log('tintuc => ' + JSON.stringify(tintuc));

        // step 5
        if(this.state.id === '_add'){
            AdminService.CreateTintuc(tintuc).then(res =>{
                this.addProductImage(anh);
                this.props.history.push('/all-tintuc-admin/page=1');
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
            AdminService.updateTintuc(tintuc, this.state.id).then( res => {
                this.addProductImage(anh);
                this.props.history.push('/all-tintuc-admin/page=1');
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

    MauValueChange(e) {
        const value = e.target.value;
        this.setState({ mau: value });
      }
    changeTinIdspHandler = (event) => {
        this.setState({ tin_idsp: event.target.value });
    }
    changeNgayTaohHandler = (event) => {
        this.setState({ ngaytao: event.target.value });
    }



    addProductImage = async (productId) => {
        await AdminService.addImage(productId);
    };
    changeAnhHandler = (e) => {
        anh = [];
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        this.setState({ anh: file.name });
        anh = imageData;
        console.log("image_new=>" + anh);

    }
    changeAnh2Handler = (e) => {
        anh2 = [];
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        this.setState({ anh2: file.name });
        anh2 = imageData;

    }
    changeAnh3Handler = (e) => {
        anh3 = [];
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        this.setState({ anh3: file.name });
        anh3 = imageData;

    }
    changeTinChinhHandler = (event) => {
        this.setState({ tinchinh: event.target.value });
    }
    changeTinGameHandler = (event) => {
        this.setState({ tingame: event.target.value });
    }
 
    changeTenHandler = (event, editor) => {
        const data = editor.getData();
        this.setState({ ten: data });
        console.log("STATE", { data });
    };
   
    changeChiTietHandler = (event, editor) => {
        const data = editor.getData();
        this.setState({ chitiet: data });
        console.log("STATE", { data });
    };
    changMieuTaHandler = (event, editor) => {
        const data = editor.getData();
        this.setState({ mieuta: data });
        console.log("STATE", { data });
    };
  
    cancel() {
        this.props.history.push('/all-tintuc-admin/page=1');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return  <center> 
                <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm tin tức mới</button></center>
        }else{
            return <center> 
                 <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-info" ><i class="far fa-plus-square"></i> Sửa tin tức </button></center>
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
                            <form>
                                   
                            <div className="form-group">
                                        <label htmlFor="username">Tiêu đề: </label>
                                        <CKEditor
                                                editor={ClassicEditor}
                                                onInit={(editor) => {
                                                    //// Here the editor is ready to be used
                                                }}
                                                data={this.state.ten}
                                                onChange={this.changeTenHandler}
                                                config={{
                                                    // plugins: [ Essentials ],
                                                    ckfinder: {
                                                        // The URL that the images are uploaded to.
                                                        uploadUrl: "/upload",

                                                        // Enable the XMLHttpRequest.withCredentials property.
                                                        withCredentials: true,

                                                        // Headers sent along with the XMLHttpRequest to the upload server.
                                                        headers: {
                                                            "X-CSRF-TOKEN": "CSFR-Token",
                                                            Authorization: "Bearer <JSON Web Token>",
                                                        },
                                                    },
                                                }}
                                            />
                                     
                                    </div>


                                    <div className="row">
                            
                               <div className="form-group col-md-4">
                                            <label> Hình ảnh chính: </label>
                                            <input
                                                name="anh"
                                                type="file"
                                                className="form-control"
                                               
                                                onChange={this.changeAnhHandler}
                                            />
                            <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/tintuc/${this.state.anh}`} alt="" />
                            </div>
                                      

                                  






                                    <div className = "form-group col-md-4">
                                        <label htmlFor="username">Ảnh minh họa 1</label>
                                        <input
                                                name="anh2"
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                            
                                                onChange={this.changeAnh2Handler}
                                            />
                            <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/tintuc/${this.state.anh2}`} alt="" />
                            </div>
                                    <div className = "form-group col-md-4">
                                        <label htmlFor="username">Ảnh minh họa 2</label>
                                        <input
                                                name="anh3"
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                            
                                                onChange={this.changeAnh3Handler}
                                            />
                            <img style={{ width: "120px" ,marginLeft:"50px" }} src={`/images/tintuc/${this.state.anh3}`} alt="" />
                            </div>
                                   </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="username">Miêu Tả: </label>
                                        <CKEditor
                                                editor={ClassicEditor}
                                                onInit={(editor) => {
                                                    //// Here the editor is ready to be used
                                                }}
                                                data={this.state.mieuta}
                                                onChange={this.changMieuTaHandler}
                                                config={{
                                                    // plugins: [ Essentials ],
                                                    ckfinder: {
                                                        // The URL that the images are uploaded to.
                                                        uploadUrl: "/upload",

                                                        // Enable the XMLHttpRequest.withCredentials property.
                                                        withCredentials: true,

                                                        // Headers sent along with the XMLHttpRequest to the upload server.
                                                        headers: {
                                                            "X-CSRF-TOKEN": "CSFR-Token",
                                                            Authorization: "Bearer <JSON Web Token>",
                                                        },
                                                    },
                                                }}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Chi Tiết</label>
                                        <CKEditor
                                                editor={ClassicEditor}
                                                onInit={(editor) => {
                                                    //// Here the editor is ready to be used
                                                }}
                                                data={this.state.chitiet}
                                                onChange={this.changeChiTietHandler}
                                                config={{
                                                    // plugins: [ Essentials ],
                                                    ckfinder: {
                                                        // The URL that the images are uploaded to.
                                                        uploadUrl: "/upload",

                                                        // Enable the XMLHttpRequest.withCredentials property.
                                                        withCredentials: true,

                                                        // Headers sent along with the XMLHttpRequest to the upload server.
                                                        headers: {
                                                            "X-CSRF-TOKEN": "CSFR-Token",
                                                            Authorization: "Bearer <JSON Web Token>",
                                                        },
                                                    },
                                                }}
                                            />
                                    </div>
                                 

                                    <div className="row">
                                <div className = "form-group col-md-2">
                                        <label htmlFor="username">Tin Chính:</label>
                                        <select className="form-select"
                                            value={this.state.tinchinh}
                                            onChange={this.changeTinChinhHandler}
                                        >
                                            <option value="true">Đúng</option>
                                            <option value="false">Sai</option>
                                          
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="username">Tin Game:</label>
                                        <select className="form-select"
                                            value={this.state.tingame}
                                            onChange={this.changeTinGameHandler}
                                        >
                                            <option value="true">Đúng</option>
                                            <option value="false">Sai</option>
                                          
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="username">Ngày đăng:</label>
                                     
                                         <input   type="date" name="ngaytao" className="form-control" 
                                                value={this.state.ngaytao} onChange={this.changeNgayTaohHandler}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="username">Tin của sản phẩm:</label>
                                        <select  class="form-control" onChange={this.MauValueChange}>
                          <option value="0" selected>Mặc định</option>
                          {this.state.primg.map((primg) => (
                            <option value={primg.id}>{primg.id}
                            </option>
                          ))}

                        </select>
                                    </div>
                                 </div>
                                
                                 <center>
                                    <div className="form-group">
                                        <button
                                            style={{ border: "white" }}                                       
                                        >

                                            <div style={{ display: "flex" }}
                                            >
                                                <div
                                                    style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px" }}
                                                    onClick={this.saveTintuc}
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
                                  </form>

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

export default AddTintuc;