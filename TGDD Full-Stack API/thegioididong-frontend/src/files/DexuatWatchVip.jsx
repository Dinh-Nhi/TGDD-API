import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatWatchVip extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                watchvip: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenWatchVip().then((res) => {
              this.setState({ watchvip: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
            {this.state.watchvip.map(
            watchvip => 
      <a href={watchvip.id}>{watchvip.ten}</a>
            )}
      <a href="/#" className="mobile">Xem tất cả Đồng Hồ Thông Minh</a>
    </div>
        );
    }
}

export default DexuatWatchVip;