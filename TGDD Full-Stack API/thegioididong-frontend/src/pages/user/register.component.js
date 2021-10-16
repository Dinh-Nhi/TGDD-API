import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import authService from "./auth.service";
import Head from "../../share/Head";
import Header from './../../share/Header';
import Footer from './../../share/Footer';
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Vui lòng điền đầy đủ thông tin!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
       Vui lòng nhập Email!
      </div>
    );
  }
};

const vusername = (value) => {
  if ( value.length > 5) {
    return (
      <div className="alert alert-danger" role="alert">
      Tài khoản tối đa 5 kí tự!
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
      Mật khẩu tối thiểu 6 kí tự!
      </div>
    );
  }
};
const vaddress = (value) => {
  if (value.length < 6 || value.length > 300) {
    return (
      <div className="alert alert-danger" role="alert">
      Vui lòng nhập đầy đủ địa chỉ!
      </div>
    );
  }
};
const vphone = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
      Vui lòng nhập số điện thoại!
      </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService
        .register(this.state.username, this.state.email, this.state.password,this.state.address,this.state.phone)
        .then(
          (response) => {
            this.setState({
              message: response.data.message,
              successful: true,
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
    }
  }

  render() {
    return (
      <div>
      <Head/>
      <Header/>
      <div className="trangchu">
        <section className="section-content">
          {/* ============================ COMPONENT REGISTER   ================================= */}
          <div
            className="card mx-auto"
            style={{ maxWidth: "520px", marginTop: "40px",backgroundColor:"white",color:"black" }}
          >

            <article className="card-body">
            <h4 className="card-title mb-4 title" style={{textAlign:"center",color:"black"}}>ĐĂNG KÝ</h4>
             
              <Form
                onSubmit={this.handleRegister}
                ref={(c) => {
                  this.form = c;
                }}
              >
                {!this.state.successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Tên đăng nhập</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required, vusername]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Mật khẩu</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required, vpassword]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Địa chỉ</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="address"
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        validations={[required, vaddress]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        validations={[required, vphone]}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-dark btn-block">
                       Đăng kí
                      </button>
                    </div>
                  </div>
                )}

                {this.state.message && (
                  <div className="form-group">
                    <div
                      className={
                        this.state.successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
            </article>
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
          <p className="text-center mt-4">
          Bạn đã có tài khoản!! <a href="/login">Đăng nhập</a>
          </p>
          <br />
          <br />
          {/* ============================ COMPONENT REGISTER  END.// ================================= */}
        </section>
      </div>
      <Footer/>
            </div>
    );
  }
}
