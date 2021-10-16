import React, { Component } from 'react';
import Service from '../services/Service';
import Footer from '../share/Footer';
import Head from '../share/Head';
import Header from '../share/Header';
import DanhGia from './DanhGia';

class DetailTinTuc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            ttuc: {},
            tintuclienquan: [],

            
        }

       

    }
    componentDidMount(){
        Service.getTinTucLienQuan(this.state.id).then((res) => {
            this.setState({ tintuclienquan: res.data});
        });
        Service.getTintucsById(this.state.id).then( res => {
            this.setState({ttuc: res.data});
        });
      
    }
  
    render() {
        
        return (
          <div>
          <Head/>
          <Header/>
            <div className="card trangtintuc">


          <div className="row card card-deal">
        
        <div className="col-12">   
          <section className="section-content padding-y">
    <div className="container" style={{maxWidth: '720px'}}>
    <div className="card mb-4">
      <div className="card-body">
        <h1 class="titledetail" >{this.state.ttuc.ten}</h1>
        <br />
        <br />
        <div class="form-row">
        <img
                src={`/images/tintuc/${this.state.ttuc.anh }`} width="100%"/>
       </div>
        <div className="form-row">
     
                <h6>
        {this.state.ttuc.mieuta}</h6>
   
        </div>
        <div class="form-row">
        <img
                src={`/images/tintuc/${this.state.ttuc.anh2 }`} width="100%"/>
       </div>
       <div className="form-row">
     
                <h6>
        {this.state.ttuc.chitiet}</h6>
   
        </div>
        <div class="form-row">
        <img
                src={`/images/tintuc/${this.state.ttuc.anh3 }`} width="100%"/>
       </div>
       <div class="form-row">
       <DanhGia/>
       </div>
       <h5 class="titlerelate">Bài viết liên quan</h5>
       <ul className="newsrelate">
       {
                this.state.tintuclienquan.map(
                  tintuclienquan => 
         
  <li>
    <a href={"/chi-tiet-tin-tuc/"+tintuclienquan.id} className="linkimg">
      <div className="tempvideo">
        <img width={100} src={`/images/tintuc/${tintuclienquan.anh}`} />
      </div>
      <h3>{tintuclienquan.ten}
      </h3>
      <span className="timepost">1 giờ trước</span>
    </a>
  </li>
             )}

</ul>

    
     </div> {/* card-body.// */}
    </div>  {/* card .// */}

  </div> 
 
</section>
</div>




          </div>





     </div>
     <Footer/>
            </div>
     );
    }
}

export default DetailTinTuc;