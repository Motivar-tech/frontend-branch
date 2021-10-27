/*eslint-disable*/
import React, { Component } from 'react';
import UserLeftsidebar from '../Navbar/UserLeftSIdebar';

class UserProfile extends Component {
    render() {
        return (
           <>
                    <UserLeftsidebar />
                    <section className="content">
                        <div className="body_scroll">
                            <div className="block-header">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-sm-12">
                                        <h2>User Profile</h2>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home"></i> Motivar</a></li>

                                            <li className="breadcrumb-item active">Profile</li>
                                        </ul>
                                        <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                                    </div>
                                    <div className="col-lg-5 col-md-6 col-sm-12">
                                        <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                                        <a href="profile-edit.html" className="btn btn-info btn-icon float-right"><i className="zmdi zmdi-edit"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="card mcard_3">
                                            <div className="body">
                                                <a href="user_profile.php"><img src="dash/assets/images/profile_av.jpg" className="rounded-circle shadow " alt="profile-image" /></a>
                                                <h4 className="m-t-10">Mr Joe</h4>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="social-links list-unstyled">
                                                            <li><a title="facebook" href="javascript:void(0);"><i className="zmdi zmdi-facebook"></i></a></li>
                                                            <li><a title="twitter" href="javascript:void(0);"><i className="zmdi zmdi-twitter"></i></a></li>
                                                            <li><a title="instagram" href="javascript:void(0);"><i className="zmdi zmdi-instagram"></i></a></li>
                                                        </ul>
                                                        <p className="text-muted">34 Falcon, AK</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <small>Following</small>
                                                        <h5>852</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <small>Followers</small>
                                                        <h5>13k</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <small>Post</small>
                                                        <h5>234</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="body">
                                                <small className="text-muted">Email address: </small>
                                                <p>michael_dorsey@gmail.com</p>
                                                <hr />
                                                <small className="text-muted">Phone: </small>
                                                <p>+ 202-555-0191</p>
                                                <hr/>

                                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-lg-8 col-md-12">
                                        <div className="card">
                                            <div className="body">
                                                <div id="calendar"></div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="header">
                                                <h2><strong>Media</strong> Gallery</h2>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
           </>
        );
    }
}

export default UserProfile;