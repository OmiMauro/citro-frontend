import React from 'react'
import { Link } from 'react-router-dom'

const onDelete = (e) => {}
const UsersList = ({ users = [] }) => {
	return (
		<>
			<div className='col'>
				<div className='container'>
					<h3 className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4'>
						Lista de Usuarios
					</h3>
					<Link
						to={`/backoffice/slides/create/`}
						className='btn btn-outline-success'>
						<i className='fas fa-pencil-alt' />
						Lista de usuarios registrados
					</Link>
					<Link to={`/backoffice/`} className='btn btn-outline-success'>
						<i className='fas fa-pencil-alt' />
						Volver
					</Link>
					<div className='table-responsive'>
						<table className='table align-middle table-hover table-striped table-list table-bordered  table-sm'>
							<thead className='thead-list'>
								<tr>
									<th>Nombre</th>
									<th>Apellido</th>
									<th>Email</th>
									<th>Celular</th>
									<th>Rol</th>
									<th>Verificado</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{users?.map((user) => {
									return (
										<tr key={user._id}>
											<td className='align-middle'>
												<p className='mt-3'>{user.name}</p>
											</td>
											<td className='align-middle'>
												<p className='mt-3'>{user.lastname}</p>
											</td>
											<td className='align-middle'>
												<p className='mt-3'>{user.email}</p>
											</td>
											<td className='align-middle'>
												<p className='mt-3'>{user.phone}</p>
											</td>
											<td className='align-middle'>
												<p className='mt-3'>{user.roleId}</p>
											</td>
											<td className='align-middle'>
												<p className='mt-3'>{user.isVerified ? 'Si' : 'No'}</p>
											</td>
											{/* <td className='align-middle'>
											<img
												alt='user'
												width={'40px'}
												className='img-table rounded mx-auto d-block '
												src={user.image_id.url}
											/>
										</td> */}
											<td className='align-middle'>
												<Link
													to={`/backoffice/users/edit/${user._id}`}
													className='mt-1'>
													<button className='btn-list btn-edit'>
														Edit
														<i className='fas fa-pencil-alt' />
													</button>
												</Link>
												<button
													className='btn-list btn-delete'
													title='Eliminar'
													onClick={() => onDelete(user._id)}>
													Dels
													<i className='fa fa-trash-alt' />
												</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default UsersList
