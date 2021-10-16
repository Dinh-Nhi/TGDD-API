import React, { Component } from 'react';
import Service from '../services/Service';

class DexuatTablet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tentablet: []
        }
    }
    componentDidMount(){
        Service.getProdyctsTenTABLET().then((res) => {
              this.setState({ tentablet: res.data});
          });
      }
    render() {
        return (
            <div className="viewallcat">
            {this.state.tentablet.map(
            tentablet => 
      <a href={tentablet.id}>{tentablet.ten}</a>
            )}
      <a href="/#" className="mobile">Xem tất cả Tablet</a>
    </div>
        );
    }
}

export default DexuatTablet;