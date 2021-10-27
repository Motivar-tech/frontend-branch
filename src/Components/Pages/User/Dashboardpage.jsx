/* eslint-disable*/

import React from "react";
import Rightsidebar from "../../Navbar/Rightsidebar";
import UserLeftsidebar from "../../Navbar/UserLeftSIdebar";
import UserDashboard from "../../User/Dashboard";
const Dashboardpage =()=>{
return(
    <>
        <UserLeftsidebar />
        <UserDashboard />
        <Rightsidebar />
    </>
)
}
export default Dashboardpage;