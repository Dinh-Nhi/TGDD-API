import React, { Component } from 'react';
import FilePhone from '../files/FilePhone';
import FileProductsSale from '../files/FileProductsSale';
import FileSaleSlide from '../files/FileSaleSlide';
import FileSlides from '../files/FileSlides';
import FilePhuKien from '../files/FilePhuKien';
import FileWatchVip from '../files/FileWatchVip';
import FileSpCu from '../files/FileSpCu';
import FileWatch from '../files/FileWatch';
import FileLapTop from '../files/FileLapTop';
import FileTabLet from '../files/FileTabLet';
import './Home.css';
import DexuatPhone from '../files/DexuatPhone';
import DexuatLaptop from '../files/DexuatLaptop';
import DexuatTablet from '../files/DexuatTablet';
import DexuatPhukien from '../files/DexuatPhukien';
import DexuatWatch from '../files/DexuatWatch';
import DexuatWatchVip from '../files/DexuatWatchVip';
import FileTinChinh from '../files/FileTinChinh';
import FileTinGame from '../files/FileTinGame';
import Head from '../share/Head';
import Header from '../share/Header';
import Footer from '../share/Footer';

class Home extends Component {


    render() {
        return (
          <div>
            <Head/>
            <Header/>
          <div className="trangchu">
                   <section>
            <aside className="homebanner">

              <FileSlides />


              <FileSaleSlide />
            </aside>
            <aside className="homenews">
              <figure>
                <h2>
                  <a href="/tin-tuc">24h công nghệ</a>
                </h2>
                <b />
              </figure>
              <ul>
                <li><a href="/tin-tuc/tat-tan-tat-moi-thong-tin-ve-vsmart-star-5-1341299">
                  <img width={100} height={70} src="https://cdn.tgdd.vn/Files/2021/04/06/1341299/thumb_star5-_6000x3376-100x100.jpg" alt="Tất Tần Tật: Mọi thứ về Vsmart Star 5 - Từ đánh giá chi tiết nhiều yếu tố, mẹo sử dụng đến những lý do vì sao bạn nên chọn mua Vsmart Star 5" />
                  <h3>Tất Tần Tật: Mọi thứ về Vsmart Star 5 - Từ đánh
                    giá chi tiết nhiều yếu tố, mẹo sử dụng đến những lý do
                    vì sao bạn nên chọn mua Vsmart Star 5</h3> <span>23
                      phút trước</span>
                </a></li>
              </ul>
              <div className="twobanner ">
                <a aria-label="slide" data-cate={0} data-place={1158} href="https://www.thegioididong.com/khuyen-mai-soc/series-a" onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=42143&r='+ (new Date).getTime(), async: true, cache: false });"><img style={{ cursor: 'pointer' }} src="https://cdn.tgdd.vn/2021/04/banner/398-110-398x110-1.png" alt="A02" width={398} height={110} /></a> <a aria-label="slide" data-cate={0} data-place={1158} href="#" onclick="jQuery.ajax({ url: 'https://www.thegioididong.com/bannertracking?bid=41872&r='+ (new Date).getTime(), async: true, cache: false });"><img style={{ cursor: 'pointer' }} src="https://cdn.tgdd.vn/2021/04/banner/398-110-398x110.png" alt="#" width={398} height={110} /></a>
              </div>
            </aside>
            <div className="clr" />
            <div className>
              <div className="navigat first ">
                <h2> KHUYẾN MÃI HOT NHẤT</h2>
              </div>
              <FileProductsSale />


            </div>
            <div className="navigat cate42">
              <h2>Điện thoại MỚI NHẤT</h2>
           <DexuatPhone/>
            </div>
            <FilePhone />
            <div className="navigat cate44">
              <h2>Laptop MỚI NHẤT</h2>
             <DexuatLaptop/>
            </div>
            <FileLapTop />












            <div className="navigat cate42">
              <h2>Tablet MỚI NHẤT</h2>
<DexuatTablet/>
            </div>

            <FileTabLet />








            <div className="navigat acc1">
              <h2>Phụ kiện giá rẻ</h2>
             <DexuatPhukien/>
            </div>
            <FilePhuKien />
            <div className="navigat cateWatch cate7077">
              <h2>Đồng hồ thông minh</h2>
          <DexuatWatchVip/>
            </div>
            <FileWatchVip />
            <div className="navigat cateWatch cate7264">
              <h2>Đồng hồ thời trang</h2>
              <DexuatWatch/>
            </div>
            <FileWatch />

            <div className="navigat old">
              <h2>Máy cũ nổi bật</h2>
              <div className="viewallcat">
                <a href="/may-doi-tra/dien-thoai" title="Điện thoại cũ" target="_blank">Điện thoại cũ</a> <a href="/may-doi-tra/may-tinh-bang" title="Tablet cũ" target="_blank">Tablet
                  cũ</a> <a href="/may-doi-tra/laptop" title="Laptop cũ" target="_blank">Laptop
                    cũ</a> <a href="/may-doi-tra/dong-ho-thong-minh" title="Đồng hồ cũ" target="_blank">Đồng hồ cũ</a> <a href="/may-doi-tra/phu-kien" title="Phụ kiện cũ" target="_blank">Phụ kiện cũ</a>
              </div>
            </div>

            <FileSpCu />
          </section>
          
          <div className="application ">
              <div className="col1">
                <div className="ttl-main">
                  <h4 className="title-layout">24H CÔNG NGHỆ</h4>
                  <a href="#" className="readmore-txt blue">Xem thêm</a>
                </div>
              <FileTinChinh/>
              </div>
      
            

              <div className="col2">
  <div className="ttl-main">
    <h4 className="title-layout">GAME, ỨNG DỤNG</h4>
    <a href="#" className="readmore-txt blue">Xem thêm</a>
  </div>
  <div className="col2__ct">
<FileTinGame/>

   </div>
</div>


            </div></div>
         <Footer/>
            </div>
                  );
                }
              }
export default Home;