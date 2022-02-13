import React, { Component } from 'react';
import FileCategorys from '../files/FileCategorys';
import authService from '../pages/user/auth.service';
import Seach from './Seach';
import {
  total,
  list,
  quantity,
  add,
  remove,
  onChange,
} from "cart-localstorage";
const totalOrder=localStorage.getItem("count_order");
const tong = total();
var tongsp = list().length;
const userid = JSON.parse(localStorage.getItem("user"));
class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      carts: list(),

    };
  }
  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    authService.logout();
  }

    render() {
      const { currentUser } = this.state;
        return (
            <header>
            <div className="wrap-main">
              <a className="logo " title="Về trang chủ Thegioididong.com" href="/" aria-label="logo">
                <i className="icontgdd-logo" />
              </a>
              <div className="h-province dt  scenario1" data-scenario={1} data-sv="TGDD112">
                <span>Xem giá, khuyến mãi tại</span>
                <div>  
                  <b id="h-provincename" data-provinceid={3} onclick="OpenProvince($(this))">Hồ Chí Minh</b>
                  <div style={{display: 'none'}}>
                    <b>Chọn tỉnh thành để xem chính xác giá và khuyến mãi</b>
                    <span>
                      <input type="text" name="h-key" onkeydown="SearchProvince(this)" placeholder="Nhập tỉnh thành để tìm nhanh" autoComplete="off" />
                      <i className="icontgdd-topsearch" />
                    </span>
              </div>
                  <div className="choose-province" style={{display: 'none'}}>
                    <span>Hãy chọn địa chỉ cụ thể để chúng tôi cung cấp chính xác giá và khuyến mãi.</span>
                    <a href="javascript:;" onclick="CloseChooseProvince($(this));">Đóng</a>
                    <a href="javascript:;" onclick="$(this).parent().hide();$('header .h-province>div>b').trigger('click');">Chọn địa chỉ</a>
                  </div>
                </div>
              </div>
              <div className="h-loading hide"><div><div className="csdot" /><div className="csdot" /><div className="csdot" /></div></div>
            
            

<Seach/>











              <div className="menu-info">
                <a href="/gio-hang" className="a1"><i className="icontgdd-cart" />
                <span>Giỏ hàng({tongsp})</span></a>
                <a href="/lich-su-mua-hang" className="a2">LỊCH SỬ MUA HÀNG</a>
                <a id="b_41596" title="Vinaphone Tặng 20% giá trị nạp thẻ - 09/04" href="https://www.thegioididong.com/sim-so-dep?active=vinaphone" className="liveevent card" target="_blank" rel="noopener"><span id="dot"><span className="ping" /></span><span className="text"><strong>Vinaphone TẶNG 20%</strong> giá trị thẻ nạp - 09/10</span></a>
               <div>
                  <a href="/tin-tuc" className="mn-new">24h<br />Công nghệ</a>           
                 
                </div> 
                
                {currentUser ? (
<ul><li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Xin chào: {currentUser.username}</a>
	        
          
          {(() =>
                                         { if (currentUser.roles != 'ROLE_USER')
                                          {
                                               return (
                           
          <div class="dropdown-menu dropdown-menu-right">
              <div> <a href={"/admin" }>ADMIN</a></div>
          <div> <a href={"/info-user" }>Quản lý tài khoản</a></div>
            <div><a href="" onClick={this.logOut}>Đăng xuất</a></div>
           </div>
                                               ) }
                                               else 
                                               {
                                                    return (
                                           
          <div class="dropdown-menu dropdown-menu-right">
          <div> <a href={"/info-user" }>Quản lý tài khoản</a></div>
            <div><a href="" onClick={this.logOut}>Đăng xuất</a></div>
           </div>
                                                        
                                                        ) } })()}

	    
      
      
      
        </li></ul>
                  ) : (
                    <ul><li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="iconnews-ava-default"></i>Tài khoản</a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <div><a href="/login">Đăng nhập</a></div>
                  
                           <div> <a href="/register">Đăng kí</a></div>
                    </div>
                  </li></ul>
                  )}













              </div>
            </div>
            <div className="clr" />
            <div className="wrap-nav">
           <FileCategorys/>
            
            </div>
          </header>
          
        );
    }
}

export default Header;