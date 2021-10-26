/* eslint-disable*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthFormImage from '../AuthFormImage'

export default class Authform extends Component {
  render() {
    return (
      <>
            <div className="authentication">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <form className="card auth_form">
                                <div className="header">
                                    <img className="logo" src="dash/assets/images/logo2.png" alt="" />
                                    <h5>User Log In</h5>
                                </div>
                                <div className="body">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Fullname" />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="zmdi zmdi-account-circle"></i></span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="zmdi zmdi-lock"></i></span>
                                        </div>

                                    </div>
                                    <div className="input-group-append">
                                        <Link to="/forgot-password" className="forgot" title="Forgot Password">Forgot Password</Link>
                                        </div>
                                    <Link to="/dashboard" className="btn btn-primary btn-block waves-effect waves-light">SIGN IN </Link>
                                    <div className="signin_with mt-3">
                                        <p className="mb-0">or Sign Up using</p>

                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round google"><i className="zmdi zmdi-google-plus"></i></button>

                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round twitter"><i className="zmdi zmdi-linkedin"></i></button>

                                    </div>
                                </div>
                            </form>
                            <div className="copyright text-center">
                                &copy;
                                <span><a href="https://www.theballooninc.com">The Balloon, Inc.</a></span>
                            </div>
                        </div>
                        <AuthFormImage />
                    </div>
                </div>
            </div>
      </>
    );
  }
}
