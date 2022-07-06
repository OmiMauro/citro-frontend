import React from 'react'
import { STATUS } from '../../redux/constants/action-types'

const Inscriptions = ({ inscriptions, errors, status, msg }) => {
	return (
		<div className="container">
			{status === STATUS.FAILED && (
				<>
					<div className="d-flex justify-content-center ">{msg}</div>
				</>
			)}
			{status === STATUS.PENDING && (
				<div className="d-flex justify-content-center ">
					<div className="spinner-grow text-secondary " role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
			{status === STATUS.SUCCESSFUL && (
				<table className="table table-striped table-light table-bordered table-hover">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Apellido</th>
							<th scope="col">Nombre</th>
							<th scope="col">Provincia</th>
							<th scope="col">Localidad</th>
							<th scope="col">Precio</th>
						</tr>
					</thead>
					<tbody className="table-striped">
						{inscriptions.map((inscription, index) => {
							return (
								<tr key="inscription._id">
									<th>{index}</th>
									<th>{inscription?._userId?.lastname}</th>
									<th>{inscription?._userId?.name}</th>
									<th>{inscription?.provinceOrigin}</th>
									<th>{inscription?.locationOrigin}</th>
									<th>{inscription?.unitPrice}</th>
								</tr>
							)
						})}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Inscriptions
