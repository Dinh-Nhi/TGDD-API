import React, { useEffect, useState } from 'react';
import {Card, Form, Table} from 'react-bootstrap';
import ReactExport from 'react-data-export';
import { getData } from './DataOrder';
import HeaderAdmin from './../share/HeaderAdmin';
import MenuAdmin from './../share/MenuAdmin';
import FooterAdmin from './../share/FooterAdmin';
import NumberFormat from 'react-number-format';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


const OrdersAdmin = () => {
    const [countries, setCoutries] = useState([]);
    const [exporData, setExportData] = useState([]);
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;

    const DataSet = [
            {
                columns:[
                    {title:"MÃ ĐƠN HÀNG"},
                    {title:"NGÀY ĐẶT"},
                    {title:"TÊN NGƯỜI MUA"},
                    {title:"ĐỊA CHỈ"},
                    {title:"THÀNH TIỀN"},
                    {title:"TRẠNG THÁI"},
                ],
                data: exporData.map((content) =>[
                    {value:content.id_order},
                    {value:content.date},
                    {value:content.fullname},
                    {value:content.address},
                    {value:content.status}
                ])
            }
        ]


    const countryChangeHandler = async (e) => {
        setExportData([]);
        const data = await getData(e.target.value);
        console.log(data);
        setExportData(data);
    }

    useEffect(() => {
    }, []);
        return (
            <div className="sb-top4-fixed backgroundadmin">
                <HeaderAdmin />
                <div id="layoutSidetop4">
                    <MenuAdmin />
                    <div id="layoutSidetop4_content">
                        <table class="table table-bordered donhangadmin" onChange={(e) => countryChangeHandler(e)} style={{ textAlign: "center" }}>
                            <thead>
                                <tr style={{ textAlign: "center" }}>                                 
                                    <th >MÃ ĐƠN HÀNG</th>
                                    <th >NGÀY ĐẶT</th>
                                    <th >TÊN NGƯỜI MUA</th>
                                    <th >ĐỊA CHỈ</th>
                                    <th >THÀNH TIỀN</th>  
                                    <th >TRẠNG THÁI</th>  
                                     <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.content.map((country) => ( */}
                                       {countries.map(
                                        (country) => (
                                    <tr>
                                      
                                        <td>{country.id_order}</td>
                                        <td>{country.date}</td>
                                        <td>{country.fullname}</td>
                                        <td>{country.address}</td>
                                        <td>
                                        <NumberFormat
                                style={{ marginLeft: "10px" }}
                                value={country.tongtien}
                                displayType={"text"}
                                thousandSeparator={true}
                            />đ               </td>
                                        <td>
                                        {(() =>
                                         { if (country.status == 'CHƯA XEM')
                                          {
                                               return (
                                                <a
                                                type="button"
                                                className="btn btn-primary"
                                                style={{ fontSize: "12px",color:"white" }}
                                                href={
                                                    "/order-details/" +
                                                    country.id_order
                                                  }
                                            >
                                                  {country.status}
                                            </a>
                                               ) }
                                                else if (country.status == 'ĐANG GIAO') 
                                               {
                                                    return (
                                                        <a
                                                        type="button"
                                                        className="btn btn-info"
                                                        style={{ fontSize: "12px",color:"white" }}
                                                        href={
                                                            "/order-details/" +
                                                            country.id_order
                                                          }
                                                    >
                                                          {country.status}
                                                    </a>
                                                          ) } 
                                                          else if (country.status == 'BỊ HỦY') 
                                                          {
                                                               return (
                                                                   <a
                                                                   type="button"
                                                                   className="btn btn-danger"
                                                                   style={{ fontSize: "12px",color:"white" }}
                                                                   href={
                                                                       "/order-details/" +
                                                                       country.id_order
                                                                     }
                                                               >
                                                                     {country.status}
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
                                                                country.id_order
                                                              }
                                                        >
                                                              {country.status}
                                                        </a>
                                                             
                                                             ) } })()}
                                              
                                        </td>
                                        <td>
                   
                   <div><a href={ "/order-details/" + country.id_order
                                                      }> 
                                                      <i class="fas fa-edit iconadmin"/>
                                                     
                                                      </a></div>
               </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ExcelFile
                        filename = "Danh sách đơn hàng"
                        element = {<button type="button" className="btn btn-success">Export file</button>}
                        >
<ExcelSheet dataSet={DataSet} name="Danh sách đơn hàng"/>


                        </ExcelFile>
                        <center>
            
           </center>
                        <FooterAdmin />
                    </div>
                </div>
            </div>
        );
    }

export default OrdersAdmin;