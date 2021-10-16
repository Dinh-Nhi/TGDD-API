import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import FileTabLetHot from './FileTabLetHot';
class FileTabLet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tablet: []
        }
    }
    componentDidMount(){
      Service.getProdyctsTABLET().then((res) => {
              this.setState({ tablet: res.data});
          });
      }
    render() {
        return (
            <ul className="homeproduct item2020 homepromo ">
          <FileTabLetHot/>
               <li className="empty-item" ></li>
                   {
                  this.state.tablet.map(
                      tablet => 
              <li data-id={222758}><a href={(`/products/${tablet.id}`)} className=" vertion2020 large" data-s={0}>
              <div className="heightlabel">
                <label className="installment">{tablet.chuongtrinh}<b>{tablet.laisuat}%</b></label>
              </div> <img width={180} height={180}
               data-original={`/images/products/${tablet.anh}`} className="lazy"
                alt={tablet.ten} />
              <h3>{tablet.ten}</h3>
              <div className="price">
                <strong><NumberFormat value={tablet.giaban-(tablet.giaban*tablet.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={tablet.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{tablet.phantramgiam}%</i>
              </div>
              <div className="ratingresult">
                <i className="icontgdd-ystar" />
                 <i className="icontgdd-ystar" />
                  <i className="icontgdd-ystar"  />
                   <i className="icontgdd-ystar" />
                    <i className="icontgdd-gstar" /> 
                    <span>72 đánh giá</span>
              </div> <img data-original={`/images/products/anhct/${tablet.anh2}`} width={60} height={60}
               alt="icon" className="icon-imgNew cate42 lazy left" /> 
            </a></li>
           )} 
            </ul>
        );
    }
}

export default FileTabLet;