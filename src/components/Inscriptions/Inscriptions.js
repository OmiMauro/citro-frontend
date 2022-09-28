import React, { useState } from 'react'
import { useEffect } from 'react'
import { STATUS } from '../../redux/constants/action-types'
import { Link } from 'react-router-dom'
const Inscriptions = ({ inscriptions, errors, status, msg }) => {
	return (
		<div className=" mt-5">
			{status === STATUS.FAILED && (
				<>
					<div className="d-flex justify-content-center text-danger ">
						{msg}
					</div>
				</>
			)}
			{status === STATUS.PENDING && (
				<div className="d-flex justify-content-center ">
					<div className="spinner-grow text-secondary " role="status">
						<span className="visually-hidden">Cargando...</span>
					</div>
				</div>
			)}
			{status === STATUS.SUCCESSFUL && (
				<>
					<h4 className="text-center text-muted">INSCRIPCIONES</h4>
					<h6>Cantidad de Inscripciones: {inscriptions?.total}</h6>
					<table className="table table-striped table-light table-bordered table-hover">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Apellido</th>
								<th scope="col">Nombre</th>
								<th scope="col">Provincia</th>
								<th scope="col">Localidad</th>
								<th scope="col">Precio</th>
								<th scope="col">Evento</th>
								<th scope="col">Detalles</th>
							</tr>
						</thead>
						<tbody className="table-striped">
							{inscriptions?.docs?.map((inscription, index) => {
								return (
									<tr key={inscription?._id}>
										<th>
											{inscriptions.page == 1
												? index + 1
												: index +
												  1 +
												  inscriptions.limit * (inscriptions.page - 1)}
										</th>
										<th>{inscription?._userId?.lastname}</th>
										<th>{inscription?._userId?.name}</th>
										<th>{inscription?.provinceOrigin}</th>
										<th>{inscription?.locationOrigin}</th>
										<th>{inscription?.unitPrice}</th>
										<th>{inscription?._eventId?.name}</th>
										<Link
											to={`/backoffice/inscription/${inscription._id}`}
											className="btn btn-outline-success"
										>
											Ver
										</Link>
									</tr>
								)
							})}
						</tbody>
					</table>
				</>
			)}
		</div>
	)
}

export default Inscriptions
