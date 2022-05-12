import React, { useEffect } from 'react'
import Organization from '../../components/Organization/Organization'
import { useSelector, useDispatch } from 'react-redux'
import {
	fetchOrganization,
	selectorOrganization,
	editOrganization
} from '../../redux/slices/organization-slice'

import OrganizationForm from '../../components/Organization/OrganizationForm'
import { useParams } from 'react-router-dom'

const OrganizationFormContainer = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { errors, organization } = useSelector(selectorOrganization)

	const handleSumbmit = (data) => {
		dispatch(editOrganization(data))
	}
	return (
		<div className='col'>
			<OrganizationForm
				handleSumbmit={handleSumbmit}
				organization={organization}
				errors={errors}
			/>
		</div>
	)
}

export default OrganizationFormContainer
