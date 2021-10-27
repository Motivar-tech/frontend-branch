/* eslint-disable*/

import React from "react";
import Rightsidebar from "../../Navbar/Rightsidebar";
import UserLeftsidebar from "../../Navbar/UserLeftSIdebar";
import UserProfile from "../../User/Profile";
const Profilepage =()=>{
return(
    <>
        <UserLeftsidebar />
        <UserProfile />
        <Rightsidebar />
    </>
)
}
export default Profilepage;