import React from 'react'
import { STATUS } from '../../redux/constants/action-types'
import { Link } from 'react-router-dom'
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
								<th scope="col">Estado</th>
								<th scope="col">Detalle</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						{console.log(inscriptions[inscriptions.length - 1])}
						<tbody className="table-striped">
							{inscriptions?.map((inscription, index) => {
								const { _orderId, _userId } = inscription
								return (
									<tr key={inscription?._id}>
										<th>{_userId?.lastname}</th>
										<th>{_userId?.name}</th>
										<th>{inscription?.province}</th>
										<th>{inscription?.locality}</th>
										<th>{inscription?._eventId?.name}</th>
										<th>{inscription?.unitPrice}</th>
										<th>{_orderId?.status}</th>
										<th>{_orderId?.status_detail}</th>

										<th>
											{_orderId?.status !== 'approved' && (
												<a
													className="btn btn-outline-primary"
													href={inscription?._orderId?.init_point}
													target="_blank"
												>
													Pagar
												</a>
											)}
											<Link
												className="btn btn-outline-primary"
												to={`/backoffice/inscription/${inscription._id}`}
											>
												Ver
											</Link>
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
