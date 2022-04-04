import React from 'react'
import Navbar from '../Navbar/Nav'
import Footer from '../Footer/Footer'
const LayoutPublic = ({ children, organization }) => {
	return (
		<>
			{organization && (
				<>
					<Navbar organization={organization}></Navbar>
					<main>{children}</main>
					<Footer organization={organization}></Footer>
				</>
			)}
		</>
	)
}

export default LayoutPublic
