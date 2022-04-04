import React from 'react'
import LayoutPublic from '../components/LayoutPublic/LayoutPublic'
import BackofficeNav from '../components/Backoffice/BackofficeNav/BackofficeNav'
import Table from '../components/Backoffice/Tables/Tables'
import SideNav from '../components/Backoffice/SideNav/SideNav'

const BackofficePage = () => {
	return (
		<>
			<div className='sb-nav-fixed'>
				<BackofficeNav></BackofficeNav>
				<div id='layoutSidenav'>
					<SideNav></SideNav>
					<Table></Table>
				</div>
			</div>
		</>
	)
}

export default BackofficePage
