import { useSelector } from 'react-redux'
import { selectorOrganization } from '../../redux/slices/organization-slice'
import './styles.css'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const UrlSocial = ({ url, icon }) => {
	if (!url) return null
	return (
		<Button
			variant="dark"
			className="btn-social mx-2"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<FontAwesomeIcon icon={icon} />
		</Button>
	)
}
const Footer = () => {
	const { organization, status } = useSelector(selectorOrganization)
	const year = new Date().getFullYear()
	return (
		<Row className="py-2 py-md-4">
			<Col
				xs={12}
				lg={4}
				className="d-flex justify-content-center align-items-start"
			>
				{organization.urlFacebook &&
					UrlSocial({ url: organization.urlFacebook, icon: faFacebook })}
				{organization.urlInstagram &&
					UrlSocial({ url: organization.urlInstagram, icon: faInstagram })}
				{organization.urlWhatsapp &&
					UrlSocial({ url: organization.urlWhatsapp, icon: faWhatsapp })}
			</Col>
			<Col
				xs={12}
				lg={4}
				className="d-flex justify-content-center align-items-center py-md-0"
			>
				<p className="text-uppercase text-black-50 ">
					Desarrollado por
					<span className="fw-bold"> &copy;Manu Omiñuka</span>
				</p>
			</Col>

			<Col
				xs={12}
				lg={4}
				className="d-flex justify-content-center align-items-start "
			>
				<a
					className="link-dark text-decoration-none me-3"
					href="privacy_policy.html"
					target="_blank"
					rel="noreferrer"
				>
					Políticas de Privacidad
				</a>
				<a
					className="link-dark text-decoration-none"
					href="terms_conditions.html"
					target="_blank"
					rel="noreferrer"
				>
					Terminos y Condiciones
				</a>
			</Col>
		</Row>
	)
}
export default Footer
