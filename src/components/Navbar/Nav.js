import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectorAuth, logout } from '../../redux/slices/auth-slice'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import logo from './navbar-logo.png'
import './styles.css'
import { Link } from 'react-router-dom'
const NAV_LINKS = [
	{ path: '/about-us', label: 'Nosotros' },
	{ path: '/contact', label: 'Contacto' },
	{ path: '/organizators', label: 'Organizadores' },
]

const AUTH_LINKS = {
	loggedIn: [
		{ path: '/backoffice', label: 'Backoffice', icon: faSignIn },
		{ path: '/logout', label: 'Cerrar Sesion', icon: faSignIn, isLogout: true },
	],
	loggedOut: [
		{ path: '/login', label: 'Log In', icon: faSignIn },
		{ path: '/register', label: 'Registrarse', icon: faUserPlus },
	],
}

const CustomNav = () => {
	const { auth } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	const handleLogout = () => {
		if (dispatch) dispatch(logout())
	}

	return (
		<Navbar expand="lg" className="py-3 shadow-sm" id="mainNav">
			<Navbar.Brand href="/" className="px-md-5">
				<img src={logo} alt="Organization Logo" />
				<FontAwesomeIcon icon={faHome} className="d-block d-lg-none" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse className=" d-lg-flex justify-content-end">
				<Nav className=" d-flex align-items-center">
					{NAV_LINKS.map(({ path, label }) => (
						<Link key={path} to={path} className="nav-link text-uppercase ">
							{label}
						</Link>
					))}
					{(auth ? AUTH_LINKS.loggedIn : AUTH_LINKS.loggedOut).map(
						({ path, label, icon, isLogout }) =>
							isLogout ? (
								<Button key={path} onClick={handleLogout}>
									<FontAwesomeIcon icon={icon} className="me-1" />
									{label}
								</Button>
							) : (
								<Link key={path} to={path} className="nav-link text-uppercase">
									<Button className=" btn btn-outline-dark">
										<FontAwesomeIcon icon={icon} className="me-1" />
										{label}
									</Button>
								</Link>
							)
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default CustomNav
