import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import authService from "./auth.service";
import Head from "../../share/Head";
import Header from './../../share/Header';
import Footer from './../../share/Footer';
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bắt buộc nhập !!!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div>
      <Head/>
      <Header/>
      <div className="trangchu tranglogin" >
        {/* ========================= SECTION CONTENT ========================= */}
        <section className="section-content">
          {/* ============================ COMPONENT LOGIN   ================================= */}
          <div
            className="card mx-auto"
            style={{ maxWidth: "380px"}}
          >
            <div className="card-body"style={{backgroundColor:"white",color:"black"}}>
              <h4 className="card-title mb-4 title" style={{textAlign:"center",color:"black"}}>ĐĂNG NHẬP</h4>
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Tên đăng nhập</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
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
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-dark btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <div style={{backgroundColor:"dark",color:"white"}}>Đăng nhập</div>
                  </button>
                </div>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
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
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
          <p className="text-center mt-4">
           Bạn đã có tài khoản chưa? <a href="/register">Đăng kí</a>
          </p>
          <br />
          <br />
          {/* ============================ COMPONENT LOGIN  END.// ================================= */}
        </section>
      
      </div>
     <Footer/>
     </div>
  );
  }
}
