import React, { Component } from 'react';
import Service from '../services/Service';
class FileSlides extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                slides: []
        }
    }

    componentDidMount(){
        Service.getSlides().then((res) => {
              this.setState({ slides: res.data});
          });
      }
    render() {
        return (
            <div id="sync1">
            {
                this.state.slides.map(
                    slides => 
            <div className="item">
                
            <a aria-label="slide" data-cate={0} data-place={212}
             href="https://www.thegioididong.com/khuyen-mai-soc/samsung-galaxy-s21" 
             onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=42213&r='+
              (new Date).getTime(), async: true, cache: false });">
 <img style={{cursor: 'pointer'}} src={`/images/slides/${slides.anh}`} alt="" width={800}height={300} />                          
                  </a>
             
                
                </div>
                )}
                </div>
        );
    }
}

export default FileSlides;