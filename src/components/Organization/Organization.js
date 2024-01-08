import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
const MediaSocial = ({ url, type, icon }) => (
	<a href={url} target="_blank" rel="noreferrer" className="mx-1">
		<FontAwesomeIcon icon={icon} size="2x" />
	</a>
)

const Organization = ({ organization }) => {
	return (
		<Col className="my-3">
			<h4>
				<Link to="/backoffice">
					<FontAwesomeIcon icon={faArrowLeft} className="mx-1" />
				</Link>
				Información de la Organización
				<Link to={`/backoffice/organizations/edit/${organization._id}`}>
					<FontAwesomeIcon icon={faEdit} className="mx-1" />
				</Link>
			</h4>
			<Card key={organization._id} className="py-2">
				<Card.Img
					variant="top"
					src={organization?.image_id?.url}
					className="card__img"
				/>
				<Card.Body>
					<Card.Title className="card__name">{organization?.name}</Card.Title>

					<Card.Text className="card__job m-5">
						<span className="h5">Texto de bienvenida:</span>
						<hr className="w-25 mx-auto" />
						<span>{organization?.welcomeText}</span>
					</Card.Text>

					<Card.Text className="card__job mt-4">
						<span className="h5">Sobre Nosotros:</span>
						<hr className="w-25 mx-auto" />
						<DangerousSetInnerHTML content={organization?.aboutUs} />
					</Card.Text>

					<Card.Text>
						<span className="h5">Enlaces</span>
						<hr className="w-25 mx-auto" />
						<div className="d-flex justify-content-center">
							{organization?.urlFacebook && (
								<MediaSocial
									url={organization?.urlFacebook}
									type="facebook"
									icon={faFacebook}
								/>
							)}
							{organization?.urlInstagram && (
								<MediaSocial
									url={organization?.urlInstagram}
									type="instagram"
									icon={faInstagram}
								/>
							)}
							{organization?.urlWhatsapp && (
								<MediaSocial
									url={organization?.urlWhatsapp}
									type="whatsapp"
									icon={faWhatsapp}
								/>
							)}
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default Organization
