import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Profile from './components/Profile/Profile.js';
import Search from './components/Search/Search.js';

export default (
    <Switch>
        <Route component = {Login} path exact = '/' />
        <Route component = {Dashboard} path = '/dashboard' />
        <Route component = {Profile} path = '/profile' />
        <Route component = {Search} path = '/search' />
    </Switch>
)