import React, { Component } from 'react';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import NumberFormat from 'react-number-format';
import OrdersService from '../../services/OrdersService';
import { confirmAlert } from 'react-confirm-alert';
const date = new Date().toLocaleDateString();
class DetailOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,     
            status: ' ',
            list_product: [],
            info: "",
        }
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }

    componentDidMount() {
        OrdersService.getInfoUserById(this.state.id).then( (res) =>{
            let order = res.data;
            this.setState({   
                status:order.status
            });
        });



        OrdersService.ListOrderDetail(this.state.id).then((res) => {
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
    saveOrder = (e) => {
        e.preventDefault();
        let order = {  
                    status: this.state.status};
        console.log('order => ' + JSON.stringify(order));
            OrdersService.updateOrder(order, this.state.id).then( res => {
                this.props.history.push('/admin-order/page=1');
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
    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    cancel() {
        this.props.history.push('/admin-order/page=1');
    }
      
    render() {
        return (
            <div className="sb-top4-fixed backgroundadmin">
                <HeaderAdmin />
                <div id="layoutSidetop4">
                    <MenuAdmin />
                    <div id="layoutSidetop4_content">
                        <div className="row orderadmin">
                  

                                <div className="col-md-8">
                                    <table class="table   table-border2">
                                        <thead class="" style={{ color: "black" }}>
                                            <tr className="">
                                              
                                                <th
                                                    scope="col"
                                                    style={{ textAlign: "center", color: "black" }}
                                                >
                                                    Tên sản phẩm
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "80px", color: "black" }}
                                                >
                                                    Kích cỡ
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ textAlign: "center", color: "black" }}
                                                >
                                                    Hình ảnh
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ textAlign: "center", color: "black" }}
                                                >
                                                    Đơn giá
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "100px", color: "black" }}

                                                >
                                                    Số lượng
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "103px", color: "black" }}

                                                >
                                                    Thành tiền
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.list_product.map((lstpr) => (
                                                <tr>
                                                   
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        {lstpr.ten}
                                                    </td>
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        {lstpr.mau}
                                                    </td>
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        <img style={{ width: "130px", height: "150px" }} src={`/images/products/${lstpr.anh}`} alt="" />
                                                    </td>
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        <NumberFormat
                                                            value={lstpr.price}
                                                            displayType={"text"}
                                                            thousandSeparator={true}
                                                        />
                                                        đ
                                                    </td>
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        {lstpr.quantity}
                                                    </td>
                                                    <td style={{ textAlign: "center", color: "black" }}>
                                                        <NumberFormat
                                                            value={lstpr.quantity * lstpr.price}
                                                            displayType={"text"}
                                                            thousandSeparator={true}
                                                        />
                                                        đ
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                    </div>
                                    <div className="col-md-4">
                                    <article className="card mb-3">
                                    <center>       <div className="luugia"    onClick={this.saveOrder}>  <a
                                            type="button"
                                            className="btn btn-primary"
                                            style={{ fontSize: "17px",width: "60%",color:"white" }}
                                           
                                        >
                                            LƯU THAY ĐỔI
                                        </a></div>   </center>  
                                        <div className="card-body">
                                            <figure className="icontext">
                                                <div>
                                                    <div style={{ display: "flex" }}>
                                                        <div className="title" style={{fontWeight:"bold"}}>Thông tin khách hàng</div>
                                                    </div>
                                                  
                                                        <div className="title">
                                                          <div>Họ tên khách hàng:{this.state.fullname} </div>
                                                            <div>Số điện thoại:{this.state.phone} </div>
                                                            <div>Địa chỉ:{this.state.address} </div>
                                                            <div>Ghi chú:{this.state.note}</div>
                                                            <div>Trạng thái:{this.state.status}</div>
                                                        </div>
                                                   
            <div className="giatienadmin">
                            Tổng giá trị:
                            <NumberFormat
                                style={{ marginLeft: "10px" }}
                                value={this.state.result}
                                displayType={"text"}
                                thousandSeparator={true}
                            />
                            đ
                      </div>
                        
                      </div>
                                                
                                            </figure>
                                         
                                            <hr />
                                            
                                        </div>
                                       
                                        <div>
                                       
                                    
            <center>  
                                    
   <ul className="list" onChange={this.changeStatusHandler}>
   <h3 className="tenstatus">CHỈNH SỬA TRẠNG THÁI ĐƠN HÀNG</h3>  
  <li className="list__item">
    <input type="radio"   checked={this.state.status === "CHƯA XEM"} className="radio-btn" id="a-opt"   value="CHƯA XEM" name="status" />
    <label htmlFor="a-opt" className="label">&ensp; <i class="fas fa-eye"></i>&nbsp;CHƯA XEM </label>
  </li>
  <li className="list__item">
  <input type="radio"  checked={this.state.status === "ĐANG GIAO"} className="radio-btn"  value= "ĐANG GIAO" id="b-opt" name="status"/>
    <label htmlFor="b-opt" className="label"> &ensp; <i class="fas fa-truck"></i>&nbsp; ĐANG GIAO</label>
   </li>
  <li className="list__item">
    <input type="radio"   checked={this.state.status === "HOÀN THÀNH"} className="radio-btn" id="c-opt"   value="HOÀN THÀNH" name="status"/>
    <label htmlFor="c-opt" className="label">&ensp;&nbsp;<i class="fas fa-check"></i>&nbsp;HOÀN THÀNH </label>
  </li>
  <li className="list__item">
    <input type="radio"  checked={this.state.status === "BỊ HỦY"} className="radio-btn"  id="d-opt"  value="BỊ HỦY"  name="status"/>
    <label htmlFor="d-opt" className="label">&ensp;<i class="fas fa-trash"></i>&nbsp;BỊ HỦY</label>
  </li>
</ul>
 </center>
                                                               
                                    
                                      </div>
                                    </article>{" "}
                             
 
                             
                              </div>


                           
                        </div>



                        <FooterAdmin />
                    </div>
                </div>
            </div>
        );
    }
}
export default DetailOrder;