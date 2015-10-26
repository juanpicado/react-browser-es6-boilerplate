'use strict';

class Hello extends React.Component {
	render() {
		return <div>Hello, {this.props.name}!</div>
	}
}

ReactDOM.render(<Hello name="Juan"/>, $("#main").get(0));

