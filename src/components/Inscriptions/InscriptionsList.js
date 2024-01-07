import React from 'react'
import { STATUS } from '../../redux/constants/action-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons'
import CustomTable from '../Table/Table'
const InscriptionsList = ({ inscriptions, errors, status }) => {
	const columns = [
		{ header: 'Apellido', accessor: 'lastName' },
		{ header: 'Nombre', accessor: 'name' },
		{ header: 'Provincia', accessor: 'province' },
		{ header: 'Localidad', accessor: 'locality' },
		{ header: 'Evento', accessor: 'eventName' },
		{ header: 'Precio', accessor: 'price' },
		{ header: 'Estado', accessor: 'status' },
		{ header: 'Detalle', accessor: 'statusDetail' },
		{ header: 'Acciones', accessor: 'actions' },
	]

	const formattedData = inscriptions.map((inscription) => ({
		lastName: inscription._userId?.lastname,
		name: inscription._userId?.name,
		province: inscription?.province,
		locality: inscription?.locality,
		eventName: inscription._eventId?.name,
		price: inscription?.unitPrice,
		status: inscription._orderId?.status,
		statusDetail: inscription._orderId?.status_detail,
		actions: (
			<>
				{inscription._orderId?.status !== 'approved' && (
					<a
						className="btn btn-outline-primary"
						href={inscription._orderId?.init_point}
						target="_blank"
						rel="noopener noreferrer"
					>
						Pagar
					</a>
				)}
				<Link
					className="btn btn-outline-primary"
					to={`/backoffice/inscription/${inscription._id}`}
				>
					<FontAwesomeIcon icon={faEye} className="mr-3" />
				</Link>
			</>
		),
	}))
	return (
		<>
			<h4 className="text-uppercase">
				<Link to={`/backoffice/`}>
					<FontAwesomeIcon icon={faArrowLeft} className="mx-3" />
				</Link>
				Lista de inscripciones
			</h4>
			<div className="table-responsive m-2">
				<CustomTable columns={columns} data={formattedData} />
			</div>
		</>
	)
}

export default InscriptionsList
