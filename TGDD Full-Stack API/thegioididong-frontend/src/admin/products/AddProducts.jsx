import React, { Component } from 'react';
import Service from '../../services/Service';
import AdminService from '../../services/AdminService';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
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
var anh = [];
var anh2 = [];
var anh3 = [];
var detailanh = [];
var seletedImage = [];
class AddProducts extends Component {
     constructor(props) {
      super(props);
      this.state = {
        // step 2
        id: this.props.match.params.id,
        id_categorys: "",
        anh: " ",
        ten: " ",
        giaban:  "",
        phantramgiam: " ",
        anh2: " ",
        detailanh: "",
        noibat: "false",
        ngaytao: "",
        anh3: "",
        chuongtrinh: "",
        quatang: "",
        pkdikem: "",
        ytbrivew: "",
        giagoc: "",
        categorys: [],
        products: [],
        primg: [],
        IdProductsImages: " ",
     
      };
      this.changeIdCateHandler = this.changeIdCateHandler.bind(this);
      this.changeAnhHandler = this.changeAnhHandler.bind(this);
      this.changeTenHandler = this.changeTenHandler.bind(this);
      this.changeGiaBanHandler = this.changeGiaBanHandler.bind(this);
      this.changePhanTramGiamHandler = this.changePhanTramGiamHandler.bind(this);
      this.changeAnh2Handler = this.changeAnh2Handler.bind(this);
      this.changeDetailanhHandler = this.changeDetailanhHandler.bind(this);
      this.changeNoiBatHandler = this.changeNoiBatHandler.bind(this);
      this.changeNgayTaoHandler = this.changeNgayTaoHandler.bind(this);
      this.changeAnh3Handler = this.changeAnh3Handler.bind(this);
      this.changeChuongTrinhlHandler = this.changeChuongTrinhlHandler.bind(this);
      this.changeQuaTangHandler = this.changeQuaTangHandler.bind(this);
      this.changePkdikemHandler = this.changePkdikemHandler.bind(this);
      this.changeYtbrivewHandler = this.changeYtbrivewHandler.bind(this);
      this.changeGiaGocHandler = this.changeGiaGocHandler.bind(this);
      this.addProductImage = this.addProductImage.bind(this);
      this.changeImageHandler = this.changeImageHandler.bind(this);
      this.saveProduct = this.saveProduct.bind(this);
  
    }
     // step 3
    componentDidMount() {
      Service.getCategorys().then((res) => {
        this.setState({ categorys: res.data });
      });
      Service.getAllSP().then((res) => {
        this.setState({ products: res.data });
      });
      Service.getProductsDetailImgById(this.state.id).then(res => {
        this.setState({ primg: res.data });
      });
   // step 4
        if(this.state.id === '_add'){
            return
        }else{
            Service.getProductsById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({
        id_categorys: product.id_categorys,
        ten: product.ten,
        anh: product.anh,
        anh2: product.anh2,
        anh3: product.anh3,
        giaban:product.giaban,
        phantramgiam:product.phantramgiam,
        detailanh: product.detailanh,
        noibat:product.noibat,
        ngaytao: product.ngaytao,
        chuongtrinh: product.chuongtrinh,
        quatang: product.quatang,
        pkdikem: product.pkdikem,
        ytbrivew: product.ytbrivew,
        giagoc : product.giagoc,
      
                });
            });
        }        
    }
       saveProduct = (e) => {
      e.preventDefault();
      let product = {
        id_categorys: this.state.id_categorys,
        ten: this.state.ten,
        anh: this.state.anh,
        anh2: this.state.anh2,
        anh3: this.state.anh3,
        giaban: this.state.giaban,
        phantramgiam: this.state.phantramgiam,
        detailanh: this.state.detailanh,
        noibat: this.state.noibat,
        ngaytao: this.state.ngaytao,
        chuongtrinh: this.state.chuongtrinh,
        quatang: this.state.quatang,
        pkdikem: this.state.pkdikem,
        ytbrivew: this.state.ytbrivew,
        giagoc: this.state.giagoc,};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
          AdminService.CreateProduct(product).then(
            async (res) => {
              for (const f of this.state.imageDatas) {
                this.addProductImage(f);
              }
              this.addProductImage(anh);
              this.addProductImage(anh2);
              this.addProductImage(anh3);
              this.addProductImage(detailanh);
              let ProductNew = res.data;

              this.setState({ IdProductsImages: ProductNew.id });
              console.log("id =>" + this.state.IdProductsImages);   
              await AdminService.updateimages(seletedImage, this.state.IdProductsImages).then((res) => {
              });
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
            });
        }else{
            AdminService.updateproducts(product, this.state.id).then( res => {
              this.addProductImage(anh);
              this.addProductImage(anh2);
              this.addProductImage(anh3);
              this.addProductImage(detailanh);
                this.props.history.push('/all-product-admin/page=1');
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
// ảnh liên quan
    changeImageHandler = (event) => {

      let files = event.target.files;
  
      let imageArrays = [];
      seletedImage = [];
      for (const f of files) {
        const imageData = new FormData();
        imageData.append('imageFile', f);
        imageArrays.push(imageData);
        seletedImage.push({
          image: f.name
        });
      }
      this.setState({ imageDatas: imageArrays });
      console.log("images => " + JSON.stringify(seletedImage));
    };




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
  changeDetailanhHandler = (e) => {
    detailanh = [];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({ detailanh: file.name });
    detailanh = imageData;

}





 changeIdCateHandler = (event) => {
        this.setState({ id_categorys: event.target.value });
      };
  changeTenHandler = (event) => {
      this.setState({ ten: event.target.value });
    };
  changeGiaBanHandler = (event) => {
        this.setState({ giaban: event.target.value });
      };
      changePhanTramGiamHandler = (event) => {
        this.setState({ phantramgiam: event.target.value });
      };
  
  changeNoiBatHandler = (event) => {
        this.setState({ noibat: event.target.value });
      };
  changeNgayTaoHandler = (event) => {
        this.setState({ ngaytao: event.target.value });
      };
    
    changeChuongTrinhlHandler = (event) => {
        this.setState({ chuongtrinh: event.target.value });
      };
      changeQuaTangHandler = (event) => {
        this.setState({ quatang: event.target.value });
      };
      changePkdikemHandler = (event) => {
        this.setState({ pkdikem: event.target.value });
      };
      changeYtbrivewHandler = (event) => {
        this.setState({ ytbrivew: event.target.value });
      };
        changeGiaGocHandler = (event) => {
        this.setState({ giagoc: event.target.value });
      };
   
      cancel() {
      this.props.history.push("/all-product-admin/page=" + localStorage.getItem("pagePresent"));
    }
       getTitle(){
        if(this.state.id === '_add'){
            return  <center> 
                <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-success" ><i class="far fa-plus-square"></i> Thêm sản phẩm mới</button></center>
        }else{
            return <center> 
                 <button style={{ height: "38px", marginTop: "40px", marginBottom: "20px", marginLeft: "3px" }} type="text" className="btn btn-info" ><i class="far fa-plus-square"></i> Sửa sản phẩm </button></center>
        }
    }
   render() {
      return (
        <div className="sb-top4-fixed backgroundadmin">
          <HeaderAdmin />
          <div id="layoutSidetop4">
            <MenuAdmin />
            <div id="layoutSidetop4_content">
              <div >
          {
                                    this.getTitle()
             }
                <div style={{ backgroundColor: "white", marginLeft: "40px", marginTop: "20px", marginRight: "30px" }}>
                  <div className="card-body">
                  <form>
                      <div className="row">
                         
                         <div className="form-group col-md-5">
                          <label htmlFor="username">Tên sản phẩm: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.ten} onChange={this.changeTenHandler}/>
                        </div>

                          <div className="form-group col-md-2">
                            <label htmlFor="password">Giá gốc</label>                         
                             <input   min="10000"  type="number" name="giaban" className="form-control" 
                            value={this.state.giagoc} onChange={this.changeGiaGocHandler}/>
                          </div>  
                        <div className="form-group col-md-2">
                            <label htmlFor="password">Giá bán</label>                         
                             <input   min="10000"  type="number" name="giaban" className="form-control" 
                            value={this.state.giaban} onChange={this.changeGiaBanHandler}/>
                          </div>   
                                           
                          <div className="form-group col-md-3">
                             <label htmlFor="password">Giảm:(%) </label>
                            <input   min="0"  type="number" name="phantramgiam" className="form-control" 
                            value={this.state.phantramgiam} onChange={this.changePhanTramGiamHandler}/>
                          </div>
                        <div className="form-group  col-md-3">
                          <label htmlFor="username">Chương Trình: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.chuongtrinh} onChange={this.changeChuongTrinhlHandler}/>
                        </div>
                        <div className="form-group  col-md-2">
                          <label htmlFor="username">Quà Tặng: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.quatang} onChange={this.changeQuaTangHandler}/>
                        </div>
                              <div className = "form-group col-md-2">
                                        <label htmlFor="username">Nổi Bật:</label>
                                        <select className="form-select"
                                            value={this.state.noibat}
                                            onChange={this.changeNoiBatHandler}
                                        >
                                            <option value="true">Đúng</option>
                                            <option value="false">Sai</option>
                                          
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="username">Ngày Tạo:</label>
                                         <input   type="date" name="ngaytao" className="form-control" 
                                                value={this.state.ngaytao} onChange={this.changeNgayTaoHandler}/>
                                    </div>  
                        <div className="form-group  col-md-3">
                          <label htmlFor="username">Link YouTuBe Riview: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.ytbrivew} onChange={this.changeYtbrivewHandler}/>
                        </div>




                     
                          <div className="form-group  col-md-3">
                            <label htmlFor="username">Ảnh Chính: </label>
                            <input
                              name="anh"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnhHandler}
                            /> 
                                    <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/products/${this.state.anh}`} alt="" />                         
                          </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username">Ảnh kèm trên: </label>
                            <input
                              name="anh2"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnh2Handler}
                            />  
                      <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/products/anhct/${this.state.anh2}`} alt="" />                         
                                                  
                          </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username">Ảnh kèm dưới: </label>
                            <input
                              name="anh3"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnh3Handler}
                            />   
                             <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/products/anhct/${this.state.anh3}`} alt="" />                         
                                             
                          </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username">Ảnh Chi Tiết Sản Phẩm: </label>
                            <input
                              name="detailanh"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeDetailanhHandler}
                            />     
                             <img style={{ width: "120px",marginLeft:"50px" }} src={`/images/products/${this.state.detailanh}`} alt="" />                         
                                                   
                          </div>
                              
                         <div className="form-group col-md-6">
                            <label htmlFor="username"> Hình ảnh liên quan của sản phẩm: <p style={{ float: "right", marginLeft: "10px" }}>(Giữ Ctrl để chọn nhiều ảnh)</p></label>
                            <input
                              name="image"
                              type="file"
                              placeholder="Giữ Ctrl để chọn nhiều ảnh"
                              multiple
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeImageHandler}
                            />
                                <div className="thumbs-wrap">
                      {this.state.primg.map((primg) => (
                   
                           <img style={{ width: "110px",marginLeft:"5px" }}                 
                          src={`/images/products/${primg.anh}`} title={primg.mau}
                        />
                    

                      ))}
                    </div>{" "}
                          </div>

                          <div className="form-group  col-md-3">
                          <label htmlFor="password">Phụ kiện của sản phẩm:  </label>
                        
                          <select class="form-select"
                            value={this.state.pkdikem}
                            onChange={this.changePkdikemHandler}
                          >
                               <option value="0" selected>Không chọn</option>
                            {this.state.products.map((products) => (
                              <option value={products.id}>{products.ten}</option>
                            ))}
                          </select>

                        </div>

                        <div className="form-group  col-md-3">
                          <label htmlFor="password">Loại sản phẩm:  </label>
                          <select class="form-select"
                            value={this.state.id_categorys}
                            onChange={this.changeIdCateHandler}
                          >
                               <option value="0" selected>Không chọn</option>
                            {this.state.categorys.map((category) => (
                              <option value={category.id}>{category.ten}</option>
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
                                                    onClick={this.saveProduct}
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

export default AddProducts;