import React from 'react'
import { Link } from 'react-router-dom'
import MemberCard from './MemberCard'
import { Row } from 'react-bootstrap'

const MembersList = ({ members, handleDelete }) => {
	const onDelete = (id) => {
		handleDelete(id)
	}
	return (
		<>
			<h3 className="text-center fw-bold mb-5 mt-4 text-uppercase">
				Lista de los organizadores
			</h3>
			<Row className="justify-content-center mb-4">
				<Link
					to={`/backoffice/members/create`}
					className="btn btn-outline-success mr-2"
				>
					Agregar Organizador
				</Link>
				<Link to={`/backoffice/`} className="btn btn-outline-success">
					Volver
				</Link>
			</Row>
			<Row>
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
