// app/config/routes.js

// var React = require('react');
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;    // Assign ReactRouter.Router || Function Router จาก react-router module
// var Route = ReactRouter.Route;      // Assign ReactRouter.Route || Function Route จาก react-router module
// var browserHistory = ReactRouter.browserHistory;    // var hashHistory = ReactRouter.hashHistory;
// var IndexRoute = ReactRouter.IndexRoute;
// var Main = require('../components/Main');
// var Home = require('../components/Home');
// var PromptContainer = require('../containers/PromptContainer');
// var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
// var ResultsContainer = require('../containers/ResultsContainer');

import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'

const routes = (
    <Router history={browserHistory} >
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header="Player One" component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' component={ConfirmBattleContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router >
);

// module.exports = routes;
export default routes