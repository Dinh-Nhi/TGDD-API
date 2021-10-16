import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileTabLetHot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tablethot: []
        }
    }
    componentDidMount(){
      Service.getProdyctsTABLETHot().then((res) => {
              this.setState({ tablethot: res.data});
          });
      }
    render() {
        return (
            <li className="feature" data-id={220438}>
            {
            this.state.tablethot.map(
                tablethot => 
        <a  href={(`/products/${tablethot.id}`)} className="vertion2020"> 
        <img width={600} height={275} data-original={`/images/products/${tablethot.anh2}`} className="lazy" alt="OPPO Reno5" />
          <div className="heightlabel">
            <label className="installment">{tablethot.chuongtrinh}<b>{tablethot.laisuat}%</b></label>
          </div>
          <h3>{tablethot.ten}</h3>
          <div className="price">
                <strong><NumberFormat value={tablethot.giaban-(tablethot.giaban*tablethot.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={tablethot.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{tablethot.phantramgiam}%</i>
              </div>
          <div className="ratingresult">
            <i className="icontgdd-ystar" />
             <i className="icontgdd-ystar" />
              <i className="icontgdd-ystar" /> 
              <i className="icontgdd-ystar" /> 
              <i className="icontgdd-gstar" /> 
              <span>496 đánh giá</span>
          </div>   <div className="clr" />
        </a>
             )} </li>
        );
    }
}

export default FileTabLetHot;