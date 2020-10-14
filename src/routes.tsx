import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import EnterprisingMap from './pages/EnterprisingMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={EnterprisingMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes