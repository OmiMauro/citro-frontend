import React from 'react';
import Titles from '../components/Titles/Titles';
import Error404 from '../components/Error404/Error404';
const Error404 = () => {
	return (
		<React.Fragment>
			<Titles
				title='Pagina no encontrada'
				description='La URL ingresada no se encontró en el servidor'></Titles>

			<Error404></Error404>
		</React.Fragment>
	);
};

export default Error404;
