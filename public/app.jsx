var GreeterForm = React.createClass({
	onClick: function (e) {
		e.preventDefault();
		var name = this.refs.name.value;
		this.props.newName(name);
		console.log(name);
	},
	render: function () {
		return (
			<form onSubmit={this.onClick}>
				<input type="text" ref="name"/>
				<button> Set Name </button>
			</form>
		)
	}
})

var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'Ahmad'
		}
	},
	getInitialState: function () {
		return {
			name: this.props.name
		}
		
	},
	handleNewName: function (name) {
			this.setState({
				name: name			
			});		
	},
	render: function () {
		var name = this.state.name;
		return (
			<div> 
				<h2> Hello {name}</h2>
				<GreeterForm newName={this.handleNewName}/>
			</div>
		)
	}
	
})
ReactDOM.render(
	<Greeter/>,
	document.getElementById('app')
)
