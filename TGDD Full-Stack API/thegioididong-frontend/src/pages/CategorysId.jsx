import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import Footer from '../share/Footer';
import Head from '../share/Head';
import Header from '../share/Header';

class CategorysId extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.match.params.id,
          cate: [],
        }; }
        componentDidMount() {
            Service.getCategorysByid(this.state.id).then(res => {
              this.setState({ cate: res.data });
            });
        }
    render() {
        return (
          <div>
          <Head/>
          <Header/>
            <div className="seachrsp">
            <section className="wrapper seachrsp kvs sub">
          <div>
         <img className=" anhsearch" src="https://www.thegioididong.com/samsung-galaxy-z-flip-3/Content/images/i1.jpg"/>
         <div className="container">
       <a href="#" />
     </div>
             </div>
           </section>
           
             <section className="section-content padding-y">
             <div className="container backround">
            <div className="row">
             
               {
                   this.state.cate.map(
                     cate => 
                 <div className="col-md-3 khungsp">
                   <figure className="card card-product-grid">
                     <div className="img-wrap"> 
                       <span className="badge badge-danger"> NEW </span>
                       <img  style={{ marginTop: "3px" }} src={`/images/products/${cate.anh}`} />
                     </div> {/* img-wrap.// */}
                     <figcaption className="info-wrap">
                       <a href="#" className="title mb-2">{cate.ten}</a>
                       <div className="price">
                 <strong><NumberFormat value={cate.giaban-(cate.giaban*cate.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={cate.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{cate.phantramgiam}%</i>
               </div>
                    <hr />
                   
                       <label className="custom-control mb-3 custom-checkbox">
                         <input type="checkbox" className="custom-control-input" />
                         <div className="custom-control-label">Thêm so sánh
                         </div>
                       </label>
                       <a href="#" className="btn btn-outline-primary"> <i class="icontgdd-cart"></i> Mua ngay</a>	
                     </figcaption>
                   </figure>
                 </div>
                
                   )}
 
 
          </div> {/* row end.// */}
        
             </div> {/* container .//  */}
           </section>
           </div>
           <Footer/>
            </div> 
        );
    }
}

export default CategorysId;