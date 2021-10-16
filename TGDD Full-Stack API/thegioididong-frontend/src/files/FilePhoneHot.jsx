import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FilePhoneHot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                phonehot: []
        }
    }
    componentDidMount(){
      Service.getProdyctsPhoneHot().then((res) => {
              this.setState({ phonehot: res.data});
          });
      }
    render() {
        return (
            <li className="feature" data-id={220438}>
                {
                this.state.phonehot.map(
                    phonehot => 
            <a  href={(`/products/${phonehot.id}`)} className="vertion2020"> 
            <img width={600} height={275} data-original={`/images/products/${phonehot.anh2}`} className="lazy" alt="OPPO Reno5" />
              <div className="heightlabel">
                <label className="installment">{phonehot.chuongtrinh}<b>{phonehot.laisuat}%</b></label>
              </div>
              <h3>{phonehot.ten}</h3>
              <div className="price">
                <strong><NumberFormat value={phonehot.giaban-(phonehot.giaban*phonehot.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={phonehot.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{phonehot.phantramgiam}%</i>
              </div>
              <div className="ratingresult">
                <i className="icontgdd-ystar" />
                 <i className="icontgdd-ystar" />
                  <i className="icontgdd-ystar" /> 
                  <i className="icontgdd-ystar" /> 
                  <i className="icontgdd-gstar" /> 
                  <span>496 đánh giá</span>
              </div> <div className="clr" />
            </a>
                 )} </li>
        );
    }
}

export default FilePhoneHot;