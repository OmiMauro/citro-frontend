import React from 'react'
import { Link } from 'react-router-dom'
const GaleryList = ({ galery, handleDelete }) => {
	return (
		<>
			<div className='row justify-content-center d-flex mt-5'>
				<h1 className='h2 text-center text-uppercase'>Lista de imagenes</h1>
				<Link
					to={`/backoffice/galery/create`}
					className='btn btn-outline-success col-3'>
					Agregar Imagenes
				</Link>
				<Link to={`/backoffice/`} className='btn col-3 btn-outline-success '>
					Volver
				</Link>
			</div>
			<div className='table-responsive m-2'>
				<table className='table align-middle table-hover table-striped table-list table-bordered  table-sm'>
					<thead className='thead-list'>
						<tr>
							<th>Imagen</th>
							<th>URL</th>
							<th>Ancho</th>
							<th>Alto</th>
						</tr>
					</thead>
					<tbody>
						{galery?.docs?.map((picture?) => {
							return (
								<tr key={picture?._id}>
									<td className='align-middle'>
										<img
											alt={picture?._id}
											width={'120px'}
											className='img-table rounded mx-auto d-block '
											src={picture?.image_id.secure_url}
										/>
									</td>
									<td className='align-middle'>
										<a
											href={picture?.image_id.secure_url}
											target={'_blank'}
											className='mt-3 text-dark'>
											{picture?.image_id.secure_url}
										</a>
									</td>
									<td className='align-middle'>
										<p className='mt-3'>{picture?.image_id.width}</p>
									</td>
									<td className='align-middle'>
										<p className='mt-3'>{picture?.image_id.height}</p>
									</td>
									<td className='align-middle'>
										<button
											className=''
											title='Eliminar'
											onClick={() => handleDelete(picture?._id)}>
											Eliminar
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

export default GaleryList
