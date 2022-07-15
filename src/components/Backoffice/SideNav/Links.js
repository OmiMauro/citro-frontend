import { Link } from 'react-router-dom'

export const linksAdmin = [
	<Link to="/backoffice" className="nav-link align-middle px-0">
		<i className="fs-4 bi-table fa fa-table"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Home</span>
	</Link>,
	<Link to="/backoffice/events" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-calendar"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Eventos</span>
	</Link>,
	<Link to="/backoffice/galery" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-camera"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Galería</span>
	</Link>,

	<Link to="/backoffice/inscriptions" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-calendar"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Inscripciones</span>
	</Link>,
	<Link to="/backoffice/organizations" className="nav-link align-middle px-0">
		<i className="fs-4 bi-table fa fa-building"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Organización</span>
	</Link>,
	<Link to="/backoffice/members" className="nav-link align-middle px-0">
		<i className="fs-4  fa fa-users"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Organizadores</span>
	</Link>,
	<Link to="/backoffice/profile" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Perfil</span>
	</Link>,
	<Link to="/backoffice/slides" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-image"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Slides</span>
	</Link>,
	<Link to="/backoffice/users" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-user"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Usuarios</span>
	</Link>,
]

export const linksUser = [
	<Link to="/backoffice" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-table"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Home</span>
	</Link>,
	<Link to="/backoffice/events" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-calendar"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Eventos</span>
	</Link>,
	<Link to="/backoffice/inscriptions" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-calendar"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Inscripciones</span>
	</Link>,
	<Link to="/backoffice/profile" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Perfil</span>
	</Link>,
]
