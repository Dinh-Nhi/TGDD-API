import React, { Component } from 'react';
import Service from '../services/Service';
import FileTinTuc from './FileTinTuc';

class FileTinChinh extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tintucchinh: []
        }
    }
    componentDidMount(){
        Service.getTinTucChinh().then((res) => {
              this.setState({ tintucchinh: res.data});
          });
      }
    render() {
        return (
            <div className="col1__ct" data-size={6}>
                  {
this.state.tintucchinh.map(
    tintucchinh => 
            <a href={"/chi-tiet-tin-tuc/"+tintucchinh.id} className="col1-big">
              <div className="col1-big-img">
                <img src={`/images/tintuc/${tintucchinh.anh}`}  className=" lazyloaded" alt={tintucchinh.ten}/>
              </div>
              <p className="col1-title">{tintucchinh.ten}</p>
              <p className="col1-hour">{tintucchinh.ngaytao}</p>
            </a>
)}
          <FileTinTuc/>
          </div>
        );
    }
}

export default FileTinChinh;