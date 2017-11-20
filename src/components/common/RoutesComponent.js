import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components'

const RoutesComponent = () => {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route  path="/login" component={Login} />
		</div>
		)
}

export default RoutesComponent
