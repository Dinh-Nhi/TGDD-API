import React, { Component } from 'react';
import Service from '../services/Service';

class FileTinGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                tingame: []
        }
    }
    componentDidMount(){
        Service.getTinGame().then((res) => {
              this.setState({ tingame: res.data});
          });
      }
    render() {
        return (
            <div className="game__item">
                 {
this.state.tingame.map(
    tingame => 
            <a href="#">
              <img src={`/images/tintuc/${tingame.anh}`} />
              <div className="game-box-wrap">
                 <div className="game-box-img">
                  <img src={`/images/tintuc/${tingame.anh2}`}/>
                </div> 
                <div className="game-box-main">
                  <h4 className="game-title">{tingame.ten}</h4>
                  <div className="game-label">
                    <span>{tingame.mieuta}</span>
                    <p>{tingame.chitiet}</p>
                  </div>
                </div>
              </div>
            </a>
)}
            <div className="game-box">
              <div className="game-box-list">
                <a href="#">Top 10 game thế giới mở trên PC hay, đáng chơi nhất</a>
                <a href="#">Top 10game phiêu lưu nhập vai cho PC cực hấp dẫn</a>
              </div>
            </div>
          </div>
        );
    }
}

export default FileTinGame;