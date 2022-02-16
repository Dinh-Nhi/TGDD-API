import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Service from '../services/Service';
import Footer from '../share/Footer';
import Head from '../share/Head';
import Header from '../share/Header';
import moment from 'moment';
import axios from "axios";
class SearchAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            product: [],
            filters: [],
            productss: [],
            currentPage: 1,
            productsPerPage: 12,
            names: '',
            checked: false,
            // price
			minValue: 1000000,
			maxValue: 100000000,
			step: 1000000,
			firstValue: null,
			secondValue: null,
        };
    
    }
    fetchURL(currentPage) {
      currentPage -= 1;
      axios.get(`http://localhost:8080/api/v1/products?page=${currentPage}&size=${this.state.productsPerPage}`)
        .then(response => response.data)
        .then((data) => {
          this.setState({
            product: data.content,
            filters: data.content,
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            currentPage: data.number + 1,
          });
        })
    }
    componentDidMount() {
      this.fetchURL(this.state.currentPage);
    }
    componentWillMount() {
      this.setState({ firstValue: this.state.minValue, secondValue: this.state.maxValue });
    }
    handlePrice(name, event) {
      //We set the state value depending on input that is clicked
      if (name === "second") {
        let newValue = parseInt(this.state.firstValue) + parseInt(this.state.step);
        //The second value can't be lower than the first value
        if (parseInt(this.state.secondValue) > parseInt(newValue)) {
          this.setState({ secondValue: event.target.value });
        }
  
  
      } else {
        //The first value can't be greater than the second value
        if (parseInt(this.state.firstValue) < parseInt(this.state.secondValue)) {
          this.setState({ firstValue: event.target.value });
        }
  
      }
      const filter = this.state.product.filter((products) => products.pricesaleDouble <= this.state.firstValue);
      console.log(filter);
      this.setState({ filters: filter, checked: true });
    }
    renderproduct = () => {
      if (this.state.checked == false) {
        return this.state.product.filter((products) => {
          if (this.state.search == null) {
            return products
          } else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.pricesaleDouble <= this.state.price) {
            return products
          }
  
        }).map((products, key) => {
          const dd = moment(products.createdatTimestamp).format("LLLL");
          return (
            <div class="col-md-3" key={key} >
              <figure class="card card-product-grid" style={{ height: `850px` }} >
                <div class="img-wrap">
                  {/* <span class="badge badge-danger"> Mới </span> */}
                  <img src={`/resources/images/items/${products.imageString}`} alt="" />
                </div>
                {/* <!-- img-wrap.// --> */}
                <figcaption class="info-wrap" >
                  <a href={`/index=${products.idLong}`} class="h4 title mb-2 ">{products.titleString}</a>
                  <h6 ><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</h6>
                  <div class="price-wrap">
                    {/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                    <span class="h5 price" style={{ color: `red` }}>Giá: {products.pricesaleDouble}</span>
                  </div>
                  {/* <!-- price-wrap.// --> */}
  
                  {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
                 */}
                  <p class="text-muted ">{`${products.descriptionString.substring(0, 80)}... `} <a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a></p>
  
                  <hr />
  
               
                  <a href={`lien-he`} class="btn btn-outline-primary "> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>
  
                </figcaption>
  
  
              </figure>
  
  
            </div>
  
          );
        });
  
      }
      if (this.state.checked == true) {
        return this.state.filters.filter((products) => {
          if (this.state.search == null) {
            return products
          } else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
            return products
          } else if (products.pricesaleDouble <= this.state.price) {
            return products
          }
  
        }).map((products, key) => {
          const dd = moment(products.createdatTimestamp).format("LLLL");
          return (
            <div class="col-md-3" key={key} >
              <figure class="card card-product-grid" style={{ height: `850px` }} >
                <div class="img-wrap">
                  {/* <span class="badge badge-danger"> Mới </span> */}
                  <img src={`/resources/images/items/${products.imageString}`} />
                </div>
                {/* <!-- img-wrap.// --> */}
                <figcaption class="info-wrap" >
                  <a href={`/index=${products.idLong}`} class="h4 title mb-2 ">{products.titleString}</a>
                  <h6 ><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</h6>
                  <div class="price-wrap">
                    {/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                    <span class="h5 price" style={{ color: `red` }}>Giá: {products.pricesaleDouble}</span>
  
                  </div>
                  {/* <!-- price-wrap.// --> */}
  
                  {/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
                 */}
                  <p class="text-muted ">{`${products.descriptionString.substring(0, 80)}... `} <a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a></p>
  
                  <hr />
  
                
                  <a href={`lien-he`} class="btn btn-outline-primary "> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>
  
                </figcaption>
  
  
              </figure>
  
  
            </div>
  
          );
        });
      }
    }
    render() {
      var IPHONE = this.state.product.filter((products) => products.directionString.includes("IPHONE")).length;
      var SAMSUNG = this.state.product.filter((products) => products.directionString.includes("SAMSUNG")).length;
      var OPPO = this.state.product.filter((products) => products.directionString.includes("OPPO")).length;
      var XIAOMI = this.state.product.filter((products) => products.directionString.includes("XIAOMI")).length;
      var REALME = this.state.product.filter((products) => products.directionString.includes("REALME")).length;

      var less50 = this.state.product.filter((products) => products.areaString < 50).length;
      var than50 = this.state.product.filter((products) => products.areaString > 50).length;
      var less100 = this.state.product.filter((products) => products.areaString < 100).length;
      var than100 = this.state.product.filter((products) => products.areaString > 100).length;
  
   
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
        						
									<div class="col-md-12">
               
										<ul class="list-inline">
                    <li class="list-inline-item mr-3 dropdown "> <i class="fas fa-filter"></i> Bộ lọc</li>		
										
									
											<li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hãng</a>
												<div class="dropdown-menu p-3">

											
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeIPHONE}>
														<input type="checkbox" class="form-check-input" name="IPHONE" />IPHONE <b>({IPHONE})</b>
													</label>

                         
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeOPPO}>
														<input type="checkbox" class="form-check-input" name="OPPO" />OPPO <b>({OPPO})</b>
													</label>

										


													<label class="form-check" checked={this.state.checked} onChange={this.handleChangenamXIAOMI}>
														<input type="checkbox" class="form-check-input" name="XIAOMI" />XIAOMI <b>({XIAOMI})</b>
													</label>

												
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeREALME}>
														<input type="checkbox" class="form-check-input" name="REALME" />REALME <b>({REALME})</b>
													</label>

                      
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeSAMSUNG}>
														<input type="checkbox" class="form-check-input" name="SAMSUNG" />SAMSUNG <b>({SAMSUNG})</b>
													</label>
												</div>
											</li>


		<li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Sản Phẩm Khác</a>
												<div class="dropdown-menu p-3">

											
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeIPHONE}>
														<input type="checkbox" class="form-check-input" name="IPHONE" />Laptop <b>({IPHONE})</b>
													</label>

                         
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeOPPO}>
														<input type="checkbox" class="form-check-input" name="OPPO" />Tablet <b>({OPPO})</b>
													</label>

										


													<label class="form-check" checked={this.state.checked} onChange={this.handleChangenamXIAOMI}>
														<input type="checkbox" class="form-check-input" name="XIAOMI" />Tai Nghe <b>({XIAOMI})</b>
													</label>

												
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangeREALME}>
														<input type="checkbox" class="form-check-input" name="REALME" />Phụ Kiện <b>({REALME})</b>
													</label>

                      
												
												</div>
											</li>
											{/* <li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Sản Phẩm khác</a>
												<div class="dropdown-menu p-3">
													<b className="badge badge-pill badge-light float-right">{less50}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterless50}>
														<input type="checkbox" class="form-check-input"  /><i className="fas fa-angle-left"></i>Laptop
													</label>
													<b className="badge badge-pill badge-light float-right">{than50}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterthan50}>
														<input type="checkbox" class="form-check-input" /><i className="fas fa-angle-right"></i>Tablet
													</label>
													<b className="badge badge-pill badge-light float-right">{less100}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterless100}>
														<input type="checkbox" class="form-check-input"  /><i className="fas fa-angle-left"></i>Tai Nghe
													</label>
													<b className="badge badge-pill badge-light float-right">{than100}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterthan100}>
														<input type="checkbox" class="form-check-input" /><i className="fas fa-angle-right"></i>Phụ Kiện
													</label>

												</div>
											</li>
								 */}
                
                
                			<li class="list-inline-item mr-3">
												<div class="form-inline">
													<label class="mr-2">Giá</label>
													<input class=" " style={{ width: `100%` }, { cursor: `pointer` }} type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handlePrice.bind(this, "first")} />
													<b className=" badge  badge-light mt-3"><NumberFormat value={this.state.firstValue} displayType={'text'} thousandSeparator={true} /></b>
												</div>
											</li>
									
										</ul>
									</div>
								
                <div className="form-inline">
                  <strong className="mr-md-auto">Kết quả tìm kiếm với từ khóa `{this.props.match.params.keyword}`, Có {this.state.search.length} sản phẩm tìm thấy </strong>
                  <select className="mr-2 form-control">
                    <option>Xếp theo: Nổi bật</option>
                    <option>% Giảm</option>
                    <option>Giá thấp đến cao</option>
                    <option>Giá cao đến thấp</option>
                  </select>
                 
                </div>
                
              </div>
              
              <div className="row">
            	{this.renderproduct()}


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