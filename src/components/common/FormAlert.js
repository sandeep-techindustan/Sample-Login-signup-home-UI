	import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';

export default class FormAlert extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showAlert: true
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps !== this.props){
			this.setState({ showAlert: true });
		}
	}

	handleAlertDismiss = () => {
		this.setState({ showAlert: false });
	}

	render() {
		let { message, bsStyle } = this.props; //showAlert

		return(
			<div>
				{this.state.showAlert?<Alert bsStyle={bsStyle} onDismiss={this.handleAlertDismiss}>
		          <p>{message}</p>
		        </Alert>:null}
	        </div>
		)
	}
}
