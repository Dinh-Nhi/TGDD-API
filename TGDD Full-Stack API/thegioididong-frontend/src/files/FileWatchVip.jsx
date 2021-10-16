import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileWatchVip extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                watchvip: []
        }
    }
    componentDidMount(){
      Service.getWatchVip().then((res) => {
              this.setState({ watchvip: res.data});
          });
      }
    render() {
        return (
            <div className="owl-carousel homepromo swatch item2020" style={{height: 'auto'}}>
                 {
                this.state.watchvip.map(
                    watchvip => 
            <div className="item">
                 <a href={(`/products/${watchvip.id}`)} className=" vertion2020 large" data-s={0}>
                   <div className="heightlabel">
                     <label className="installment">{watchvip.chuongtrinh} <b>{watchvip.laisuat}%</b></label>
                   </div> <img width={180} height={180}
 data-original={`/images/products/${watchvip.anh}`} 
  className="lazy" alt={watchvip.ten} />
                  
                   <h3>{watchvip.ten}</h3>
                   {/* <div className="props">
                     <span className="dotted ">{watchvip.thongtin1}</span> <span className="dotted ">
                     {watchvip.thongtin2}</span>
                   </div> */}
                   <div className="price">
                <strong><NumberFormat value={watchvip.giaban-(watchvip.giaban*watchvip.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={watchvip.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{watchvip.phantramgiam}%</i>
              </div>
                   <div className="promo noimage">
                    
                   </div>
                   <div className="ratingresult">
                     <i className="icontgdd-ystar" /> <i className="icontgdd-ystar" />
                      <i className="icontgdd-ystar" /> <i className="icontgdd-ystar" />
                       <i className="icontgdd-gstar" /> <span>56 đánh giá</span>
                       
                   </div> 
             <img data-original={`/images/products/anhct/${watchvip.anh2}`} width={45} height={45}
             alt="icon" className="icon-imgNew cate42 lazy left" /> 
                   </a>
               </div>
  
                  )}  </div>
        );
    }
}

export default FileWatchVip;