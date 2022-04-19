import { lazy } from 'react'

const HomePage = lazy(() =>
	import(/* webpackChunkName: "LazyHomePage"*/ '../../pages/HomePage')
)

const AboutPage = lazy(() =>
	import(/* webpackChunkName: "LazyAboutPage"*/ '../../pages/AboutPage')
)
const ContactPage = lazy(() =>
	import(/* webpackChunkName: "LazyContactPage"*/ '../../pages/ContactPage')
)
const LoginPage = lazy(() =>
	import(/* webpackChunkName: "LazyLoginPage"*/ '../../pages/LoginPage')
)
const RegisterPage = lazy(() =>
	import(/* webpackChunkName: "LazyRegisterPage"*/ '../../pages/RegisterPage')
)

const publicRoute = [
	{
		path: '/',
		element: HomePage
	},
	{
		path: '/aboutus',
		element: AboutPage
	},
	{
		path: '/contact',
		element: ContactPage
	},
	{
		path: '/login',
		element: LoginPage
	},
	{
		path: '/register',
		element: RegisterPage
	}
]
export default publicRoute
