import React, { Component } from 'react';
import Service from '../services/Service';
class FileSaleSlide extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                saleslides: []
        }
    }
    componentDidMount(){
        Service.getSaleSlides().then((res) => {
              this.setState({ saleslides: res.data});
          });
      }
    render() {
        return (
            <div id="sync2">
                   {
                this.state.saleslides.map(
                    saleslides =>      
                         <div className="item">
                            <h3>
                            {saleslides.ten}<br />{saleslides.mieuta}
                            </h3>
                            <i className="arrowbar" />
            </div>
            )}</div>
        );
    }
}

export default FileSaleSlide;