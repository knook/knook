import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PrefsPage from './containers/PrefsPage';
import AddAccountPage from './containers/AddAccountPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route name="prefs" path="/prefs" component={PrefsPage}/>
        <Route path="/addAccount" component={AddAccountPage}/>
    </Route>
);
