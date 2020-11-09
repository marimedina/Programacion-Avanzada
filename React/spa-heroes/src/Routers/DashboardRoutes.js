import React from 'react';
import Navbar from '../Components/UI/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import MarvelScreen from '../Components/Marvel/MarvelScreen';
import DcScreen from '../Components/DC/DcScreen';
import HeroScreen from '../Components/Heroes/HeroScreen';
import SearchScreen from '../Components/Search/SearchScreen';


// AGREGAR REDIRECT


const DashboardRoutes = () => {
    return ( 
        <>
            <Navbar />
            
            <div>    
                <Switch>
                    <Route exact path="/Marvel" component= { MarvelScreen }/>
                    <Route exact path="/Hero/:heroId " component= { HeroScreen }/>
                    <Route exact path="/DC" component= { DcScreen }/>
                    <Route exact path="/Search" component= { SearchScreen }/>
                </Switch>
            </div>
        </>
     );
}
 
export default DashboardRoutes;