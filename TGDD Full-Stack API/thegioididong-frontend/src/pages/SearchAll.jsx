import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import Footer from '../share/Footer';
import Head from '../share/Head';
import Header from '../share/Header';
class SearchAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.match.params.keyword,
            search: [],
        };
    
    }
    componentDidMount() {
  Service.getSearch(this.state.keyword).then(res => {
            this.setState({ search: res.data });
     
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
           <div className="mb-3 boderduoi">
                <div className="form-inline">
                  <strong className="mr-md-auto">Kết quả tìm kiếm với từ khóa `{this.props.match.params.keyword}`, Có {this.state.search.length} sản phẩm tìm thấy </strong>
                  <select className="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div className="btn-group">
                    <a href="page-listing-grid.html" className="btn btn-light active" data-toggle="tooltip" title="List view"> 
                      <i className="fa fa-bars" /></a>
                    <a href="page-listing-large.html" className="btn btn-light" data-toggle="tooltip" title="Grid view"> 
                      <i className="fa fa-th" /></a>
                  </div>
                </div>
              </div>{/* sect-heading */}
              <div className="row">
            
              {
                  this.state.search.map(
                    search => 
                <div className="col-md-3 khungsp">
                  <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                      <span className="badge badge-danger"> NEW </span>
                      <img  style={{ marginTop: "3px" }} src={`/images/products/${search.anh}`} />
                    </div> {/* img-wrap.// */}
                    <figcaption className="info-wrap">
                      <a href="#" className="title mb-2">{search.ten}</a>
                      <div className="price">
                <strong><NumberFormat value={search.giaban-(search.giaban*search.phantramgiam/100)} displayType={'text'} thousandSeparator={true} />₫</strong> <span> <NumberFormat value={search.giaban} displayType={'text'} thousandSeparator={true} />₫</span> <i>-{search.phantramgiam}%</i>
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

export default SearchAll;