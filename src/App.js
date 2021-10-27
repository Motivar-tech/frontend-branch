/* eslint-disable */
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import Aboutpage from './Components/Pages/Aboutpage';
import Authpage from './Components/Pages/Authpage';
import AdminDashboard from './Components/Pages/Admin/Dashboardpage';
import AdminProfile from './Components/Pages/Admin/Profilepage';
import Dashboard from './Components/Pages/User/Dashboardpage';
import Profile from './Components/Pages/User/Profilepage';
import SignupPage from './Components/Pages/SIgnupPage';
import Profilepage from './Components/Pages/User/Profilepage';

const App = () =>{
    return(
       <>
       <Route path='/' exact component={Homepage} />
       <Route path='/auth' exact component={Authpage} />
       <Route path='/dashboard-admin' exact component={AdminDashboard} />
        <Route path='/admin-profile' exact component={AdminProfile} />
       <Route path='/dashboard' exact component={Dashboard} />
       <Route path='/profile' exact component={Profile} />
       <Route path='/About' exact component={Aboutpage} />
       <Route path='/Signup' exact component={SignupPage} />
       </>
    );
}
export default App;
