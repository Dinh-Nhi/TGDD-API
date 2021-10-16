import React, { Component } from 'react';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import AdminService from '../../services/AdminService';
import MenuAdmin from './../share/MenuAdmin';
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Bắt buộc nhập !!!
        </div>
      );
    }
  };
  var image = [];
  var arraynew = [];
  var arrayrelated = [];
  var arrayimages = [];
  var seletedImage = [];
  const date = new Date().toLocaleDateString();
class AddProducts extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
      super(props);
      this.state = {
        // step 2
        id: this.props.match.params.id,
        ten: " ",
        anh: " ",
        anh2: " ",
        anh3: "",
        giaban:  "",
        phantramgiam: " ",
        detailanh: "",
        noibat: "false",
        ngaytao: "",
        chuongtrinh: "",
        quatang: "",
        pkdikem: "",
        ytbrivew: "",
        cateid: "",
        categorys: [],


        imageDatas: [],
        selectedFile: null,
        selectedValueProduct: [],
        selectedImage: " ",
        loading: false,
        message: "",
      };
      this.changeTenHandler = this.changeTenHandler.bind(this);
      this.changeAnhHandler = this.changeAnhHandler.bind(this);
      this.changeAnh2Handler = this.changeAnh2Handler.bind(this);
      this.changeAnh3Handler = this.changeAnh3Handler.bind(this);
      this.changeGiaBanHandler = this.changeGiaBanHandler.bind(this);
      this.changePhanTramGiamHandler = this.changePhanTramGiamHandler.bind(this);
      this.changeDetailanhHandler = this.changeDetailanhHandler.bind(this);
      this.changeNoiBatHandler = this.changeNoiBatHandler.bind(this);
      this.changeNgayTaoHandler = this.changeNgayTaoHandler.bind(this);
      this.changeChuongTrinhlHandler = this.changeChuongTrinhlHandler.bind(this);
      this.changeQuaTangHandler = this.changeQuaTangHandler.bind(this);
      this.changePkdikemHandler = this.changePkdikemHandler.bind(this);
      this.changeYtbrivewHandler = this.changeYtbrivewHandler.bind(this);
      this.saveOrupDateProduct = this.saveOrupDateProduct.bind(this);
      this.changeImageHandler = this.changeImageHandler.bind(this);
    }
    // step 3
    componentDidMount() {
      AdminService.getCategory().then((res) => {
        this.setState({ categorys: res.data });
      });
      AdminService.getAllProductNoPaginiton().then((response) => {
        this.setState({ product: response.data, arrayrelated: response.data });
  
      });
  
    }
    saveOrupDateProduct = (e) => {
      e.preventDefault();
      let product = {
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
        cateid: this.state.cateid,
      };
      console.log("product => " + JSON.stringify(product));
      this.setState({
        message: "",
        loading: true,
      });
  
      this.form.validateAll();
  
      if (this.checkBtn.context._errors.length === 0) {
        AdminService.CreateProduct(product).then(
          async (res) => {
            for (const f of this.state.imageDatas) {
              this.addProductImage(f);
            }
            this.addProductImage(image);
            let ProductNew = res.data;
            this.setState({ IdproductNews: ProductNew.id });
            console.log("id =>" + this.state.IdproductNews);
  
            await AdminService.updateimages(seletedImage, this.state.IdproductNews).then((res) => {
  
            });
            await AdminService.updateprolated(arrayrelated, this.state.IdproductNews).then((res) => {
  
            });
            this.props.history.push("/all-product-admin/page=" + localStorage.getItem("pagePresent"));
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage,
            });
          }
        );
      } else {
        this.setState({
          loading: false,
        });
      }
  
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
    changeNgayTaoHandler = (event) => {
        this.setState({ ngaytao: event.target.value });
      };
    changeTenHandler = (event) => {
      this.setState({ ten: event.target.value });
    };
    changeAnhHandler = (event) => {
        this.setState({ anh: event.target.value });
      };
      changeAnh2Handler = (event) => {
        this.setState({ anh2: event.target.value });
      };
      changeAnh3Handler = (event) => {
        this.setState({ anh3: event.target.value });
      };
      changeGiaBanHandler = (event) => {
        this.setState({ giaban: event.target.value });
      };
      changePhanTramGiamHandler = (event) => {
        this.setState({ phantramgiam: event.target.value });
      };
      changeDetailanhHandler = (event) => {
        this.setState({ detailanh: event.target.value });
      };
      changeNoiBatHandler = (event) => {
        this.setState({ noibat: event.target.value });
      };
     
    // changeAnhHandler = (e) => {
  
    //   image = [];
    //   let file = e.target.files[0];
    //   const imageData = new FormData();
    //   imageData.append('imageFile', file);
    //   this.setState({ image: file.name });
    //   image = imageData;
  
    // }
  
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




    changeCateHandler = (event) => {
      this.setState({ cateid: event.target.value });
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
             <div style={{display:"flex"}}>
                <h3 style={{ marginLeft: "36px", marginTop: "16px" }}>
                  <i class="far fa-plus-square"></i> Thêm sản phẩm mới
                </h3></div>
                <div style={{ backgroundColor: "white", marginLeft: "40px", marginTop: "20px", marginRight: "30px" }}>
                  <div className="card-body">
                  <form>
                      <div className="row">
                         
                         <div className="form-group col-md-4">
                          <label htmlFor="username">Tên sản phẩm: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.ten} onChange={this.changeTenHandler}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="password">Giá tiền</label>                         
                             <input   min="10000"  type="number" name="giaban" className="form-control" 
                            value={this.state.giaban} onChange={this.changeGiaBanHandler}/>
                          </div>                      
                          <div className="form-group col-md-4">
                             <label htmlFor="password">Giảm:(%) </label>
                            <input   min="0"  type="number" name="phantramgiam" className="form-control" 
                            value={this.state.phantramgiam} onChange={this.changePhanTramGiamHandler}/>
                          </div>
                        <div className="form-group  col-md-6">
                          <label htmlFor="username">Chương Trình: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.chuongtrinh} onChange={this.changeChuongTrinhlHandler}/>
                        </div>
                        <div className="form-group  col-md-6">
                          <label htmlFor="username">Quà Tặng: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.quatang} onChange={this.changeQuaTangHandler}/>
                        </div>
                      
                        <div className="form-group  col-md-6">
                          <label htmlFor="username">Link YouTuBe Riview: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.ytbrivew} onChange={this.changeYtbrivewHandler}/>
                        </div>
                        <div className="form-group  col-md-6">
                          <label htmlFor="username">Phụ Kiện Đi Kèm: </label>                  
                            <input  name="ten" className="form-control" 
                            value={this.state.pkdikem} onChange={this.changePkdikemHandler}/>
                        </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username"> Hình ảnh: </label>
                            <input
                              name="anh"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnhHandler}
                            />                          
                          </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username"> Hình ảnh 2: </label>
                            <input
                              name="anh2"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnh2Handler}
                            />                          
                          </div>
                          <div className="form-group  col-md-3">
                            <label htmlFor="username"> Hình ảnh 3: </label>
                            <input
                              name="anh3"
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeAnh3Handler}
                            />                          
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
                          </div>
                              
                          <div><img style={{ width: "100px", marginLeft: "10px" }} src={`http://localhost:8080/images/${this.state.image}`} alt="" /></div>
                          <div className="form-group col-md-6">
                            <label htmlFor="username"> Hình ảnh liên quan: <p style={{ float: "right", marginLeft: "10px" }}>(Giữ Ctrl để chọn nhiều ảnh)</p></label>
                            <input
                              name="image"
                              type="file"
                              placeholder="Giữ Ctrl để chọn nhiều ảnh"
                              multiple
                              className="form-control"
                              accept="image/*"
                              onChange={this.changeImageHandler}
                            />
                          </div>
                          <div className = "form-group col-md-3">
                                        <label htmlFor="username">Nổi Bật:</label>
                                        <select className="form-select"
                                            value={this.state.noibat}
                                            onChange={this.changeNoiBatHandler}
                                        >
                                            <option value="true">Đúng</option>
                                            <option value="false">Sai</option>
                                          
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="username">Ngày Tạo:</label>
                                         <input   type="date" name="ngaytao" className="form-control" 
                                                value={this.state.ngaytao} onChange={this.changeNgayTaoHandler}/>
                                    </div>  
                         
                        
                      
                        
                      
                        
                          {/* <div className="form-group">
                            <label htmlFor="password">Sản phẩm liên quan:  </label>
                            <Multiselect
                              options={this.state.product} // Options to display in the dropdown
                              selectedValues={this.state.selectedValueProduct} // Preselected value to persist in dropdown
                              onSelect={this.onSelectPro} // Function will trigger on select event
                              onRemove={this.onRemovePro} // Function will trigger on remove event
                              displayValue="title" // Property name to display in the dropdown options
                              selectionLimit="6"
                            />
                          </div> */}
                          {/* <div className="form-group">
                            <label htmlFor="password">Nhóm sản phẩm:  </label>
                            <select class="form-select"
                              value={this.state.cateid}
                              onChange={this.changeCateHandler}
                            >
                              {this.state.categorys.map((category) => (
                                <option value={category.id}>{category.title}</option>
                              ))}
  
  
                            </select>
                          </div> */}
                          
                       
                      </div>
  
  <center>
                      <div className="form-group">
                        <button
                          style={{ border: "white" }}
                          disabled={this.state.loading}
                        >
  
                          <div style={{ display: "flex" }}
                          >
                            <div
                              style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px" }}
                            >
                              <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="far fa-save"></i> Lưu</div>
                            </div>
                            <div
                              style={{ backgroundColor: "black", width: "80px", borderRadius: "15px", height: "35px", marginLeft: "5px" }}
                              onClick={this.cancel.bind(this)}
                            >
                              <div style={{ color: "white", textAlign: "center", marginTop: "5px" }}><i class="fas fa-window-close"></i> Quay lại</div>
                            </div>
                          </div>
  
                        </button>
                      </div>
  </center>
                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      
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