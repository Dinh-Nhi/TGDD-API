import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatPhone extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tenphone: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenPhone().then((res) => {
              this.setState({ tenphone: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
                  {this.state.tenphone.map(
                  tenphone => 
            <a href={tenphone.id}>{tenphone.ten}</a>
                  )}
            <a href="#" className="mobile">Xem tất cả điện thoại</a>
          </div>
        );
    }
}

export default DexuatPhone;