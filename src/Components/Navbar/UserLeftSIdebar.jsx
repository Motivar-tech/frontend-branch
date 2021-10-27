  /* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserLeftsidebar extends Component {
  render() {
    return (
      <>
      <aside id="leftsidebar" className="sidebar">
      <div className="navbar-brand">
          <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
          <Link href="/"><img src="dash/assets/images/logo.png" width="25" alt="Motivar" /><span className="m-l-10">Motivar</span></Link>
      </div>
      <div className="menu">
          <ul className="list">
              <li>
                  <div className="user-info">
                      <a className="image" href="user_profile.php"><img src="dash/assets/images/profile_av.jpg" alt="User" /></a>
                      <div className="detail">
                          <h4>Michael</h4>
                          <small>User</small>
                      </div>
                  </div>
              </li>
              <li><Link href="/dashboard-user" className="active"><i className="zmdi zmdi-home"></i><span>Dashboard</span></Link></li>

              <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-face"></i><span>Profile</span></a>
                  <ul className="ml-menu">
                      <li><Link href="/user-profile">View Profile</Link></li>
                      <li><Link to="/auth">Log out</Link></li>

                  </ul>
              </li>

              <li><Link href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-book"></i><span>Courses</span></Link>
                  <ul className="ml-menu">
                  <li><Link href="/user-profile">Start a course</Link></li>
                      <li><Link to="/auth">View all Courses</Link></li>

                  </ul>
              </li>

          </ul>
      </div>
  </aside>
      </>
    );
  }
}
