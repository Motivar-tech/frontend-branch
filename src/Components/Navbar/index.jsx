/* eslint-disable */
import React from "react";
import Sidebar from "./Sidebar";

const navbar = () => {
    return(
      <>
                <div class="overlay"></div>
                <div id="search">
                    <button id="close" type="button" class="close btn btn-primary btn-icon btn-icon-mini btn-round">x</button>
                    <form method="post" action="s">
                        <input type="search" value="" placeholder="Search Users" />
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                </div>
                <div class="navbar-right">
                    <ul class="navbar-nav">
                        <li><a href="#search" class="main_search" title="Search..."><i class="zmdi zmdi-search"></i></a></li>

                        <li><a href="javascript:void(0);" class="js-right-sidebar" title="Setting"><i class="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
                        <li><a href="admin_logout.php" class="mega-menu" title="Sign Out"><i class="zmdi zmdi-power"></i></a></li>
                    </ul>
                </div>

                <Sidebar />
      </>
    )
}
export default navbar;