import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatWatch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                watch: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenWatch().then((res) => {
              this.setState({ watch: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
            {this.state.watch.map(
            watch => 
      <a href={watch.id}>{watch.ten}</a>
            )}
      <a href="/#" className="mobile">Xem tất cả Đồng Hồ</a>
    </div>
        );
    }
}

export default DexuatWatch;