import { ROLES } from '../../config'
import Backoffice from '../../containers/Backoffice/Backoffice'

import MembersFormContainer from '../../containers/Members/MembersFormContainer'
import MembersListContainer from '../../containers/Members/MembersListContainer'

import OrganizationContainer from '../../containers/Organization/OrganizationContainer'
import OrganizationFormContainer from '../../containers/Organization/OrganizationFormContainer'
import ProfileFormContainer from '../../containers/Profile/ProfileFormContainer'
import ProfileContainer from '../../containers/Profile/ProfileContainer'
import SlidesListContainer from '../../containers/Slides/SlidesListContainer'
import SlidesFormContainer from '../../containers/Slides/SlidesFormContainer'
import EventsContainer from '../../containers/Events/EventsListContainer'
import UsersContainer from '../../containers/Users/UsersContainer'
import UsersListContainer from '../../containers/Users/UsersListContainer'
import InscriptionsListContainer from '../../containers/Inscriptions/InscriptionsListContainer'
import EventsListContainer from '../../containers/Events/EventsListContainer'
import EventsFormContainer from '../../containers/Events/EventsFormContainer'
import InscriptionsContainer from '../../containers/Inscriptions/InscriptionsContainer'
import InscriptionsFormContainer from '../../containers/Inscriptions/InscriptionsFormContainer'

/* Routes Publics */

import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import Error404Page from '../../pages/Error404Page'
import Error401Page from '../../pages/Error401Page'

import GaleriesListContainer from '../../containers/Galeries/GaleriesListContainer'
import GaleriesContainer from '../../containers/Galeries/GaleriesContainer'
import AboutPage from '../../pages/AboutPage'
import MembersPage from '../../pages/MembersPage'
import ContactPage from '../../pages/ContactPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import ResetPasswordPage from '../../pages/ResetPasswordPage'
import ConfirmEmailPage from '../../pages/ConfirmEmailPage'
import EventsPage from '../../pages/EventsPage'
import EventPage from '../../pages/EventPage'
import InscriptionContainer from '../../containers/Inscription/InscriptionContainer'
const routesPublics = [
	{ path: '/', element: HomePage },
	{ path: 'login', element: LoginPage },
	{ path: 'register', element: RegisterPage },
	{ path: 'unauthorized', element: Error401Page },
	{ path: 'about-us', element: AboutPage },
	{ path: 'organizators', element: MembersPage },
	{ path: 'contact', element: ContactPage },
	{ path: 'forgot-password', element: ForgotPasswordPage },
	{ path: 'reset-password/:token', element: ResetPasswordPage },
	{ path: 'confirm-email/:token', element: ConfirmEmailPage },
	{ path: 'events', element: EventsPage },
	{ path: 'events/:id', element: EventPage },

	{ path: '*', element: Error404Page },
]
const routesPrivates = [
	{
		path: '',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},

	{
		path: 'activities',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'activities/create',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'activities/edit/:id',
		element: Backoffice,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'slides',
		element: SlidesListContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'slides/create',
		element: SlidesFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'slides/edit/:id',
		element: SlidesFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},

	{
		path: 'members',
		element: MembersListContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'members/create',
		element: MembersFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'members/edit/:id',
		element: MembersFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'users',
		element: UsersListContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'users/create',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'users/edit/:id',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'organizations',
		element: OrganizationContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'organizations/edit/:id',
		element: OrganizationFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'profile',
		element: ProfileContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'profile/edit/:id',
		element: ProfileFormContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'galery',
		element: GaleriesListContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'galery/create',
		element: GaleriesContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'events',
		element: EventsListContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'events/create',
		element: EventsFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'events/:id',
		element: EventsFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'events/:eventId/inscriptions',
		element: InscriptionsContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'inscriptions',
		element: InscriptionsListContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'events/:eventId/inscriptions/create',
		element: InscriptionsFormContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
	{
		path: 'inscription/:inscriptionId',
		element: InscriptionContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.CUSTOMER],
	},
]

export { routesPrivates, routesPublics }
