import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/pro-regular-svg-icons'

const MemberCard = ({ member, handleDelete }) => {
	return (
		<Col lg={12} className="mb-2">
			<Card className="d-flex align-items-center">
				<Card.Img
					variant="top"
					src={member?.image_id?.url}
					className="m-2 w-25"
				/>
				<Card.Body>
					<Card.Title>
						{member?.name}, {member?.lastname}
					</Card.Title>
					{/* URL Links */}
					{member?.urlFacebook && (
						<Row className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlFacebook}
								target={'_blank'}
							>
								{member?.urlFacebook}
							</a>
						</Row>
					)}
					{member?.urlInstagram && (
						<Row className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlInstagram}
								target={'_blank'}
							>
								{member?.urlInstagram}
							</a>
						</Row>
					)}
					{member?.urlWhatsapp && (
						<Row className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlWhatsapp}
								target={'_blank'}
							>
								{member?.urlWhatsapp}
							</a>
						</Row>
					)}
					{member?.phone && (
						<Row className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.phone}
								target={'_blank'}
							>
								{member?.phone}
							</a>
						</Row>
					)}

					<Link
						to={`/backoffice/members/edit/${member._id}`}
						className="btn btn-outline-dark mx-2"
					>
						<FontAwesomeIcon icon={faEdit} />
					</Link>
					<Button
						variant="outline-dark"
						onClick={() => handleDelete(member._id)}
					>
						<FontAwesomeIcon icon={faTrash} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default MemberCard
