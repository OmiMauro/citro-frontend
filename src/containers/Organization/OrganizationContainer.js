import React, { useEffect } from 'react'
import Organization from '../../components/Organization/Organization'
import { useSelector, useDispatch } from 'react-redux'
import {
	fetchOrganization,
	selectorOrganization,
} from '../../redux/slices/organization-slice'
import { Col } from 'react-bootstrap'
const OrganizationContainer = () => {
	const dispatch = useDispatch()
	const { organization, errors } = useSelector(selectorOrganization)

	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])
	return (
		<Col>
			<Organization organization={organization} />
		</Col>
	)
}

export default OrganizationContainer
