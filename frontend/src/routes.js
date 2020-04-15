import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/global.css';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/news" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}