import React, { Component } from 'react';
import Service from '../services/Service';

class FileTinTuc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tintuc: []
        }
    }
    componentDidMount(){
        Service.getTinTuc().then((res) => {
              this.setState({ tintuc: res.data});
          });
      }
    render() {
        
        return (
            <div className="col1-simple">
          {
this.state.tintuc.map(
    tintuc => 
            <a href={"/chi-tiet-tin-tuc/"+tintuc.id} className="spl-item">
              <div className="spl-item__img">
                <img src={`/images/tintuc/${tintuc.anh}`} className=" lazyloaded" alt={tintuc.ten} />
              </div>
              <div className="spl-item__content">
                <p className="spl-item-title">{tintuc.ten}</p>
                <p className="spl-item-hour">{tintuc.ngaytao}</p>
              </div>
            </a>
)}
          </div>
        );
    }
}

export default FileTinTuc;