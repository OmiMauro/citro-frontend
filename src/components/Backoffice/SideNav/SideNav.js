import { Link } from 'react-router-dom'
import { routesPrivates } from '../../routes/routes'
import './styles.css'
import { logout, selectorAuth } from '../../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'

const SideNav = () => {
	const { user } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	return (
		<div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
			<div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
				<Link
					to='/'
					className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
					<span className='fs-5 d-none d-sm-inline'>Inicio</span>
				</Link>
				{user.roleId === 2 && (
					<ul
						className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
						id='menu'>
						<li>
							<Link to='/backoffice' className='nav-link align-middle px-0'>
								<i className='fs-4 bi-table fa fa-table'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Home</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/organizations'
								className='nav-link align-middle px-0'>
								<i className='fs-4 bi-table fa fa-building'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Organizations</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/profile'
								className='nav-link px-0 align-middle '>
								<i className='fs-4 fa fa-user-circle'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Profile</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/members'
								className='nav-link align-middle px-0'>
								<i className='fs-4  fa fa-users'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Organizadores</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/slides'
								className='nav-link align-middle px-0'>
								<i className='fs-4 fa fa-image'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Slides</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/galery'
								className='nav-link align-middle px-0'>
								<i className='fs-4 fa fa-camera'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Galería</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/users'
								className='nav-link align-middle px-0'>
								<i className='fs-4 fa fa-user'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Usuarios</span>
							</Link>
						</li>
						<li>
							<Link
								to='/backoffice/events'
								className='nav-link align-middle px-0'>
								<i className='fs-4 fa fa-calendar'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Eventos</span>
							</Link>
						</li>
					</ul>
				)}
				{user.roleId === 1 && (
					<ul
						className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
						id='menu'>
						<li>
							<Link to='/backoffice' className='nav-link align-middle px-0'>
								<i className='fs-4 bi-table'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Home</span>
							</Link>
						</li>

						<li>
							<Link
								to='/backoffice/profile'
								className='nav-link px-0 align-middle '>
								<i className='fs-4 fa fa-user-circle'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Profile</span>
							</Link>
						</li>

						<li>
							<Link
								to='/backoffice/events'
								className='nav-link align-middle px-0'>
								<i className='fs-4 fa-calendar'></i>{' '}
								<span className='ms-1 d-none d-sm-inline'>Eventos</span>
							</Link>
						</li>
					</ul>
				)}
				<hr />
				<div className='dropdown pb-4'>
					<Link
						to='profile/:id'
						className='d-flex align-items-center text-white text-decoration-none dropdown-toggle'
						id='dropdownUser1'
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						<img
							src='https://avatars.githubusercontent.com/u/64550079?v=4'
							alt='hugenerd'
							width='30'
							height='30'
							className='rounded-circle'
						/>
						<span className='d-none d-sm-inline mx-1'>{user.name}</span>
					</Link>
					<ul className='dropdown-menu dropdown-menu-dark text-small shadow'>
						<li>
							<Link to='/backoffice/profile' className='dropdown-item'>
								Profile
							</Link>
						</li>
						<li>
							<hr className='dropdown-divider' />
						</li>
						<li>
							<button
								className='dropdown-item'
								onClick={() => {
									dispatch(logout())
								}}>
								Cerrar Sesion
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideNav

{
	/* <li>
						<Link
							to='/backoffice/organizations'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-table'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Organizations</span>
						</Link>
					</li>
					<li>
						<Link
							to='/backoffice/profile'
							data-bs-toggle='collapse'
							className='nav-link px-0 align-middle '>
							<i className='fs-4'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Profile</span>
						</Link>
					</li>
					<li>
						<Link
							to='/backoffice/members'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-grid'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Members</span>
						</Link>
						{/* <a
							href='#submenu3'
							data-bs-toggle='collapse'
							className='nav-link px-0 align-middle'>
							<i className='fs-4 bi-grid'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Products</span>{' '}
						</a> 
						<ul
							className='collapse nav flex-column ms-1'
							id='submenu3'
							data-bs-parent='#menu'>
							<li className='w-100'>
								<a href='#' className='nav-link px-0'>
									{' '}
									<span className='d-none d-sm-inline'>Product</span> 1
								</a>
							</li>
						</ul>
					</li>
					<li>
						<Link
							to='/backoffice/slides'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-people'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Slides</span>
						</Link>
					</li>
</ul> */
}
