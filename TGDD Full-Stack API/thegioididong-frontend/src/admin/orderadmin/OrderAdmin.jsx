import React, { Component } from 'react';
import FooterAdmin from './../share/FooterAdmin';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import AdminService from '../../services/AdminService';
import NumberFormat from 'react-number-format';
import axios from "axios";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

class OrderAdmin extends Component {
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
    // findAll(currentPage) {
    //     currentPage -= 1;
    //     AdminService.getAdminOrders(currentPage, this.state.size)
    //         .then((response) => response.data)
    //         .then((data) => {
    //             this.setState({
    //                 content: data.content,
    //                 totalPages: data.totalPages,
    //                 totalElements: data.totalElements,
    //                 currentPage: data.number + 1,
    //             });
    //         });
    // }
    
    findAll(currentPage) {
        currentPage -= 1;
        axios.get("http://localhost:8080/admin/all-orders?page=" + currentPage)
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
    }
  
    render() {
        const DataSet = [
            {
                columns:[
                    {title:"M?? ????N H??NG", width: {wpx: 100}},
                    {title:"NG??Y ?????T", width: {wpx: 100}},
                    {title:"T??N NG?????I MUA", width: {wpx: 100}},
                    {title:"?????A CH???", width: {wpx: 240}},
                    {title:"TH??NH TI???N", width: {wpx: 100}},
                    {title:"TR???NG TH??I", width: {wpx: 100}},
                ],
                data:
                (this.state.content.map((allproduct) =>[
                    {value:allproduct.id_order},
                    {value:allproduct.date},
                    {value:allproduct.fullname},
                    {value:allproduct.address},
                    {value:allproduct.tongtien},
                    {value:allproduct.status}
                ]))
            }
        ]
        return (
            <div className="sb-top4-fixed backgroundadmin">
                <HeaderAdmin />
                <div id="layoutSidetop4">
                    <MenuAdmin />
                    <div id="layoutSidetop4_content">
                        <div className="nutorder">
                    
                        <a >  <ExcelFile
                        filename = "Danh s??ch ????n h??ng"
                        element = {<button type="button" className="btn btn-success">Xu???t Ra Excel</button>}
                        >
<ExcelSheet dataSet={DataSet} name="Danh s??ch ????n h??ng"/>


                        </ExcelFile></a>
                        </div>

                        <table class="table table-bordered donhangadmin" style={{ textAlign: "center" }}>
                            <thead>
                                <tr style={{ textAlign: "center" }}>                                 
                                    <th >M?? ????N H??NG</th>
                                    <th >NG??Y ?????T</th>
                                    <th >T??N NG?????I MUA</th>
                                    <th >?????A CH???</th>
                                    <th >TH??NH TI???N</th>  
                                    <th >TR???NG TH??I</th>  
                                     <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.content.map((allproduct) => (
                                    <tr>
                                      
                                        <td>{allproduct.id_order}</td>
                                        <td>{allproduct.date}</td>
                                        <td>{allproduct.fullname}</td>
                                        <td>{allproduct.address}</td>
                                        <td>
                                        <NumberFormat
                                style={{ marginLeft: "10px" }}
                                value={allproduct.tongtien}
                                displayType={"text"}
                                thousandSeparator={true}
                            />??               </td>
                                        <td>
                                        {(() =>
                                         { if (allproduct.status == 'CH??A XEM')
                                          {
                                               return (
                                                <a
                                                type="button"
                                                className="btn btn-primary"
                                                style={{ fontSize: "12px",color:"white" }}
                                                href={
                                                    "/order-details/" +
                                                    allproduct.id_order
                                                  }
                                            >
                                                  {allproduct.status}
                                            </a>
                                               ) }
                                                else if (allproduct.status == '??ANG GIAO') 
                                               {
                                                    return (
                                                        <a
                                                        type="button"
                                                        className="btn btn-info"
                                                        style={{ fontSize: "12px",color:"white" }}
                                                        href={
                                                            "/order-details/" +
                                                            allproduct.id_order
                                                          }
                                                    >
                                                          {allproduct.status}
                                                    </a>
                                                          ) } 
                                                          else if (allproduct.status == 'B??? H???Y') 
                                                          {
                                                               return (
                                                                   <a
                                                                   type="button"
                                                                   className="btn btn-danger"
                                                                   style={{ fontSize: "12px",color:"white" }}
                                                                   href={
                                                                       "/order-details/" +
                                                                       allproduct.id_order
                                                                     }
                                                               >
                                                                     {allproduct.status}
                                                               </a>
                                                                     ) } 
                                                    else 
                                                    {
                                                         return (
                                                            <a
                                                            type="button"
                                                            className="btn btn-success"
                                                            style={{ fontSize: "12px",color:"white" }}
                                                            href={
                                                                "/order-details/" +
                                                                allproduct.id_order
                                                              }
                                                        >
                                                              {allproduct.status}
                                                        </a>
                                                             
                                                             ) } })()}
                                              
                                        </td>
                                        <td>
                   
                   <div><a href={ "/order-details/" + allproduct.id_order
                                                      }> 
                                                      <i class="fas fa-edit iconadmin"/>
                                                     
                                                      </a></div>
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

export default OrderAdmin;