/*eslint-disable*/
import React, { Component } from 'react';

class UserDashboard extends Component {
    render() {
        return (
            <>
                <section className="content">
                  <div className="block-header">
            <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>User Dashboard</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.php"><i className="zmdi zmdi-home"></i> Motivar</a></li>
                        <li className="breadcrumb-item"><a href="admin_dashboard.php">Dashboard</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ul>
                    <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                </div>
            </div>
        </div>

            

        <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body xl-blue">
                            <h4 className="mt-0 mb-0">8</h4>
                            <p className="mb-0">All Courses</p>
                            <div className="sparkline" data-type="line" data-spot-Radius="1" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#222"
                            data-min-Spot-Color="rgb(233, 30, 99)" data-max-Spot-Color="rgb(0, 150, 136)" data-spot-Color="rgb(0, 188, 212)"
                            data-offset="90" data-width="100%" data-height="40px" data-line-Width="2" data-line-Color="#FFFFFF"
                            data-fill-Color="transparent"> 7,6,7,8,5,9,8,6,7 </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body xl-purple">
                            <h4 className="mt-0 mb-0">5 </h4>
                            <p className="mb-0 ">Completed</p>
                            <div className="sparkline" data-type="line" data-spot-Radius="1" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#222"
                            data-min-Spot-Color="rgb(233, 30, 99)" data-max-Spot-Color="rgb(0, 150, 136)" data-spot-Color="rgb(0, 188, 212)"
                            data-offset="90" data-width="100%" data-height="42px" data-line-Width="2" data-line-Color="#FFFFFF"
                            data-fill-Color="transparent"> 6,5,7,4,5,3,8,6,5 </div>
                        </div>
                    </div>
                </div>

            </div>

			<div className="row clearfix">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Skillset</strong> Progress</h2>
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">Edit</a></li>
                                        <li><a href="javascript:void(0);">Delete</a></li>
                                        <li><a href="javascript:void(0);">Report</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div id="chart-donut" style={{height: "17rem"}}></div>

                                </div>

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

export default UserDashboard;