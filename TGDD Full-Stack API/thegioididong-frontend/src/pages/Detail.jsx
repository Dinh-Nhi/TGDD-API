import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Service from '../services/Service'
import DanhGia from './DanhGia';
import { add, total } from 'cart-localstorage' 
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Head from '../share/Head';
import Header from '../share/Header';
import Footer from '../share/Footer';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { empty } from 'uuidv4';
if ((localStorage.getItem("cart_id")) == null) {
  var crypto = require("crypto");
  var id_order = crypto.randomBytes(3).toString("hex");
  localStorage.setItem("cart_id", id_order);
} else {
  id_order = (localStorage.getItem("cart_id"));
}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      pro: {},
      primg: [],
      prdetal: [],
      pklienquan:[],
      catelienquan:[],
      tintuc: [], 
      id_order: localStorage.getItem("cart_id"),
      soluong: '1',
      mau: 'MD',
    };
    this.changeimage = this.changeimage.bind(this);
    this.SoluongValueChange = this.SoluongValueChange.bind(this);
    this.MauValueChange = this.MauValueChange.bind(this);
  }

  componentDidMount() {
    Service.getSanPhamLienQuan(this.state.id).then(res => {
      this.setState({ catelienquan: res.data });
    });
    Service.getPhuKienLienQuan(this.state.id).then(res => {
      this.setState({ pklienquan: res.data });
    });
    Service.getTinTuc().then((res) => {
      this.setState({ tintuc: res.data });
    });
    Service.getProductsDetailImgById(this.state.id).then(res => {
      this.setState({ primg: res.data });
    });
    Service.getProductsDetailId(this.state.id).then(res => {
      this.setState({ prdetal: res.data });
    });
    Service.getProductsById(this.state.id).then((res) => {
      let pro = res.data;
      this.setState({
        anh: pro.anh,
        pro: res.data,
      });
    });
  }
  changeimage(change) {
    this.setState({ anh: change });
  }
  SoluongValueChange(e) {
    const value = e.target.value;
    this.setState({ soluong: value });
  }
  MauValueChange(e) {
    const value = e.target.value;
    this.setState({ mau: value });
  }
  submit = (id,id_order, ten,giaban, phantramgiam, giathat, anh, e) => {
    const x = this.state.soluong;
    const y = this.state.mau;
    const name = this.state.pro.ten;
    confirmAlert({
      message: 'Th??m v??o gi??? h??ng th??nh c??ng_'+ name + '_S??? l?????ng:' + x +  '_M??u:' +y,
      buttons: [
        {
          label: 'OK',
          onClick: () => this.AddCart(id,id_order, ten,giaban, phantramgiam,giathat, anh, e),

        },
       
      ]
    });
  };
  AddCart(id,id_order, ten,giaban, phantramgiam, giathat, anh,  e) {
    const myproduct = {id: id,id_order:id_order, ten: ten,giaban: giaban, phantramgiam:phantramgiam, price: giathat, anh:anh, mau:this.state.mau}
    const quan = Number(this.state.soluong);
   
    add(myproduct, quan);
    window.location.reload(false);
  }

  render() {
   const giathat = (this.state.pro.giaban - (this.state.pro.giaban * this.state.pro.phantramgiam) / 100);
    return (
      <div>
      <Head/>
      <Header/>
      <div className="trangchu">
        <section className="section-content bg-white padding-y">
          <div className="container">
            <div className="row">
              <aside className="col-md-6">
                <div className="card">
                  <article className="gallery-wrap">
                    <div className="img-big-wrap">
                      <div>
                        {" "}
                        <TransformWrapper>
                          <TransformComponent>
                            <img src={`/images/products/${this.state.anh}`} />
                          </TransformComponent>
                        </TransformWrapper>

                      </div>
                    </div>{" "}



                    <div className="thumbs-wrap">
                      {this.state.primg.map((primg) => (
                        <img
                          className="item-thumb"
                          onClick={() => this.changeimage(primg.anh)}
                          src={`/images/products/${primg.anh}`}
                          alt="logo"
                        />
                      ))}
                    </div>{" "}

                  </article>
                </div>
              </aside>





              <main className="col-md-6">
                <article className="product-info-aside">
                  <h2 className="tensp">{this.state.pro.ten}</h2>

                  <div class="box02">



                    <div class="detail-rate">

                      <p>
                        <i class="icondetail-star"></i>
                        <i class="icondetail-star"></i>
                        <i class="icondetail-star"></i>
                        <i class="icondetail-star"></i>
                        <i class="icondetail-star-dark"></i>
                      </p>

                    </div>




                  </div>
                  <span> (80 ????nh gi??)</span>

                  <div className="mb-3">

                    <var className="price h4">Gi?? ??u ????i:&nbsp;
                      <NumberFormat value={giathat} displayType={'text'} thousandSeparator={true} />???
                    </var>&#160;&#160;<i>-{this.state.pro.phantramgiam}%</i>
                  </div>
                  <div className="vnpay_qr nodelibox">
                    <br />  <div className="vnpay_qr__left">
                      <span>Nh???p m?? <b>TGDDTAO</b> gi???m th??m <b className="promo">500.000???</b> khi thanh to??n b????ng qu??t QRCode qua APP c???a ng??n h??ng. <a href="https://www.thegioididong.com/tin-tuc/mua-iphone-qua-vnpay-giam-gia-1321095" target="_blank">Xem h?????ng d???n v?? danh s??ch ng??n h??ng ??p d???ng</a></span>
                    </div>
                    <br />
                    <center>
                      <div className="vnpay_qr__right">
                        <img src={`/images/products/logo-vnp@2x.png`} width={100} height={100} />
                      </div></center>
                  </div>

                  <br />
                  <div class="pr-item">
                    <div class="divb t2" data-promotion="736915" data-group="T???ng" data-discount="0" data-productcode="9090000004500       " data-tovalue="300000">
                      <span class="nb">1</span>
                      <div class="divb-right">
                        <p><span class="red">&ensp;Mua online th??m qu??: </span>T???ng Phi???u mua h??ng 300,000?? cho Kh??ch h??ng t???i Tp.HCM</p><br />
                      </div>
                    </div>
                    <div class="divb t2" data-promotion="731291" data-group="T???ng" data-discount="0" data-productcode="7242151000462       " data-tovalue="100000">
                      <span class="nb">2</span>
                      <div class="divb-right">
                        <p>&ensp;T???ng Phi???u mua h??ng 100,000?? ??p d???ng mua th??? c??o, th??? game</p><br />
                      </div>
                    </div>
                    <div class="divb t3" data-promotion="734775" data-group="WebNote" data-discount="0" data-productcode="" data-tovalue="5000">
                      <span class="nb">3</span>
                      <div class="divb-right">
                        <p>&ensp;Gi???m gi?? 600,000?? khi tham gia thu c?? ?????i m???i</p>
                      </div>
                    </div>
                    <br /> <div class="divb t2" data-promotion="731291" data-group="T???ng" data-discount="0" data-productcode="7242151000462       " data-tovalue="100000">
                      <span class="nb">4</span>
                      <div class="divb-right">
                        <p>&ensp;T???ng Phi???u mua h??ng 100,000?? ??p d???ng mua th??? c??o, th??? game</p><br />
                      </div>
                    </div>

                  </div>




                  <center>
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label>M??u</label>
                        <select  class="form-control" onChange={this.MauValueChange}>
                          <option value="MD" selected>M???c ?????nh</option>
                          {this.state.primg.map((primg) => (
                            <option value={primg.mau}>{primg.mau}
                            </option>
                          ))}

                        </select>
                      </div>
                      <div class="form-group col-md-3">
                        <label>S??? l?????ng</label>
                        <select  class="form-control" onChange={this.SoluongValueChange}>
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10" >10</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row  mt-4">
                  <a className="btn  btn-dark" style={{ marginRight: "10px", marginTop: "4px", height: "36px" }} onClick={(e) => this.submit(this.state.pro.id,this.state.id_order, this.state.pro.ten,this.state.pro.giaban, this.state.pro.phantramgiam,giathat, this.state.pro.anh, this.state.mau)} >
                          <i style={{ color: "white" }} className="icontgdd-cart" />{" "}
                          <span style={{ color: "white" }}>Th??m v??o gi??? h??ng</span>
                        </a>
                 

                  </div>
                  </center>




              


                </article>
              </main>
            </div>
          </div>

          <div className="container bodersp">
            <div className="row">
            {(() =>
                                         { if (this.state.pro.detailanh == 0)
                                          {
                                               return (
                                                <div className="col-md-8">
                                              
                                              </div> 
                                               ) }
                                               else 
                                               {
                                                    return (
                                                     
                                                      <div className="col-md-8">
                                                      <img src={`/images/products/${this.state.pro.detailanh}`} />
                                                    </div>   
                                                        ) } })()}
           
              <aside className="col-md-4">
                <table className="table table-bordered">
                  <tbody><tr> <th colSpan={2}>TH??NG S??? K??? THU???T</th> </tr>

                    {
                      this.state.prdetal.map(
                        prdetal =>
                          <tr> <td>{prdetal.chitiet1}</td><td>{prdetal.chitiet2}</td> </tr>
                      )}
                  </tbody></table>
              </aside> 


              
            </div> 
          </div>



   






          {(() =>
                                         { if (this.state.pklienquan == null)
                                          {
                                               return (
                                                <p class="related__ttl">
                                                Ph??? ki???n th?????ng mua c??ng (??ang c???p nh???t)
                                                  
                                            </p>
                                               ) }
                                               else 
                                               {
                                                    return (
                                                     <div>
                                                      <p class="related__ttl">
                                                      Ph??? ki???n th?????ng mua c??ng
                                                          <a href="/phu-kien/dtdd/iphone-12-pro-max">Xem t???t c???</a>
                                                  </p> 
                                                   <div id="owl-promo" className="owl-carousel homepromo item2020 ">
                                                   {
                                                     this.state.pklienquan.map(
                                                       pklienquan =>
                                                         <div className="item" data-index={pklienquan.id}>
                                                           <a href={(`/products/${pklienquan.id}`)} className="vertion2020 large">
                                                             <div className="heightlabel">
                                                               <label className="installment">{pklienquan.chuongtrinh}</label>
                                                             </div> <img width={180} height={180} data-original={`/images/products/${pklienquan.anh}`} className="lazy" alt={pklienquan.ten} />
                                                             <aside className="result-label temp1">
                                                               <img src={`/images/products/anhct/giam-gia.png`} width={20} height={20} alt="Gi???m s???c" loading="lazy" className="lazy imgresult" /><span className="text">Gi???m s???c</span>
                                                             </aside>
                                                             <h3>{pklienquan.ten}</h3>
                                       
                                       
                                                             <div className="price">
                                                               <strong><NumberFormat value={pklienquan.giaban - (pklienquan.giaban * pklienquan.phantramgiam / 100)} displayType={'text'} thousandSeparator={true} />???</strong> <span> <NumberFormat value={pklienquan.giaban} displayType={'text'} thousandSeparator={true} />???</span> <i>-{pklienquan.phantramgiam}%</i>
                                                             </div>
                                                             <div class="ratingresult"><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-gstar"></i><span>72 ????nh gi??</span></div>
                                                             <div className="promo noimage">
                                                               <p>
                                                                 <b>{pklienquan.quatang}</b>
                                                               </p>
                                                             </div>
                                                             <img width="60" height="60" alt="icon" class="icon-imgNew cate42 left lazyloaded" src={`/images/products/anhct/${pklienquan.anh3}`} />
                                                             <img data-original={`/images/products/anhct/${pklienquan.anh2}`}
                                                               width={45} height={45} alt="icon" className="icon-imgNew cate44 lazy left" />
                                                           </a>
                                                         </div>
                                                     )}  
                                                     </div>
                                       </div>
                                                        ) } })()}
      


         



          <div className="container bodersp">
            <div className="row">
              <div className="col-md-8">


              {(() =>
                                         { if (this.state.pro.ytbrivew == 0)
                                          {
                                               return (
                                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZUAABM8rh6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
                                               ) }
                                               else 
                                               {
                                                    return (
                                                      <iframe width="100%" height="100%" src={this.state.pro.ytbrivew} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
                                                        ) } })()}
               
           
           
               
              </div> {/* col.// */}
              <aside className="col-md-4">
                <div className="box">
                  <center> <h4 className="tintuctrongsp">C?? th??? quan t??m</h4></center>
                  {
                    this.state.tintuc.map(
                      tintuc =>

                        <article className="media mb-3">
                          <a href="#"><img className="img-sm mr-3" src={`/images/tintuc/${tintuc.anh}`} /></a>
                          <div className="media-body">
                            <p className="mb-2"> {ReactHtmlParser(tintuc.ten)}</p>
                          </div>
                        </article>
                    )}

                </div>

              </aside> {/* col.// */}
            </div> 
          
             {/* <div className="row">
             
               <div className="col-md-4">
               <DanhGia/>
               </div>
               <div className="col-md-8 border">

               <div className="row">

               <div className="col-md-6 border">
               <div className="comment__item par" id="r-47895769">
  <div className="item-top">
    <p className="txtname">An</p>
    <p className="tickbuy">
      <i className="icondetail-tickbuy" />
      ???? mua t???i DMX
    </p>
  </div>
  <div className="item-rate">
    <div className="comment-star">
      <i className="icon-star" />
      <i className="icon-star" />
      <i className="icon-star-dark" />
      <i className="icon-star-dark" />
      <i className="icon-star-dark" />
    </div>
  </div>
   
<div className="comment-content">
    <p className="cmt-txt">Ch??i game DLS 2019 b??? v???y l?? sao ???. M??y kh??c v???n ch??i b??nh th?????ng. T???i m??y n??y v?? ch??i nh??n v???t ??en thui h???t l?? sao</p>
  </div>

  <div className="comment-content">
    <div className="cmt-img">
      <img className=" ls-is-cached lazyloaded" data-src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090055_c1c9c1dbe3c8dfc7b2bd62c35fe5fc43WYL67.jpg" alt="" onclick="goToRSlideByAttID(242022)" src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090055_c1c9c1dbe3c8dfc7b2bd62c35fe5fc43WYL67.jpg" />
    </div>
    <div className="cmt-img">
      <img className=" ls-is-cached lazyloaded" data-src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090104_c1c9c1dbe3c8dfc7b2bd62c35fe5fc430XXWR.jpg" alt="" onclick="goToRSlideByAttID(242023)" src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090104_c1c9c1dbe3c8dfc7b2bd62c35fe5fc430XXWR.jpg" />
   
  </div>

  </div>
 
</div>
</div>
              
              
<div className="col-md-6 border">
               <div className="comment__item par" id="r-47895769">
  <div className="item-top">
    <p className="txtname">An</p>
    <p className="tickbuy">
      <i className="icondetail-tickbuy" />
      ???? mua t???i DMX
    </p>
  </div>
  <div className="item-rate">
    <div className="comment-star">
      <i className="icon-star" />
      <i className="icon-star" />
      <i className="icon-star-dark" />
      <i className="icon-star-dark" />
      <i className="icon-star-dark" />
    </div>
  </div>
   
<div className="comment-content">
    <p className="cmt-txt">Ch??i game DLS 2019 b??? v???y l?? sao ???. M??y kh??c v???n ch??i b??nh th?????ng. T???i m??y n??y v?? ch??i nh??n v???t ??en thui h???t l?? sao</p>
  </div>

  <div className="comment-content">
    <div className="cmt-img">
      <img className=" ls-is-cached lazyloaded" data-src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090055_c1c9c1dbe3c8dfc7b2bd62c35fe5fc43WYL67.jpg" alt="" onclick="goToRSlideByAttID(242022)" src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090055_c1c9c1dbe3c8dfc7b2bd62c35fe5fc43WYL67.jpg" />
    </div>
    <div className="cmt-img">
      <img className=" ls-is-cached lazyloaded" data-src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090104_c1c9c1dbe3c8dfc7b2bd62c35fe5fc430XXWR.jpg" alt="" onclick="goToRSlideByAttID(242023)" src="https://cdn.tgdd.vn/comment/47895769/Screenshot_20210908_090104_c1c9c1dbe3c8dfc7b2bd62c35fe5fc430XXWR.jpg" />
   
  </div>

  </div>
 
</div>
</div>
              
          </div>    
              
              
               </div>
               </div> */}
          </div> 



          <p class="related__ttl">
           Xem th??m s???n ph???m c??ng lo???i
                <a href="/phu-kien/dtdd/iphone-12-pro-max">Xem t???t c???</a>
        </p>
          <div id="owl-promo" className="owl-carousel homepromo item2020 ">
            {
              this.state.catelienquan.map(
                catelienquan =>
                  <div className="item" data-index={catelienquan.id}>
                    <a href={(`/products/${catelienquan.id}`)} className="vertion2020 large">
                      <div className="heightlabel">
                        <label className="installment">{catelienquan.chuongtrinh}</label>
                      </div> <img width={180} height={180} data-original={`/images/products/${catelienquan.anh}`} className="lazy" alt={catelienquan.ten} />
                      <aside className="result-label temp1">
                        <img src={`/images/products/anhct/giam-gia.png`} width={20} height={20} alt="Gi???m s???c" loading="lazy" className="lazy imgresult" /><span className="text">Gi???m s???c</span>
                      </aside>
                      <h3>{catelienquan.ten}</h3>


                      <div className="price">
                        <strong><NumberFormat value={catelienquan.giaban - (catelienquan.giaban * catelienquan.phantramgiam / 100)} displayType={'text'} thousandSeparator={true} />???</strong> <span> <NumberFormat value={catelienquan.giaban} displayType={'text'} thousandSeparator={true} />???</span> <i>-{catelienquan.phantramgiam}%</i>
                      </div>
                      <div class="ratingresult"><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-ystar"></i><i class="icontgdd-gstar"></i><span>72 ????nh gi??</span></div>
                      <div className="promo noimage">
                        <p>
                          <b>{catelienquan.quatang}</b>
                        </p>
                      </div>
                      <img width="60" height="60" alt="icon" class="icon-imgNew cate42 left lazyloaded" src={`/images/products/anhct/${catelienquan.anh3}`} />
                      <img data-original={`/images/products/anhct/${catelienquan.anh2}`}
                        width={45} height={45} alt="icon" className="icon-imgNew cate44 lazy left" />
                    </a>
                  </div>
              )}  </div>


        </section>
        {/* ========================= SECTION CONTENT END// ========================= */}
      </div>
  <Footer/>
            </div>
    );
  }
}

export default Detail;