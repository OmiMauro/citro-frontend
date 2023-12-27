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
		<Container as="section" className="page-section">
			<Row className="text-center">
				<Col>
					<h2 className="section-heading text-uppercase">
						{organization?.name}
					</h2>
					<h3 className="section-subheading text-muted">
						{organization?.welcomeText}
					</h3>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={8}>
					<Image
						src={organization?.image_id?.url}
						alt={organization?.name}
						fluid
					/>
				</Col>
			</Row>
			<Row className="text-center fst-italic text-muted">
				<Col>
					<DangerousSetInnerHTML content={organization?.aboutUs} />
				</Col>
			</Row>
		</Container>
	)
}
export default AboutUs
