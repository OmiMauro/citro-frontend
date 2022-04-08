import React from 'react'
import LayoutPublic from '../components/LayoutPublic/LayoutPublic'
import Carousel from '../components/Carousel/Carousel'
import Members from '../components/Members/Members'
import AboutUs from '../components/About/AboutUs'
import ImageEvent from '../components/Galery/Galery'

const HomePage = (props) => {
	return (
		<LayoutPublic>
			<Carousel></Carousel>
			<AboutUs></AboutUs>
			{/* 	<ImageEvent></ImageEvent> */}
			<Members></Members>
		</LayoutPublic>
	)
}

export default HomePage
