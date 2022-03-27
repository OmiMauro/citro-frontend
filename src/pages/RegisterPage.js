import React from 'react';
import Titles from '../components/Titles/Titles';
import Register from '../components/Auth/Register';
import LayoutPublic from '../components/LayoutPublic/LayoutPublic';

const RegisterPage = () => {
	return (
		<LayoutPublic>
			<Titles title='Registarse'></Titles>
			<Register></Register>
		</LayoutPublic>
	);
};

export default RegisterPage;
