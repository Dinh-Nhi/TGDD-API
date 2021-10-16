import React, { Component } from "react";

import {
  total,
  list,
  quantity,
  add,
  remove,
  onChange,
} from "cart-localstorage";
import { confirmAlert } from 'react-confirm-alert';
import NumberFormat from "react-number-format";
import authService from "../user/auth.service";
import Head from "../../share/Head";
import Header from './../../share/Header';
import Footer from './../../share/Footer';
const tong = total();
const user = localStorage.getItem("user");
class Cart extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      carts: list(),
    };
 }
  AddCart(id, ten, giaban, phantramgiam, price, anh, e) {
    add({ id: id, ten: ten, giaban: giaban,phantramgiam:phantramgiam, price:price, anh: anh });
    onChange();
  }
  DeleteAddCart(id) {
    quantity(id, -1);
  }
  RemoveAddCart(id) {
    remove(id);
    if ((localStorage.getItem("__cart")) == "[]") {
      localStorage.removeItem("__cart");
    }
    window.location.reload(false);
  }
  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  checkout() {
    if (user == null) {
      this.props.history.push(`/login`);
    } else {
      this.props.history.push(`/order`);
    }
  }
  logOut() {
    authService.logout();
  }
  submit = (id) => {
    confirmAlert({
      message: 'Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng.',
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
    const { currentUser } = this.state;
    if (localStorage.getItem("__cart") != null) {
      return (
        <div>
        <Head/>
        <Header/>
        <div className="trangchu">
        <section className="section-content padding-y ">
  <div className="container">
    <div className="row">
      <main className="col-md-9">
        <div className="card">
          <table className="table table-borderless table-shopping-cart">
            <thead className="text-muted">
              <tr className="small text-uppercase">
                <th scope="col">Sản Phẩm</th>
                <th scope="col" width={120}>Số Lượng</th>
                <th scope="col" width={120} >Giá</th>
                <th scope="col" width={200}>Thành Tiền</th>

                <th scope="col" className="text-right" width={120}>Xóa </th>
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
                              <a
                              style={{backgroundColor:"white",width:"21px",textAlign:"center"}}
                            type="button"
                                href=""
                                onClick={(e) =>
                                  this.AddCart(
                                    cat.id,
                                    cat.ten,
                                    cat.price,
                                    cat.anh,
                                    e
                                  )
                                }
                              >
                                <i
                                  class="fa fa-chevron-circle-up"
                                  aria-hidden="true"
                                  style={{color:"black"}}
                                ></i>
                              </a>
                              <a type="button" style={{backgroundColor:"white",width:"21px",textAlign:"center"}}>{cat.quantity}</a>
                           
                              <a   
                              style={{backgroundColor:"white",width:"21px",textAlign:"center"}}
                                type="button"
                                href=""
                                onClick={(e) => this.DeleteAddCart(cat.id)}
                              >
                                <i
                                  class="fa fa-chevron-circle-down"
                                  aria-hidden="true"
                                  style={{color:"black"}}
                                ></i>
                              </a>
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
                <td className="text-right"> 
                  <a href className="btn btn-light"  onClick={(e) => this.RemoveAddCart(cat.id)}> <i class="fa fa-trash-o"></i></a>
                </td>
                
              </tr>
              
           ))}  </tbody>
          </table>
          <div className="card-body border-top">
            <a  className="btn btn-primary float-md-right" onClick={() => this.checkout()}> Thanh Toán <i className="fa fa-chevron-right" /> </a>
            <a href="/shop" className="btn btn-light"> <i className="fa fa-chevron-left" /> Tiếp Tục Mua Sắm </a>
          </div>	
        </div> {/* card.// */}
        <div className="alert alert-success mt-3">
          <p className="icontext"><i className="icon text-success fa fa-truck" /> GIAO HÀNG: NHANH CHÓNG - AN TOÀN - TIỆN LỢI</p>
        </div>
      </main> {/* col.// */}
      <aside className="col-md-3">
        <div className="card mb-3">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Bạn có mã Voucher?</label>
                <div className="input-group">
                  <input type="text" className="form-control" name placeholder="Nhập vào đây" />
                  <span className="input-group-append"> 
                    <button className="btn btn-primary">Sử dụng</button>
                  </span>
                </div>
              </div>
            </form>
          </div> {/* card-body.// */}
        </div>  {/* card .// */}
        <div className="card">
          <div className="card-body">
            <dl className="dlist-align">
              <dt>Tổng Tiền:</dt>
              <dd className="text-right">  <NumberFormat
                              value={tong}
                              displayType={"text"}
                              thousandSeparator={true}
                            />đ</dd>
            </dl>
            <dl className="dlist-align">
              <dt>Voucher:</dt>
              <dd className="text-right">0%</dd>
            </dl>
            <dl className="dlist-align">
              <dt>Thanh Toán:</dt>
              <dd className="text-right  h5">
                            <NumberFormat
                              value={tong}
                              displayType={"text"}
                              thousandSeparator={true}
                            />đ
                     </dd>
            </dl>
            <hr />
            <p className="text-center mb-3">
              <img src={`/images/payments.png}`} height={26} />
            </p>
          </div> {/* card-body.// */}
        </div>  {/* card .// */}
      </aside> {/* col.// */}
    </div>
  </div> {/* container .//  */}
</section>
</div>
      <Footer/>
      </div>
   );
    } else {
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

export default Cart;
