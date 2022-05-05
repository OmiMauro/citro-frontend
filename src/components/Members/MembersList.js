import React from 'react'
import { Link } from 'react-router-dom'
const MembersList = ({ members, handleDelete }) => {
	const onDelete = (id) => {
		handleDelete(id)
	}
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
									src={member?.image_id?.url}
									className='card-img-top m-2 w-25'
									alt={member?.text}
								/>
								<div className='card-title'>
									<h6 className=' mb-2 text-muted h4'>
										{member?.name}, {member?.lastname}
									</h6>
								</div>
								<div className='card-body '>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member?.urlFacebook}
											target={'_blank'}>
											{member?.urlFacebook}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member?.urlInstagram}
											target={'_blank'}>
											{member?.urlInstagram}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member?.urlWhatsapp}
											target={'_blank'}>
											{member?.urlWhatsapp}
										</a>
									</div>
									<div className='d-flex justify-content-center'>
										<a
											className='card-subtitle mb-2 text-muted h-6 text-black'
											href={member?.phone}
											target={'_blank'}>
											{member?.phone}
										</a>
									</div>
									<div className='card-footer text-muted justify-content-center d-flex'>
										<Link
											to={`/backoffice/members/edit/${member?._id}`}
											className=' btn btn-outline-dark'>
											Editar Organizador
										</Link>
										<button
											onClick={() => onDelete(member._id)}
											className=' btn btn-outline-dark'>
											Eliminar Organizador
										</button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default MembersList
