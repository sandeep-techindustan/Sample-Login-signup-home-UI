import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../containers/login'
import Home from '../containers/home'
import SignUp from '../containers/signUp'
import ForgotPassword from '../containers/forgotPassword'
import UnderDevelopment from '../components/underDevelopment'


export default class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/forgotpassword" component={ForgotPassword} />
				<Route path="/under-development" component={UnderDevelopment} />
				</div>
			</Router>
			)
	}
}
