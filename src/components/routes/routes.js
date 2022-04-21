import { ROLES } from '../../config'
import Backoffice from '../../containers/Backoffice/Backoffice'
import BackofficeCards from '../../containers/Backoffice/BackofficeCards'
import OrganizationContainer from '../../containers/Organization/OrganizationContainer'

import SlidesListContainer from '../../containers/Slides/SlidesListContainer'
import SlidesToBackoffice from '../../containers/Slides/SlidesToBackoffice'

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
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: 'home',
		element: BackofficeCards,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: 'activities',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: 'activities/create',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'activities/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'slides',
		element: SlidesListContainer,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'slides/create',
		element: SlidesToBackoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'slides/edit/:id',
		element: SlidesToBackoffice,
		allowedRoles: [ROLES.ADMIN]
	},

	{
		path: 'members',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'members/create',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'members/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'users',
		element: UsersListContainer,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'users/create',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'users/edit/:id',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'organizations',
		element: OrganizationContainer,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'organizations/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN]
	},
	{
		path: 'profile',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: 'profile/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER]
	}
]

export { routesPrivates, routesPublics }
