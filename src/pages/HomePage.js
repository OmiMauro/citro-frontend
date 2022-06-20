import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Members from '../components/Members/Members'
import AboutUs from '../components/About/AboutUs'
import ImageEvent from '../components/Galery/Galery'
import EventsContainer from '../containers/Events/EventsContainer'

const HomePage = () => {
	return (
		<>
			<Carousel></Carousel>
			<AboutUs></AboutUs>
			<EventsContainer />
			<ImageEvent></ImageEvent>
			<Members></Members>
		</>
	)
}

export default HomePage
