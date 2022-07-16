import React from 'react'
import { STATUS } from '../../redux/constants/action-types'

const InscriptionsList = ({ inscriptions, errors, status }) => {
	return (
		<div className="container">
			{status === STATUS.SUCCESSFUL && (
				<>
					<h4 className="text-center text-muted">MIS INSCRIPCIONES</h4>
					<table className="table table-striped table-light table-bordered table-hover">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Apellido</th>
								<th scope="col">Nombre</th>
								<th scope="col">Provincia</th>
								<th scope="col">Localidad</th>
								<th scope="col">Evento</th>
								<th scope="col">Precio</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						<tbody className="table-striped">
							{inscriptions?.map((inscription, index) => {
								return (
									<tr key={inscription._id}>
										<th>{inscription?._userId?.lastname}</th>
										<th>{inscription?._userId?.name}</th>
										<th>{inscription?.provinceOrigin}</th>
										<th>{inscription?.locationOrigin}</th>
										<th>{inscription?._eventId.name}</th>
										<th>{inscription?.unitPrice}</th>
										<th>
											<a
												className="btn btn-outline-primary"
												href={inscription?._orderId?.init_point}
												target="_blank"
											>
												Pagar
											</a>
										</th>
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

export default InscriptionsList
