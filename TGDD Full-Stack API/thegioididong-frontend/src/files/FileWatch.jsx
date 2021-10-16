import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FileWatch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            watch: []
        }
    }
    componentDidMount(){
      Service.getWatch().then((res) => {
              this.setState({ watch: res.data});
          });
      }
    render() {
        return (
            <div className="owl-carousel homepromo fswatch item2020" style={{height: 'auto'}}>
                {
this.state.watch.map(
    watch => 
            <div className="item">
                  <a href={(`/products/${watch.id}`)} className=" vertion2020 large" data-s={0}>
                    <div className="heightlabel" /> <img width={180} height={180} 
data-original={`/images/products/${watch.anh}`}className="lazy" alt={watch.ten} />
                    <h3>{watch.ten}</h3>
                    {/* <div className="props">
                      <span className="dotted lower ">{watch.thongtin1}</span>
                      <span className="dotted">{watch.thongtin2}</span>
                    </div> */}
                    <div className="price">
                <strong><NumberFormat value={watch.giaban-(watch.giaban*watch.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={watch.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{watch.phantramgiam}%</i>
              </div>
                    
                    </a>
                </div>
 )} </div>
        );
    }
}

export default FileWatch;