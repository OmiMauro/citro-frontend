import React from 'react'
import { Link } from 'react-router-dom'
import MemberCard from './MemberCard'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MembersList = ({ members, handleDelete }) => {
	const onDelete = (id) => {
		handleDelete(id)
	}
	return (
		<>
			<h3 className="fw-bold mb-5 mt-4 text-uppercase">
				<Link to={`/backoffice/`}>
					<FontAwesomeIcon icon={faArrowLeft} className="me-2 primary-color" />
				</Link>
				Lista de organizadores
				<Link to={`/backoffice/members/create/`}>
					<FontAwesomeIcon icon={faPlus} className="mx-2" />
				</Link>
			</h3>

			<Row className="d-flex justify-content-center">
				{members?.map((member) => (
					<MemberCard
						key={member._id}
						member={member}
						handleDelete={handleDelete}
					/>
				))}
			</Row>
		</>
	)
}

export default MembersList
