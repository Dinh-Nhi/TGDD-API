import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileProductsSale extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                productsSale: []
                
        }
    }

    componentDidMount(){
      Service.getProductsSale().then((res) => {
              this.setState({ productsSale: res.data});
          });
      }
    render() {
        return (
            <div id="owl-promo" className="owl-carousel homepromo item2020 ">
            {
                this.state.productsSale.map(
                    productsSale =>                     
            <div className="item" data-index={productsSale.id}>                                                                                            
            <a href={(`/products/${productsSale.id}`)} className="vertion2020 large">
              <div className="heightlabel">
            <label className="installment">{productsSale.chuongtrinh}</label>
              </div> <img width={180} height={180} data-original={`/images/products/${productsSale.anh}`} className="lazy" alt={productsSale.ten} />
              <aside className="result-label temp1">
                <img src={`/images/products/anhct/giam-gia.png`} width={20} height={20} alt="Giảm sốc" loading="lazy" className="lazy imgresult" /><span className="text">Giảm sốc</span>
              </aside>
              <h3>{productsSale.ten}</h3>
                                           
          
              <div className="price">
                <strong><NumberFormat value={productsSale.giaban-(productsSale.giaban*productsSale.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={productsSale.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{productsSale.phantramgiam}%</i>
              </div>
              <div class="ratingresult"><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-gstar"></i><span>72 đánh giá</span></div>
              <div className="promo noimage">
                <p>
               <b>{productsSale.quatang}</b>
                </p>
              </div>
              <img width="60" height="60" alt="icon" class="icon-imgNew cate42 left lazyloaded" src={`/images/products/anhct/${productsSale.anh3}`} />
              <img data-original={`/images/products/anhct/${productsSale.anh2}`} 
              width={45} height={45} alt="icon" className="icon-imgNew cate44 lazy left" /> 
              </a>
          </div>
                  )}  </div>
        );
    }
}

export default FileProductsSale;