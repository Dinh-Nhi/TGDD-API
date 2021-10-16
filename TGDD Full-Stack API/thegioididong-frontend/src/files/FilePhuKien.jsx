import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
class FilePhuKien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                phukien: []
        }
    }
    componentDidMount(){
      Service.getProdyctsPHUKIEN().then((res) => {
              this.setState({ phukien: res.data});
          });
      }
    render() {
        return (
            <div className="owl-carousel homepromo acc item2020">
                  {
                this.state.phukien.map(
                    phukien => 
            <div className="item">
              <a href={(`/products/${phukien.id}`)}
               className=" vertion2020 large" data-s={0}>
                <div className="heightlabel" /> <img width={180} height={180} 
                data-original={`/images/products/${phukien.anh}`} 
                 className="lazy" alt={phukien.ten}/>
                <h3>{phukien.ten}</h3>
                <div className="price">
                <strong><NumberFormat value={phukien.giaban-(phukien.giaban*phukien.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={phukien.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{phukien.phantramgiam}%</i>
              </div>
                <div className="ratingresult">
                  <i className="icontgdd-ystar" /> <i className="icontgdd-ystar" />
                   <i className="icontgdd-ystar" /> <i className="icontgdd-ystar" /> <i className="icontgdd-gstar" /> <span>5 đánh giá</span>
                </div>   </a>
            </div>

                 )} </div>
        );
    }
}

export default FilePhuKien;