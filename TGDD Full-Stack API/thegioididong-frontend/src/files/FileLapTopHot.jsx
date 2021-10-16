import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileLapTopHot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                laptophot: []
        }
    }
    componentDidMount(){
      Service.getProdyctsLAPTOPHot().then((res) => {
              this.setState({ laptophot: res.data});
          });
      }
    render() {
        return (
            <li className="feature" data-id={220438}>
            {
            this.state.laptophot.map(
                laptophot => 
        <a  href={(`/products/${laptophot.id}`)} className="vertion2020"> 
        <img width={600} height={275} data-original={`/images/products/${laptophot.anh2}`} className="lazy" alt="OPPO Reno5" />
          <div className="heightlabel">
            <label className="installment">{laptophot.chuongtrinh}<b>{laptophot.laisuat}%</b></label>
          </div>
          <h3>{laptophot.ten}</h3>
          <div className="price">
                <strong><NumberFormat value={laptophot.giaban-(laptophot.giaban*laptophot.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={laptophot.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{laptophot.phantramgiam}%</i>
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

export default FileLapTopHot;