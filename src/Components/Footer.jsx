/* eslint-disable */

import React from "react";

const Footer = () =>{
    <>
          <footer id="footer-part">
        <div className="footer-top pt-40 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-about mt-40">
                            <div className="logo">
                                <a href="#"><img src="images/logo-2.png" alt="Logo" /></a>
                            </div>
                            <p>Helping learners find, start and complete online courses that is tied to their individual competencies, preferences and realities.</p>
                            <ul className="mt-20">
                                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

					<div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="footer-link mt-40">
                            <div className="footer-title pb-25">
                                <h6></h6>
                            </div>
                            <ul>

                            </ul>
                            <ul>

                            </ul>
                        </div>
                    </div>

					<div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-link mt-40">
                            <div className="footer-title pb-25">
                                <h6>Sitemap</h6>
                            </div>
                            <ul>
                                <li><a href="index.php"><i className="fa fa-angle-right"></i>Home</a></li>
                                <li><a href="courses.php"><i className="fa fa-angle-right"></i>Courses</a></li>
								<li><a href="about.php"><i className="fa fa-angle-right"></i>About Us</a></li>
								<li><a href="contact.php"><i className="fa fa-angle-right"></i>Contact Us</a></li>
                            </ul>
                            <ul>
                                <li><a href="user_signin.php"><i className="fa fa-angle-right"></i>Sign In</a></li>
                                <li><a href="user_signup.php"><i className="fa fa-angle-right"></i>Sign Up</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-link support mt-40">
                            <div className="footer-title pb-25">
                                <h6>Admin</h6>
                            </div>
                            <ul>
                                <li><a href="admin_signin.php"><i className="fa fa-user"></i>Admin</a></li>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div className="footer-copyright pt-10 pb-25">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="copyright text-md-left text-center pt-15">
                            <small><p><a target="_blank" href="https://www.theballooninc.com"><span style="color:#f58824">Powered by The Ball<span style="color:#f9c116">oo</span>n, Inc.</span></a> </p></small>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="copyright text-md-right text-center pt-15">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>



    <a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>
    </>
}
export default Footer;