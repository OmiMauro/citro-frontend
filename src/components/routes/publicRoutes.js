import { lazy } from 'react';

const HomePage = lazy(() =>
	import(/* webpackChunkName: "LazyHomePage"*/ '../../pages/HomePage')
);

const AboutPage = lazy(() =>
	import(/* webpackChunkName: "LazyAboutPage"*/ '../../pages/AboutPage')
);
const ContactPage = lazy(() =>
	import(/* webpackChunkName: "LazyContactPage"*/ '../../pages/ContactPage')
);
const LoginPage = lazy(() =>
	import(/* webpackChunkName: "LazyLoginPage"*/ '../../pages/LoginPage')
);
const RegisterPage = lazy(() =>
	import(/* webpackChunkName: "LazyRegisterPage"*/ '../../pages/RegisterPage')
);

const publicRoute = [
	{
		path: '/',
		exact: true,
		component: HomePage
	},
	{
		path: '/aboutus',
		exact: true,
		component: AboutPage
	},
	{
		path: '/contact',
		exact: true,
		component: ContactPage
	},
	{
		path: '/login',
		exact: true,
		component: LoginPage
	},
	{
		path: '/register',
		exact: true,
		component: RegisterPage
	}
];
export default publicRoute;
