import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import FilePhoneHot from './FilePhoneHot';
class FilePhone extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                phone: []
        }
    }
    componentDidMount(){
      Service.getProdyctsPhone().then((res) => {
              this.setState({ phone: res.data});
          });
      }
    render() {
        return (    
          <ul className="homeproduct item2020 homepromo ">
             <FilePhoneHot/>
             <li className="empty-item" ></li>
                 {
                this.state.phone.map(
                    phone => 
            <li ><a href={(`/products/${phone.id}`)} className=" vertion2020 large" data-s={0}>
            <div className="heightlabel">
              <label className="installment">{phone.chuongtrinh}</label>
            </div> <img width={180} height={180}
             data-original={`/images/products/${phone.anh}`} className="lazy"
              alt={phone.ten} />
            <h3>{phone.ten}</h3>
            <div className="price">
                <strong><NumberFormat value={phone.giaban-(phone.giaban*phone.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={phone.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{phone.phantramgiam}%</i>
              </div>
            <div className="ratingresult">
              <i className="icontgdd-ystar" />
               <i className="icontgdd-ystar" />
                <i className="icontgdd-ystar"  />
                 <i className="icontgdd-ystar" />
                  <i className="icontgdd-gstar" /> 
                  <span>72 đánh giá</span>
            </div> 
           </a></li>
         )} 
          </ul>
        );
    }
}

export default FilePhone;




















