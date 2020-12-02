import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Detail from '../pages/detail/Detail';
import Store from '../pages/store/Store';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Store}/>
                <Route path="/product/:productId" exact component={Detail} />
            </Switch>
        </Router>
    );
}

export default Routes;
