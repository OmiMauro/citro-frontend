import { ROLES } from '../../config'
import Backoffice from '../../containers/Backoffice/Backoffice'
import BackofficeCards from '../../containers/Backoffice/BackofficeCards'

import MembersFormContainer from '../../containers/Members/MembersFormContainer'
import MembersListContainer from '../../containers/Members/MembersListContainer'

import OrganizationContainer from '../../containers/Organization/OrganizationContainer'
import OrganizationFormContainer from '../../containers/Organization/OrganizationFormContainer'
import ProfileFormContainer from '../../containers/Profile/ProfileFormContainer'
import ProfileContainer from '../../containers/Profile/ProfileContainer'
import SlidesListContainer from '../../containers/Slides/SlidesListContainer'
import SlidesFormContainer from '../../containers/Slides/SlidesFormContainer'

import UsersContainer from '../../containers/Users/UsersContainer'
import UsersListContainer from '../../containers/Users/UsersListContainer'
/* Routes Publics */

import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import Error404Page from '../../pages/Error404Page'
import Error401Page from '../../pages/Error401Page'
import LayoutPublic from '../Layout/LayoutPublic'
import LayoutPrivate from '../Layout/LayoutPrivate'

const routesPublics = [
	{ path: '/', element: HomePage },
	{ path: 'login', element: LoginPage },
	{ path: 'register', element: RegisterPage },
	{ path: '/unauthorized', element: Error401Page },
	{ path: '*', element: Error404Page }
]
const routesPrivates = [
	{
		path: '',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
		styles: 'nav-link align-middle px-0',
		name: 'Home'
	},

	{
		path: 'activities',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
		styles: 'nav-link align-middle px-0',
		name: 'activities'
	},
	{
		path: 'activities/create',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Crear Actividad'
	},
	{
		path: 'activities/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Editar Actividad'
	},
	{
		path: 'slides',
		element: SlidesListContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'slides'
	},
	{
		path: 'slides/create',
		element: SlidesFormContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Crear Slides'
	},
	{
		path: 'slides/edit/:id',
		element: SlidesFormContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Editar Slide'
	},

	{
		path: 'members',
		element: MembersListContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Organizadores'
	},
	{
		path: 'members/create',
		element: MembersFormContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Crear Organizador'
	},
	{
		path: 'members/edit/:id',
		element: MembersFormContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Editar Organizador'
	},
	{
		path: 'users',
		element: UsersListContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Usuarios'
	},
	{
		path: 'users/create',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Crear usuario'
	},
	{
		path: 'users/edit/:id',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Editar Usuario'
	},
	{
		path: 'organizations',
		element: OrganizationContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: 'Organizacion'
	},
	{
		path: 'organizations/edit/:id',
		element: OrganizationFormContainer,
		allowedRoles: [ROLES.ADMIN],
		styles: 'nav-link align-middle px-0',
		name: ''
	},
	{
		path: 'profile',
		element: ProfileContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
		styles: 'nav-link align-middle px-0',
		name: 'Perfil'
	},
	{
		path: 'profile/edit/:id',
		element: ProfileFormContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
		styles: 'nav-link align-middle px-0',
		name: 'Editar Perfil'
	}
]

export { routesPrivates, routesPublics }
