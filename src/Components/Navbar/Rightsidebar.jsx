/* eslint-disable */

import React, { Component } from 'react';

export default class Rightsidebar extends Component {
  render() {
    return (
      <>

    <div id="search">
        <button id="close" type="button" className="close btn btn-primary btn-icon btn-icon-mini btn-round">x</button>
        <form action="" method="">
            <input type="search" value="" placeholder="Search..." />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    </div>

      <div className="navbar-right">
        <ul className="navbar-nav">
            <li><a href="#search" className="main_search" title="Search..."><i className="zmdi zmdi-search"></i></a></li>

            <li><a href="javascript:void(0);" className="js-right-sidebar" title="Setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
            <li><a href="admin_logout.php" className="mega-menu" title="Sign Out"><i className="zmdi zmdi-power"></i></a></li>
        </ul>
    </div>


         <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs sm">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments"></i></a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="setting">
                            <div className="slim_scroll">
                                <div className="card">
                                    <h6>Theme Option</h6>
                                    <div className="light_dark">
                                        <div className="radio">
                                            <input type="radio" name="radio1" id="lighttheme" value="light" checked="" />
                                            <label for="lighttheme">Light Mode</label>
                                        </div>
                                        <div className="radio mb-0">
                                            <input type="radio" name="radio1" id="darktheme" value="dark" />
                                            <label for="darktheme">Dark Mode</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <h6>Color Skins</h6>
                                    <ul className="choose-skin list-unstyled">
                                        <li data-theme="purple"><div className="purple"></div></li>
                                        <li data-theme="blue"><div className="blue"></div></li>
                                        <li data-theme="cyan"><div className="cyan"></div></li>
                                        <li data-theme="green"><div className="green"></div></li>
                                        <li data-theme="orange"><div className="orange"></div></li>
                                        <li data-theme="blush" className="active"><div className="blush"></div></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </aside>
      </>
    );
  }
}
