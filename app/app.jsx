var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Local requires
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
// Load app.scss
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='countdown' component={Countdown}/>
            <IndexRoute component={Timer}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('app')
);
