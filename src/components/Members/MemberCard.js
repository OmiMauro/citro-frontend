import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'

const MemberCard = ({ member, handleDelete }) => {
	return (
		<Col lg={6} className="mb-2">
			<Card className="align-items-center">
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
						<div className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlFacebook}
								target={'_blank'}
							>
								{member?.urlFacebook}
							</a>
						</div>
					)}
					{member?.urlInstagram && (
						<div className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlInstagram}
								target={'_blank'}
							>
								{member?.urlInstagram}
							</a>
						</div>
					)}
					{member?.urlWhatsapp && (
						<div className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.urlWhatsapp}
								target={'_blank'}
							>
								{member?.urlWhatsapp}
							</a>
						</div>
					)}
					{member?.phone && (
						<div className="d-flex justify-content-center">
							<a
								className="card-subtitle mb-2 text-muted h-6 text-black"
								href={member?.phone}
								target={'_blank'}
							>
								{member?.phone}
							</a>
						</div>
					)}

					<div className="text-center mt-2">
						<Link
							to={`/backoffice/members/edit/${member._id}`}
							className="btn btn-outline-dark mr-2"
						>
							Editar
						</Link>
						<Button
							variant="outline-dark"
							onClick={() => handleDelete(member._id)}
						>
							Eliminar
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default MemberCard
