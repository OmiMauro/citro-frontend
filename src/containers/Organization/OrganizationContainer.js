import React, { useEffect } from 'react'
import Organization from '../../components/Organization/Organization'
import { useSelector, useDispatch } from 'react-redux'
import {
	fetchOrganization,
	selectorOrganization
} from '../../redux/slices/organization-slice'

const OrganizationContainer = () => {
	const dispatch = useDispatch()
	const { organization, errors } = useSelector(selectorOrganization)

	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])
	return (
		<>
			<div className='col py-3'>
				<Organization organization={organization} />
			</div>
		</>
	)
}

export default OrganizationContainer
