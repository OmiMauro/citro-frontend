import { useSelector, useDispatch } from 'react-redux'
import {
	fetchOrganization,
	selectorOrganization,
} from '../../redux/slices/organization-slice'
import { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import './styles.css'
import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
const AboutUs = () => {
	const dispatch = useDispatch()

	const { organization } = useSelector(selectorOrganization)

	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])

	return (
		<Row className="text-center bg-light py-lg-5">
			<Col xs={12} lg={12}>
				<h2 className="section-heading text-uppercase">{organization?.name}</h2>
				<h3 className="section-subheading text-muted">
					{organization?.welcomeText}
				</h3>
			</Col>
			<Col xs={12} lg={12} className="py-4">
				<Image
					src={organization?.image_id?.url}
					alt={organization?.name}
					fluid
				/>
			</Col>
			<Col xs={10} lg={12} className="text-center fst-italic text-muted">
				<DangerousSetInnerHTML content={organization?.aboutUs} />
			</Col>
		</Row>
	)
}
export default AboutUs
