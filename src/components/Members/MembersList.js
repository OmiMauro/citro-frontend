import React from 'react'
import { Link } from 'react-router-dom'
const MembersList = ({ members, onDelete }) => {
	return (
		<>
			<div className='table-responsive'>
				<table className='table align-middle table-hover table-striped table-list table-bordered  table-sm'>
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
				</table>
			</div>
		</>
	)
}

export default MembersList
