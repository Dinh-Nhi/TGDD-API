import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import FileLapTopHot from './FileLapTopHot';
class FileLapTop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                laptop: []
        }
    }
    componentDidMount(){
      Service.getProdyctsLAPTOP().then((res) => {
              this.setState({ laptop: res.data});
          });
      }
    render() {
        return (
            <ul className="homeproduct item2020 homepromo ">
         <FileLapTopHot/>
            <li className="empty-item" ></li>
                {
               this.state.laptop.map(
                   laptop => 
           <li data-id={222758}><a href={(`/products/${laptop.id}`)} className=" vertion2020 large" data-s={0}>
           <div className="heightlabel">
             <label className="installment">{laptop.chuongtrinh}<b>{laptop.laisuat}%</b></label>
           </div> <img width={180} height={180}
            data-original={`/images/products/${laptop.anh}`} className="lazy"
             alt={laptop.ten} />
           <h3>{laptop.ten}</h3>
           <div className="price">
                <strong><NumberFormat value={laptop.giaban-(laptop.giaban*laptop.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={laptop.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{laptop.phantramgiam}%</i>
              </div>
           <div className="ratingresult">
             <i className="icontgdd-ystar" />
              <i className="icontgdd-ystar" />
               <i className="icontgdd-ystar"  />
                <i className="icontgdd-ystar" />
                 <i className="icontgdd-gstar" /> 
                 <span>72 đánh giá</span>
           </div> <img data-original={`/images/products/anhct/${laptop.anh2}`} width={60} height={60}
            alt="icon" className="icon-imgNew cate42 lazy left" /> 
        </a></li>
        )} 
         </ul>
        );
    }
}

export default FileLapTop;