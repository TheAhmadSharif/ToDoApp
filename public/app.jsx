var GreeterForm = React.createClass({
	render: function () {
		return (
			<form onSubmit={this.onClick}>
				<input type="text" ref="name"/>
				<button> Set Name </button>
			</form>
		);		
	},
	onClick: function (e) {
		e.preventDefault();
		var name = this.refs.name.value;
		var a = this.props.newName(name);
	}
});
var Greeter = React.createClass({
	getInitialState: function () {
		return {
			name: this.props.name		
		}
	},
	getDefaultProps: function () {
		return {
			name: 'Ahmad'		
		}	
	},
	handlerName: function (name) {
		this.setState({
			name: name		
		});	
	},
	render: function () {
		var name = this.state.name;
		return (
			<div>
				<h2> Hello {name} </h2>
				<GreeterForm newName={this.handlerName}/>
			</div>		
		)
	}		
})


ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
);
