import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatLaptop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tenlaptop: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenLAPTOP().then((res) => {
              this.setState({ tenlaptop: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
            {this.state.tenlaptop.map(
            tenlaptop => 
      <a href={tenlaptop.id}>{tenlaptop.ten}</a>
            )}
      <a href="/#" className="mobile">Xem tất cả laptop</a>
    </div>
        );
    }
}

export default DexuatLaptop;