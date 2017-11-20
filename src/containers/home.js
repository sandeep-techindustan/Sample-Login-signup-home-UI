import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Grid, Menubar, MenubarItem, Navbar, Nav, NavItem} from 'react-bootstrap'

const Home = () => {
	return (
		<div>
			<Row>
				<Col md={12}>
				<div className="header">
					<div>
						<Link to="/" className="headerLinks">Home</Link>
						<Link to="/login" className="headerLinks">Logout</Link>
					</div>
				</div>
				</Col>
			</Row>

			<Row>
				<Col md={2}>
				<div className="sidebar">
								<Link to="/login">Login</Link><br />
								<Link to="/signup">SignUp</Link><br /><br />
								<Link to="/under-development">UnderDevelopment</Link>
				</div>
				</Col>
				<Col md={10}>
				Content
				</Col>
			</Row>
		</div>
		)
}

export default Home
