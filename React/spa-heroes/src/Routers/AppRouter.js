import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from '../Components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <Route exact path="/login" component= { LoginScreen }/>

                    <Route path="/" component= { DashboardRoutes }/>

                </Switch>
            </div>
        </Router>
    );
}
 
export default AppRouter;