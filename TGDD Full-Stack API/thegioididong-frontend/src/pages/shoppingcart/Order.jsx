import React, { Component } from "react";
import axios from "axios";
import {
  total,
  list,
  quantity,
  remove
} from "cart-localstorage";
import { confirmAlert } from 'react-confirm-alert';
import NumberFormat from "react-number-format";
import OrdersService from "../../services/OrdersService";
import Head from "../../share/Head";
import Header from './../../share/Header';
import Footer from './../../share/Footer';
const tong = total();
const userid = JSON.parse(localStorage.getItem("user"));
class Order extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      fullname: userid.username,
      phone: userid.phone,
      address: userid.address,
      id_order: localStorage.getItem("cart_id"),
      user_id: userid.id,
      note: '',
      date:date,
      status:'Chưa Xem',
      tongtien:'',
      carts: list(),
    };
    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeIdOrderHandler = this.changeIdOrderHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeNoteHandler = this.changeNoteHandler.bind(this);
    this.changeDatedHandler = this.changeDatedHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeTongtienHandler = this.changeTongtienHandler.bind(this);
    this.saveOrupDateInfo = this.saveOrupDateInfo.bind(this);
    this.submit = this.submit.bind(this);
  }
  saveOrupDateInfo = (e) => {
    let info = {
      fullname: this.state.fullname,
      phone: this.state.phone,
      address: this.state.address,
      id_order: this.state.id_order,
      user_id: this.state.user_id,
      note: this.state.note,
      date: this.state.date,
      status:  this.state.status,
      tongtien: tong,
    };
    console.log("info => " + JSON.stringify(info));
    OrdersService.CreateInfos(info).then((res) => {
    });
    let data = localStorage.getItem("__cart");
    axios
      .post("http://localhost:8080/order", JSON.parse(data))
      .then((res) => console.log("thanh cong"))
      .catch((e) => console.log("that bai"));
    localStorage.removeItem("__cart");
    localStorage.removeItem("cart_id");
    localStorage.removeItem("price");
    window.location.reload(false);
  };
  submit = (e) => {
    const x = this.state.id_order;
    confirmAlert({
      message: "Bạn có chắc chắn mua đơn hàng:__" + x,
      buttons: [
        {
          label: 'OK',
          onClick: () => this.saveOrupDateInfo(e),

        },
        {
          label: 'Hủy',
          onClick: () => this.onClose
        }
      ]
    });
  };

  changeFullNameHandler = (event) => {
    this.setState({ fullname: event.target.value });
  };

  changePhoneHandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeIdOrderHandler = (event) => {
    this.setState({ id_order: event.target.value });
  };
  changeUserIdHandler = (event) => {
    this.setState({ user_id: event.target.value });
  };
  changeNoteHandler = (event) => {
    this.setState({ note: event.target.value });
  };
  changeDatedHandler = (event) => {
    this.setState({ date: event.target.value });
  };
  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };
  changeTongtienHandler = (event) => {
    this.setState({ tongtien: event.target.value });
  };
  DeleteAddCart(id) {
    quantity(id, -1);
  }
  RemoveAddCart(id) {
    remove(id);
    if (localStorage.getItem("__cart") == "[]") {
      localStorage.removeItem("__cart");
    }
    window.location.reload(false);
  }
  submitDelete = (id) => {
    const x = this.state.id_order;
    confirmAlert({
      message: 'Bạn có muốn xóa sản phẩm này ra khỏi đơn hàng:___' + x,
      buttons: [
        {
          label: 'OK',
          onClick: () => this.RemoveAddCart(id),

        },
        {
          label: 'Hủy',
          onClick: () => this.onClose
        }
      ]
    });
  };
  render() {
    if (localStorage.getItem("__cart") != null) {
      return (
        <div>
        <Head/>
        <Header/>
        <div className="trangchu">
          <section className="section-content padding-y">
  <div className="container" style={{maxWidth: '720px'}}>
    <div className="card mb-4">
    <div className="row">
      <main className="col-md-12">
        <div className="card">
          <table className="table table-borderless table-shopping-cart">
            <thead className="text-muted">
              <tr className="small text-uppercase">
                <th scope="col">Sản Phẩm</th>
                <th scope="col"width={120}>Số Lượng</th>
                <th scope="col" >Giá</th>
                <th scope="col" >Thành Tiền</th>
               
              </tr>
            </thead>
            <tbody className="border-top">
            {this.state.carts.map((cat) => (
              <tr className="border-top">
                <td>
                  <figure className="itemside">
                    <div className="aside"><img src={`/images/products/${cat.anh}`}className="img-sm" /></div>
                    <figcaption className="info">
                      <a href="#" className="title text-dark">{cat.ten}</a>
                      <p className="text-muted small">Giá Gốc: <NumberFormat
                                    value={cat.giaban}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />
                                  đ</p>
                      <p className="text-muted small">Giảm Giá: {cat.phantramgiam}%</p>
                      <p className="text-muted small">Màu: {cat.mau}</p>
                    </figcaption>
                  </figure>
                </td>
                <td style={{ display: "flex" }}>
                              <a type="button" style={{backgroundColor:"white",width:"21px",textAlign:"center"}}>{cat.quantity}</a> 
                            </td>
                              <td> 
                  <div className="price-wrap"> 
                    <var > <NumberFormat
                                    value={cat.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />
                                  đ</var> 
                  
                  </div>
                  
                </td>
                <td>
                              <div>
                                <var className="price-tab price">
                                  <NumberFormat
                                       style={{marginLeft:"-9px"}}
                                    value={cat.price * cat.quantity}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />
                                  đ
                                </var>
                              </div>
                              </td>
              
                
              </tr>
              
           ))}  </tbody>
          </table>
       
        </div> {/* card.// */}
   
      </main> {/* col.// */}
    </div>
 
      <div className="card-body">
        <center>
        <h3 className="card-title mb-12 giadam">TỔNG CỘNG:<strong> <NumberFormat
                              value={tong}
                              displayType={"text"}
                              thousandSeparator={true}
                            />đ </strong></h3></center>
        <div className="form-row">
        <div className="form-group col-md-2">
            <label>ID KH</label>
            <input
                            className="form-control"
                            placeholder="Mã khách hàng"
                            type="text"
                            id="id_order"
                            name="id_order"
                            value={this.state.user_id}
                            onChange={this.changeUserIdHandler}
                            required
                            disabled
                          />
          </div> 
         
          <div className="col form-group col-md-5">
            <label>Tên Người Nhận (*)</label>
            <input
                            className="form-control"
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={this.state.fullname}
                            onChange={this.changeFullNameHandler}
                            required="required"
                          
                          />
          </div>
          <div className="col form-group col-md-5">
            <label>Tiền Thanh Toán</label>
            <input
                            className="form-control"
                            type="text"
                            id="tongtien"
                            name="fullname"
                            value={tong}                      
                            onChange={this.changeTongtienHandler}
                            required
                            disabled
                          
                          />
          </div>
        </div>
        <div className="form-row">
        <div className="col form-group col-md-2">
            <label>ID Đơn Hàng</label>
            <input
                            className="form-control"
                            placeholder="Mã đơn hàng"
                            type="text"
                            id="id_order"
                            name="id_order"
                            value={this.state.id_order}
                            onChange={this.changeIdOrderHandler}
                            required
                            disabled
                          />
          </div> {/* form-group end.// */}
        <div className="col form-group col-md-10">
            <label>Điện Thoại (*)</label>
            <input
                            className="form-control"
                            type="text"
                            id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.changePhoneHandler}
                            required="required"
                          />
          </div> 
         
         
        </div> {/* form-row end.// */}
        <div className="form-group">
     
            <label>Địa Chỉ (*)</label>
            <input
                            className="form-control"
                            type="text"
                            id="address"
                            name="address"
                            value={this.state.address}
                            onChange={this.changeAddressHandler}
                            required="required"
                          />
          </div> 
        <div className="form-group">
          <label>Ghi Chú</label>
          <textarea
                            className="form-control"
                            placeholder="Ghi chú đơn hàng này..."
                            type="text"
                            id="note"
                            name="note"
                            onChange={this.changeNoteHandler}
                            required
                          />
        </div> 
        <div className="form-group">
                          
                          <input
                            className="form-control"
                            type="date"
                            type="hidden"
                           value={this.state.date}
                            onChange={this.changeDatedHandler}
                            required
                          />
                        </div>
                        <div className="card-body border-top">
            <a  className="btn btn-primary float-md-right" onClick={() => this.submit()}>Đặt Hàng <i class="fa fa-check"></i> </a>
         </div>             
      </div> 
    </div> 
    <br /><br /> 
  </div> 
</section>

        </div>
        <Footer/>
            </div>
      );
    }
    else {
      return (
        <div>
        <Head/>
        <Header/>
        <div className="trangchu">
        <section className="carttrong">
          <div className="cartempty">
            <i className="cartnew-empty" />
            <span>Không có sản phẩm nào trong giỏ hàng</span>
            <a href="/" className="backhome">Về trang chủ</a>
            <p>Khi cần trợ giúp vui lòng gọi <a href="tel:123456789;">123456789</a> 
            hoặc <a href="tel:987654321;">987654321</a> (7h30 - 22h)</p></div></section>
            </div>
            <Footer/>
            </div>
      );
    }


  }
}

export default Order;
