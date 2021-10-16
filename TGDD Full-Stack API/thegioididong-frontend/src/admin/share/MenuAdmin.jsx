import React, { Component } from 'react';

class MenuAdmin extends Component {
    render() {
        return (
            <div>
            {" "}
            <div id="layoutSidetop4_top4">
              <top4
                className="sb-sidetop4 accordion sb-sidetop4-dark"
                id="sidetop4Accordion"
              >
                <div className="sb-sidetop4-menu">
                  <div className="top4">
                    <div className="sb-sidetop4-menu-heading">DANH MỤC</div>
                    <a className="top4-link" href="/all-categorys-admin/page=1">
                      <div className="sb-top4-link-icon">
                        <i className="fas fa-table" />
                      </div>
                       Loại sản phẩm
                    </a>
                    <a className="top4-link" href="/all-product-admin/page=1">
                      <div className="sb-top4-link-icon">
                      <i class="fab fa-product-hunt"></i>
                  
                      </div>
                       Sản phẩm
                    </a>
                    <a className="top4-link" href="/all-tintuc-admin/page=1">
                      <div className="sb-top4-link-icon">
                      <i class="far fa-newspaper"></i>
                      </div>
                       Tin tức
                    </a>
                    <a className="top4-link" href="/admin-order/page=1">
                      <div className="sb-top4-link-icon">
                      <i class="fas fa-shopping-bag"></i>
                      </div>
                      Đơn hàng
                    </a>
                  
                    <a className="top4-link" href="/all-users-admin/page=1">
                      <div className="sb-top4-link-icon">
                        <i className="fas fa-user" />
                      </div>
                       Tài khoản
                    </a>
                 
                  </div>
                </div>
                <div className="sb-sidetop4-footer">
                  <div className="small">Logged in as:</div>
                  Start Bootstrap
                </div>
              </top4>
            </div>
          </div>
        );
    }
}

export default MenuAdmin;