import React, { Component } from 'react';
import Service from '../services/Service';
class FileCategorys extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                categorys: []
        }
    }
    componentDidMount(){
        Service.getCategorys().then((res) => {
              this.setState({ categorys: res.data});
          });
      }
    render() {
        return (
            <nav>{
                this.state.categorys.map(
                  categorys => 
                  <a href={(`/categorys/${categorys.id}`)} className={categorys.iclass} title={categorys.title}>
                    <i className={categorys.icon} /><b>{categorys.ten}</b>
                  </a>
                )}
                </nav>
        );
    }
}

export default FileCategorys;