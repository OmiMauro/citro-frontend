import React from 'react';

import background from './bg-title.jpg';
const Titles = ({ title, description, image = background }) => {
	return (
		<div className='container'>
			<img src={image} alt={title} />
			<div className='row'>
				<h1>{title}</h1>
				{description && <p>{description}</p>}
			</div>
		</div>
	);
};

export default Titles;
