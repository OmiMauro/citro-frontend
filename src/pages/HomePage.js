import React from 'react';
import LayoutPublic from '../components/LayoutPublic/LayoutPublic';
import Carousel from '../components/Carousel/Carousel';
import Members from '../components/Members/Members';

const HomePage = () => {
	return (
		<LayoutPublic>
			<Carousel></Carousel>
			<Members></Members>
			{/* 	<AboutUs></AboutUs> */}
		</LayoutPublic>
	);
};

export default HomePage;
