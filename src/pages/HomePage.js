import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Members from '../components/Members/Members'
import AboutUs from '../components/About/AboutUs'
import ImageEvent from '../components/Galery/Galery'

const HomePage = (props) => {
	return (
		<>
			<Carousel></Carousel>
			<AboutUs></AboutUs>
			<ImageEvent></ImageEvent>
			<Members></Members>
		</>
	)
}

export default HomePage
