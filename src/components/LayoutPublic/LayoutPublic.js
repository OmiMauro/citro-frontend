import React from 'react'
import Navbar from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { selectorOrganization } from '../../redux/slices/organization-slice'

const LayoutPublic = ({ children }) => {
	const { organization, status } = useSelector(selectorOrganization)
	const { aboutUs, name, welcomeText } = organization
	return (
		<>
			{organization && (
				<>
					<Navbar></Navbar>
					<main>{children}</main>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default LayoutPublic
