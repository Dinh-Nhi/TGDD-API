import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatPhukien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tenpk: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenPHUKIEN().then((res) => {
              this.setState({ tenpk: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
            {this.state.tenpk.map(
            tenpk => 
      <a href={tenpk.id}>{tenpk.ten}</a>
            )}
      <a href="/#" className="mobile">Xem tất cả Phụ Kiện</a>
    </div>
        );
    }
}

export default DexuatPhukien;