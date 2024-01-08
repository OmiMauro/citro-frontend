import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/pro-regular-svg-icons'
import {
	faFacebook,
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const ContactInfoCard = ({ icon, contactType, contactLink, contactValue }) => {
	return (
		<Col xs={12} lg={5} className="mx-2 align-items-center">
			<Card
				className="mb-4"
				style={{
					minHeight: '140px',
				}}
			>
				<Card.Body>
					<div className="d-flex justify-content-center align-items-center">
						<p className="tex">
							<FontAwesomeIcon icon={icon} size="lg" /> {'  '}
							{contactType}
						</p>
					</div>
					<Button variant="link" href={contactLink} className="py-0">
						<h5 className="">{contactValue}</h5>
					</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}
const Contact = ({ organization }) => {
	return (
		<Row className="">
			<h1 className="my-3 text-uppercase text-center">Contactanos</h1>
			<Row className="d-flex justify-content-center">
				<ContactInfoCard
					icon={faPhone}
					contactType="Teléfono"
					contactLink={`tel:${organization.phone}`}
					contactValue={organization.phone}
				/>
				<ContactInfoCard
					icon={faEnvelope}
					contactType="Email"
					contactLink={`mailto:${organization.email}`}
					contactValue={organization.email}
				/>
				<ContactInfoCard
					icon={faFacebookSquare}
					contactType="Facebook"
					contactLink={organization.urlFacebook}
					contactValue={organization.urlFacebook}
				/>
				<ContactInfoCard
					icon={faInstagram}
					contactType="Instagram"
					contactLink={organization.urlInstagram}
					contactValue={organization.urlInstagram}
				/>
			</Row>

			<Col xs={12} lg={12}>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56858.948731809454!2d-55.26777673070181!3d-27.04014019520598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f811245d4ce333%3A0xf150dfd86f665850!2sJard%C3%ADn%20America%2C%20Misiones!5e0!3m2!1ses!2sar!4v1652796319645!5m2!1ses!2sar"
						width="100%"
						height="500px"
						style={{ border: 0 }}
						allowFullScreen="true"
						loading="lazy"
					></iframe>
				</div>
			</Col>
		</Row>
	)
}

export default Contact
