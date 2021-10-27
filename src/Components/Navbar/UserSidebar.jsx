/* eslint-disable */
import React from "react";
import Rightsidebar from './Rightsidebar';
import UserDashboard from "../User/Dashboard";
import UserLeftsidebar from "./UserLeftsidebar";

const Sidebar = () => {
    return(
        <>
            <UserLeftsidebar />
            <UserDashboard />
            <Rightsidebar />
        </>
    )
}

export default Sidebar;