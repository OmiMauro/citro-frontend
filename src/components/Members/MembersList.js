import React from 'react'
import { Link } from 'react-router-dom'
const MembersList = ({ members, onDelete }) => {
	return (
		<>
			<div className='container '>
				<div className='row justify-content-center d-flex'>
					<Link
						to={`/backoffice/members/create`}
						className='btn btn-outline-success col-3'>
						Agregar Organizador
					</Link>
					<Link to={`/backoffice/`} className='btn col-3 btn-outline-success '>
						Volver
					</Link>
				</div>
				<div className='row mt-4 justify-content-center'>
					{members?.map((member) => {
						return (
							<div
								className='card col-12 col-lg-6 m-2 align-items-center d-flex '
								key={member._id} /* style={{ width: '18rem' }} */
							>
								<img
									src={member.image_id.url}
									className='card-img-top m-2 w-25'
									alt={member.text}
								/>
								<div className='card-title'>
									<h6 className=' mb-2 text-muted h4'>
										{member.name}, {member.lastname}
									</h6>
								</div>
								<div className='card-body '>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member.urlFacebook}
											target={'_blank'}>
											{member.urlFacebook}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member.urlInstagram}
											target={'_blank'}>
											{member.urlInstagram}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member.urlWhatsapp}
											target={'_blank'}>
											{member.urlWhatsapp}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member.phone}
											target={'_blank'}>
											{member.phone}
										</a>
									</div>
									<div class='card-footer text-muted justify-content-center d-flex'>
										<Link
											to={`/backoffice/members/edit/${member._id}`}
											className=' btn btn-outline-dark'>
											Editar Organizador
										</Link>
										<button
											onClick={onDelete}
											className=' btn  btn-outline-dark'>
											Eliminar Organizador
										</button>
									</div>
								</div>
							</div>
						)
					})}
					{/* <table className='table align-middle table-hover table-striped table-list table-bordered  table-sm'>
						<thead className='thead-list'>
							<tr>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Facebook</th>
								<th>Instagram</th>
								<th>Whatsapp</th>
								<th>Foto</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{members.map((member) => {
								return (
									<tr key={member._id}>
										<td className='align-middle'>
											<p className='mt-3'>{member.name}</p>
										</td>
										<td className='align-middle'>
											<p className='mt-3'>{member.lastname}</p>
										</td>
										<td className='align-middle'>
											<a className='mt-3 text-black'>{member.urlFacebook}</a>
										</td>
										<td className='align-middle'>
											<a className='mt-3 text-black'>{member.urlInstagram}</a>
										</td>
										<td className='align-middle'>
											<a className='mt-3 text-black'>{member.urlWhatsapp}</a>
										</td>
										<td className='align-middle'>
											<img
												alt='member'
												width={'40px'}
												className='img-table rounded mx-auto d-block '
												src={member.image_id.url}
											/>
										</td>
										<td className='align-middle'>
											<Link to={`/backoffice/members/edit/${member._id}`}>
												<button className='btn-list btn-edit'>
													<i className='fas fa-pencil-alt' />
												</button>
											</Link>
											<button
												className='btn-list btn-delete'
												title='Eliminar'
												onClick={() => onDelete(member._id)}>
												<i className='fa fa-trash-alt' />
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table> */}
				</div>
			</div>
		</>
	)
}

export default MembersList
