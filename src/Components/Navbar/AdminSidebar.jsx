/* eslint-disable */
import React from "react";
import Rightsidebar from './Rightsidebar';
import AdminDashboard from "../Admin/Dashboard";
import Leftsidebar from "./Leftsidebar";

const Sidebar = () => {
    return(
        <>
            <Leftsidebar />
            <AdminDashboard />
            <Rightsidebar />
        </>
    )
}

export default Sidebar;