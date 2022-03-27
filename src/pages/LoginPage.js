import React from 'react';
import Login from '../components/Auth/Login';
import Titles from '../components/Titles/Titles';
import LayoutPublic from '../components/LayoutPublic/LayoutPublic';

const LoginPage = () => {
	return (
		<LayoutPublic>
			<Titles title='Iniciar Sesion'></Titles>
			<Login></Login>
		</LayoutPublic>
	);
};

export default LoginPage;
