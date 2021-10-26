import React, { Component } from 'react';
import SignUpFormImage from '../SignUpFormImage'

class Signupform extends Component {
    render() {
        return (
            <>
                 <div className="row">
                            <div className="col-lg-5 col-sm-12">
                                <form className="card auth_form" method="post" enctype="multipart/form-data">
                                    <div className="header">
                                        <img className="logo" src="dash/assets/images/logo.png" alt="" />
                                        <h5>Create An Account</h5>
                                        <div className="signin_with mt-3">

                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round google"><i className="zmdi zmdi-google-plus"></i></button>

                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round twitter"><i className="zmdi zmdi-linkedin"></i></button>

                                        </div>

                                    </div>
                                    <div className="body">

                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Firstname" name="fullname"  required/>

                                            <input type="text" className="form-control" placeholder="Lastname" name="fullname"  required />

                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="zmdi zmdi-account-circle"></i></span>
                                            </div>
                                        </div>

                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Enter A Valid Email" name="email" required />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="zmdi zmdi-email"></i></span>
                                            </div>
                                        </div>


                                        <div className="input-group mb-3">

                                            <input type="password" className="form-control" placeholder="Password" name="password"  required />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="zmdi zmdi-lock"></i></span>
                                            </div>
                                        </div>

                                        <div className="input-group mb-3">
                                            Male<input type="radio" className="form-control" value="male" name="gender" />
                                            Female<input type="radio" className="form-control" value="female" name="gender" />

                                        </div>


                                        <a href="user_signin.php" className="btn btn-primary btn-block waves-effect waves-light">SIGN UP</a>
                                        <div className="signin_with mt-3">
                                            <a className="link" href="user_signin.php">You already have a membership?</a>
                                        </div>
                                    </div>
                                </form>
                                <div className="copyright text-center">
                                    &copy;
                                    <span><a href="https://www.theballooninc.com">The Balloon, Inc.</a></span>
                                </div>
                            </div>
                          <SignUpFormImage />
                        </div>
            </>
        );
    }
}

export default Signupform;