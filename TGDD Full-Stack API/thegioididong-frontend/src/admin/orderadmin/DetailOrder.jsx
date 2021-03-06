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
            fullname:'',
            phone:'',
            address:'',
            note:'',
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
                fullname: order.fullname,
                phone: order.phone,
                address:order.address,
                note: order.note,
                status:order.status,
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
                    message: 'S???a th??nh c??ng !!!.',
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
                                                    T??n s???n ph???m
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "80px", color: "black" }}
                                                >
                                                    K??ch c???
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ textAlign: "center", color: "black" }}
                                                >
                                                    H??nh ???nh
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ textAlign: "center", color: "black" }}
                                                >
                                                    ????n gi??
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "100px", color: "black" }}

                                                >
                                                    S??? l?????ng
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "103px", color: "black" }}

                                                >
                                                    Th??nh ti???n
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
                                                        ??
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
                                                        ??
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
                                            L??U THAY ?????I
                                        </a></div>   </center>  
                                        <div className="card-body">
                                            <figure className="icontext">
                                                <div>
                                                    <div style={{ display: "flex" }}>
                                                        <div className="title" style={{fontWeight:"bold"}}>Th??ng tin kh??ch h??ng</div>
                                                    </div>
                                                  
                                                        <div className="title">
                                                          <div>H??? t??n kh??ch h??ng:   {this.state.fullname} </div>
                                                            <div>S??? ??i???n tho???i:  {this.state.phone} </div>
                                                            <div>?????a ch???:  {this.state.address} </div>
                                                            <div>Ghi ch??:  {this.state.note}</div>
                                                            <div>Tr???ng th??i: {this.state.status}</div>
                                                        </div>
                                                   
            <div className="giatienadmin">
                            T???ng gi?? tr???:
                            <NumberFormat
                                style={{ marginLeft: "10px" }}
                                value={this.state.result}
                                displayType={"text"}
                                thousandSeparator={true}
                            />
                            ??
                      </div>
                        
                      </div>
                                                
                                            </figure>
                                         
                                            <hr />
                                            
                                        </div>
                                       
                                        <div>
                                       
                                    
            <center>  
                                    
   <ul className="list" onChange={this.changeStatusHandler}>
   <h3 className="tenstatus">CH???NH S???A TR???NG TH??I ????N H??NG</h3>  
  <li className="list__item">
    <input type="radio"   checked={this.state.status === "CH??A XEM"} className="radio-btn" id="a-opt"   value="CH??A XEM" name="status" />
    <label htmlFor="a-opt" className="label">&ensp; <i class="fas fa-eye"></i>&nbsp;CH??A XEM </label>
  </li>
  <li className="list__item">
  <input type="radio"  checked={this.state.status === "??ANG GIAO"} className="radio-btn"  value= "??ANG GIAO" id="b-opt" name="status"/>
    <label htmlFor="b-opt" className="label"> &ensp; <i class="fas fa-truck"></i>&nbsp; ??ANG GIAO</label>
   </li>
  <li className="list__item">
    <input type="radio"   checked={this.state.status === "HO??N TH??NH"} className="radio-btn" id="c-opt"   value="HO??N TH??NH" name="status"/>
    <label htmlFor="c-opt" className="label">&ensp;&nbsp;<i class="fas fa-check"></i>&nbsp;HO??N TH??NH </label>
  </li>
  <li className="list__item">
    <input type="radio"  checked={this.state.status === "B??? H???Y"} className="radio-btn"  id="d-opt"  value="B??? H???Y"  name="status"/>
    <label htmlFor="d-opt" className="label">&ensp;<i class="fas fa-trash"></i>&nbsp;B??? H???Y</label>
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