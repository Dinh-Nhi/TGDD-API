import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import Head from '../share/Head';
import Youtube from './App';
import Header from './../share/Header';
import Footer from '../share/Footer';

class TrangTinTuc extends Component {
  constructor(props) {
    super(props)

    this.state = {
            tintucchinh: [],
            tintuc: [],
            phone: [],
            tingame: [],
            ytb: []
         
    }
}
componentDidMount(){
    Service.getTinTucChinh().then((res) => {
          this.setState({ tintucchinh: res.data});
      });
      Service.getProdyctsPhone().then((res) => {
        this.setState({ phone: res.data});
    });
    Service.getYoutube().then((res) => {
      this.setState({ ytb: res.data});
  });
      Service.getTinTuc().then((res) => {
        this.setState({ tintuc: res.data});
    });
    Service.getTinGame().then((res) => {
      this.setState({ tingame: res.data});
  });
  }
    render() {
        return (
          <div>
          <Head/>
          <Header/>
            <div className="trangtintuc">
   
      <div className="application">
        <div className="col-md-5 boder">
          <div className="ttl-main">
          
          
          </div>
          <div className="col1__ct col-ml-6">
          <div>
            {
          this.state.tintucchinh.map(
            tintucchinh => 
      <a href={"/chi-tiet-tin-tuc/"+tintucchinh.id} className="col1-big">
      <div className="col1-big-img">
       <img src={`/images/tintuc/${tintucchinh.anh}`} className="img-bg" />
      </div>
      <p className="col1-title">{tintucchinh.ten}<br/>
   
      </p>
               
    </a>
          )}
      
                        
                       
    </div>
          
          </div>
        </div>

        <div className=" col-md-7 boder">
          <br/>
        <div id="sync1">
            {
                this.state.ytb.map(
                  ytb => 
            <div  className="item">
                
                <iframe width="100%" height="300px" src={ytb.ytbrivew} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
             
                
                </div>
                )}
                </div>
      
      </div>


     </div>
  





    <div className="row">

  
    <div className="col-8 card card-deal">    
    <ul class="navbar-nav">
{
          this.state.tintuc.map(
              tintuc =>   
              <li class="nav-item dropdown border-bottom">
    <div className="game__item nav-link nav-item dropdowns">
 
   <div className="game-box-wrap">    
 
               <img src={`/images/tintuc/${tintuc.anh}`} width="225px" height="150px"/>         
      <div style={{marginLeft:"10px"}} class="game-box-main">
      <a href={"/chi-tiet-tin-tuc/"+tintuc.id}>
     <h3 class="game-title">{tintuc.ten}</h3>
     </a>
                          <div class="game-label">
                             <div className="spl-item__content">
                
                  <p className="spl-item-title">{tintuc.chitiet}</p>
               
                </div>    
                          </div>
                      </div>
    </div>
  

</div>
<br/>
 <div class="dropdown-menu dropdown-large">
        <nav class="row">
        </nav>
    </div> 
</li>

          )}
         
</ul>

</div>

<div className=" col-4  card">
{
          this.state.phone.map(
              phone => 
              <div className="game__item border-bottom  ">
            <a href={"/products/"+phone.id} >
             <div  className="game-box-wrap">
              
             
                         <img src={`/images/products/${phone.anh}`} width={80} height={70}/>
                   
                <div class="game-box-main">
               <h3 class="game-title">{phone.ten}</h3>
               <p className="text-muted">Giá:<NumberFormat value={phone.giaban} displayType={'text'} thousandSeparator={true}/>đ</p>
  <p className="text-muted">Giảm giá:<NumberFormat value={phone.phantramgiam} displayType={'text'} thousandSeparator={true}/>%</p>
      
     


      

             </div>
              </div>
            </a>
         
          </div>
          )}
           </div>
 

          
</div>
    </div>
    <Footer/>
            </div>
        );
    }
}

export default TrangTinTuc;