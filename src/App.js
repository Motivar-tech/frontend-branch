/* eslint-disable */
import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import Aboutpage from './Components/Pages/Aboutpage';
import Authpage from './Components/Pages/Authpage';
import Dashboard from './Components/Dashboard';
import SignupPage from './Components/Pages/SIgnupPage';

const App = () =>{
    return(
       <>
       <Route path='/' exact component={Authpage} />
       <Route path='/auth' exact component={Authpage} />
       <Route path='/dashboard' exact component={Dashboard} />
       <Route path='/About' exact component={Aboutpage} />
       <Route path='/Signup' exact component={SignupPage} />
       </>
    );
}
export default App;
