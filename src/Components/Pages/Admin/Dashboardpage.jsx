/* eslint-disable*/

import React from "react";
import AdminDashboard from "../../Admin/Dashboard";
import Leftsidebar from "../../Navbar/Leftsidebar";
import Rightsidebar from "../../Navbar/Rightsidebar";
const Dashboardpage =()=>{
return(
    <>
        <Leftsidebar />
        <AdminDashboard />
        <Rightsidebar />
    </>
)
}
export default Dashboardpage;