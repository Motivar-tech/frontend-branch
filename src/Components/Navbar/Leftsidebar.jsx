/* eslint-disable */

import React, { Component } from 'react';

export default class Leftsidebar extends Component {
  render() {
    return (
      <>
         <aside id="leftsidebar" className="sidebar">
                    <div className="navbar-brand">
                        <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
                        <a href="index.php"><img src="dash/assets/images/logo.png" width="25" alt="Motivar" /><span className="m-l-10">Motivar</span></a>
                    </div>
                    <div className="menu">
                        <ul className="list">
                            <li>
                                <div className="user-info">
                                    <a className="image" href="admin_profile.php"><img src="dash/assets/images/profile_av.jpg" alt="User" /></a>
                                    <div className="detail">
                                        <h4>Michael</h4>
                                        <small>Super Admin</small>
                                    </div>
                                </div>
                            </li>
                            <li><a href="" className="active"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a></li>

                            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-face"></i><span>Profile</span></a>
                                <ul className="ml-menu">
                                    <li><a href="admin_profile.php">View Profile</a></li>
                                    <li><a href="admin_logout.php">Log out</a></li>

                                </ul>
                            </li>

                            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>Users</span></a>
                                <ul className="ml-menu">
                                    <li><a href="user_signup.php">Register A User</a></li>
                                    <li><a href="user_list.php">View All Users</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </aside>
      </>
    );
  }
}
