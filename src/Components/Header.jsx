/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 return(
     <>
        <header id="header-part">

       <div className="header-top d-none d-lg-block">
           <div className="container">
               <div className="row">
                   <div className="col-lg-6">
                       <div className="header-contact text-lg-left text-center">
                           <ul>

                               <li><a href="mailto:hello@motivar.com.ng"><img src="images/all-icon/email.png" alt="icon" /><span>hello@motivar</span></a></li>
                           </ul>
                       </div>
                   </div>

               </div>
           </div>
       </div>

       <div className="header-logo-support pt-30 pb-30">
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-4">
                       <div className="logo">
                           <Link to="/">
                               <img src="images/logo.png" alt="Logo" />
                           </Link>
                       </div>
                   </div>
                   <div className="col-lg-8 col-md-8">
                       <div className="support-button float-right d-none d-md-block">
                          <div className="support float-left">
                               <div className="icon">
                                   <img src="images/all-icon/support.png" alt="icon" />
                               </div>
                               <div className="cont">
                                   <p>Need Help? call us free</p>
                                   <span>321 325 5678</span>
                               </div>
                           </div>
                           <div className="button float-left">
                               <Link to="/signup" className="main-btn">Sign Up</Link>
                               <Link to="/auth" className="main-btn">Sign In</Link>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="navigation">
           <div className="container">
               <div className="row">
                   <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                       <nav className="navbar navbar-expand-lg">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                               <span className="icon-bar"></span>
                               <span className="icon-bar"></span>
                               <span className="icon-bar"></span>
                           </button>

                           <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                               <ul className="navbar-nav mr-auto">
                                   <li className="nav-item">
                                       <Link className="active" to="/auth">Home</Link>

                                   </li>

                                   <li className="nav-item">
                                       <Link to="/about">About Us</Link>
                                   </li>


                               </ul>
                           </div>
                       </nav>

                   </div>

               </div>
           </div>
       </div>

   </header>
     </>
 )
}
export default Header;