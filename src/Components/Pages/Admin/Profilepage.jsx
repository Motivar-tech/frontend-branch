/* eslint-disable*/

import React from "react";
import AdminProfile from "../../Admin/Profile";
import Leftsidebar from "../../Navbar/Leftsidebar";
import Rightsidebar from "../../Navbar/Rightsidebar";
const Profilepage =()=>{
return(
    <>
         <Leftsidebar />
        <AdminProfile />
        <Rightsidebar />
    </>
)
}
export default Profilepage;