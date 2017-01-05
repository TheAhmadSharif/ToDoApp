/* 
var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-route');
var Route = require('react-route').Route;

*/

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Main  = require('Main');
var Weather = require('Weather');
var About = require('About');

ReactDOM.render(
  <Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>
		 	<Route path="about" component={About}/>
		</Route>
	</Router>,
  document.getElementById('app')
);



