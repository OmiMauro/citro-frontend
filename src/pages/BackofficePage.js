import React from 'react'
import LayoutPublic from '../components/LayoutPublic/LayoutPublic'
import Table from '../components/Backoffice/Tables/Tables'
import SideNav from '../components/Backoffice/SideNav/SideNav'

const BackofficePage = () => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row flex-nowrap'>
					<SideNav></SideNav>
					<Table></Table>
				</div>
			</div>
		</>
	)
}

export default BackofficePage
