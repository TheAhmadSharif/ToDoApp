var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'Abul'
		}
	},
	render: function () {
	var name = this.props.name;
		return (
			<div> 
				<h2> Hello {name} </h2>
			</div>
		)
	}
})


ReactDOM.render(
 	<Greeter/>,
	document.getElementById('app')
);