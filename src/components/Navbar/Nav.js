// import { isAuthenticated } from '../../data/services/auth/index'
import { useSelector } from 'react-redux'
import { selectorOrganization } from '../../redux/slices/organization-slice'
import { Link } from 'react-router-dom'

const isAuthenticated = () => {}

const Nav = () => {
	const { organization, status } = useSelector(selectorOrganization)

	return (
		<nav
			className='navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm'
			id='mainNav'>
			<div className='container'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav  mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' to='/products'>
								Eventos
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contacts'>
								Contacto
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								Organizadores
							</Link>
						</li>
					</ul>
					<Link
						className='navbar-brand fw-bold fs-4 mx-auto text-uppercase'
						to='/'>
						{organization.name}
					</Link>

					<div className='buttons'>
						<Link className='btn btn-outline-dark ' to='/login'>
							<i className='fa fa-sign-in me-1 '></i>Log In
						</Link>
						<Link className='btn btn-outline-dark ' to='/register'>
							<i className='fa fa-user-plus me-1 '></i>Registrarse
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
export default Nav
