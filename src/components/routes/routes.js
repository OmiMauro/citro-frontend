import { ROLES } from '../../config'
import Backoffice from '../../containers/Backoffice/Backoffice'
import BackofficeCards from '../../containers/Backoffice/BackofficeCards'

const routes = [
	{
		path: '/backoffice',
		element: Backoffice,
		permission: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: '/backoffice/home',
		element: BackofficeCards,
		permission: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: '/backoffice/activities',
		element: Backoffice,
		permission: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: '/backoffice/activities/create',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/activities/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/slides',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/slides/create',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/slides/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},

	{
		path: '/backoffice/members',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/members/create',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/members/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/users',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/users/create',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/users/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/organization',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/organization/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN]
	},
	{
		path: '/backoffice/profile',
		element: Backoffice,
		permission: [ROLES.ADMIN, ROLES.CUSTOMER]
	},
	{
		path: '/backoffice/profile/edit/:id',
		element: Backoffice,
		permission: [ROLES.ADMIN, ROLES.CUSTOMER]
	}
]

export default routes
