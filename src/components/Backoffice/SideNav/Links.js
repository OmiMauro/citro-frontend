import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTable,
	faCalendar,
	faCamera,
	faBuilding,
	faUsers,
	faUserCircle,
	faImage,
	faUser,
} from '@fortawesome/pro-regular-svg-icons'

const adminLinksData = [
	{ path: '/backoffice', icon: faTable, label: 'Home' },
	{ path: '/backoffice/events', icon: faCalendar, label: 'Eventos' },
	{ path: '/backoffice/galery', icon: faCamera, label: 'Galería' },
	{
		path: '/backoffice/inscriptions',
		icon: faCalendar,
		label: 'Inscripciones',
	},
	{
		path: '/backoffice/organizations',
		icon: faBuilding,
		label: 'Organización',
	},
	{ path: '/backoffice/members', icon: faUsers, label: 'Organizadores' },
	{ path: '/backoffice/profile', icon: faUserCircle, label: 'Perfil' },
	{ path: '/backoffice/slides', icon: faImage, label: 'Slides' },
	{ path: '/backoffice/users', icon: faUser, label: 'Usuarios' },
]

const userLinksData = [
	{ path: '/backoffice', icon: faTable, label: 'Home' },
	{ path: '/backoffice/events', icon: faCalendar, label: 'Eventos' },
	{
		path: '/backoffice/inscriptions',
		icon: faCalendar,
		label: 'Inscripciones',
	},
	{ path: '/backoffice/profile', icon: faUserCircle, label: 'Perfil' },
]

export const linksAdmin = adminLinksData.map(({ path, icon, label }) => (
	<Link to={path} className="nav-link align-middle px-0">
		<FontAwesomeIcon icon={icon} className="fs-4" />{' '}
		<span className="ms-1 d-none d-sm-inline">{label}</span>
	</Link>
))

export const linksUser = userLinksData.map(({ path, icon, label }) => (
	<Link to={path} className="nav-link align-middle px-0">
		<FontAwesomeIcon icon={icon} className="fs-4" />{' '}
		<span className="ms-1 d-none d-sm-inline">{label}</span>
	</Link>
))
