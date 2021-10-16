import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileSpCu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                spcu: []
        }
    }
    componentDidMount(){
        Service.getSpCu().then((res) => {
              this.setState({ spcu: res.data});
          });
      }
    render() {
        return (
            <div id="owl-promo-old" className="owl-carousel homepromo">
{
this.state.spcu.map(
   spcu => 
<div className="item">
<a href={(`/products/${spcu.id}`)}>
<img width={150} height={150}
 alt={spcu.ten} className="lazy" 
data-original={`/images/products/${spcu.anh}`} />

<h3>{spcu.ten}</h3>
<div className="oldprice">
  <span>Giá từ: </span> <NumberFormat value={spcu.giaban} displayType={'text'} thousandSeparator={true}/>₫ 


</div>
</a>
</div>
     
                  )}  </div>
        );
    }
}

export default FileSpCu;