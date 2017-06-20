const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// App css
require('style!css!sass!appStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="countdown" component={Countdown}/>
		<IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
