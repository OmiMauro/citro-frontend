import React from 'react'
import LayoutPublic from '../components/LayoutPublic/LayoutPublic'
import Carousel from '../components/Carousel/Carousel'
import Members from '../components/Members/Members'
import AboutUs from '../components/About/AboutUs'
const HomePage = (props) => {
	const { organization } = props

	return (
		<LayoutPublic organization={organization}>
			<Carousel></Carousel>
			<AboutUs organization={organization}></AboutUs>
			<Members></Members>
		</LayoutPublic>
	)
}

export default HomePage
