var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({
	render: function () {
		return (
			<nav>
				<ol>
					<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Home </IndexLink>
					</li>
					<li> 
						<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
					</li>
				</ol>
			</nav>
		);
	}
});
module.exports = Nav;