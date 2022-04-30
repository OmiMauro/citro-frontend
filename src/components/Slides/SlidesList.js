import React from 'react'
import { Link } from 'react-router-dom'
const SlidesList = ({ slides = [], handleDelete }) => {
	const onDelete = () => {}
	return (
		<>
			<div className='container'>
				<Link
					to={`/backoffice/slides/create/`}
					className='btn btn-outline-success'>
					<i className='fas fa-pencil-alt' />
					Crear Nuevo Slide
				</Link>
				<Link to={`/backoffice/`} className='btn btn-outline-success'>
					<i className='fas fa-pencil-alt' />
					Volver
				</Link>
				<div className='row mt-4'>
					{slides?.map((slide) => {
						return (
							<div className='card col-12 m-3' /* style={{ width: '18rem' }} */>
								<img
									src={slide.image_id.url}
									className='card-img-top m-2'
									alt={slide.text}
								/>

								<div className='card-body'>
									<h6 className='card-subtitle mb-2 text-muted'>
										Orden: {slide.order}
									</h6>

									<Link
										to={`/backoffice/slides/edit/${slide._id}`}
										className=' btn btn-outline-dark'>
										Editar Slide
									</Link>
									<button onClick={onDelete} className=' btn  btn-outline-dark'>
										Eliminar Slide
									</button>
								</div>
							</div>
						)
					})}
					{/* 	<table className='table align-middle table-hover table-striped table-list table-bordered  table-sm'>
					<thead className='thead-list'>
					<tr>
					<th>Texto</th>
					<th>Order</th>
					<th>Image</th>
					</tr>
					</thead>
					<tbody>
						{slides.map((slide) => {
							return (
								<tr key={slide._id}>
								<td className='align-middle'>
								<p className='mt-3'>{slide.text}</p>
								</td>
								<td className='align-middle'>
								<p className='mt-3'>{slide.order}</p>
								</td>
								
									<td className='align-middle'>
									<img
									alt='slide'
									width={'40px'}
									className='img-table rounded mx-auto d-block '
									src={slide.image_id.url}
										/>
										</td>
										<td className='align-middle'>
										<Link to={`/backoffice/slides/edit/${slide._id}`}>
										<button className='btn-list btn-edit'>
										<i className='fas fa-pencil-alt' />
										</button>
										</Link>
										<button
											className='btn-list btn-delete'
											title='Eliminar'
											onClick={() => onDelete(slide._id)}>
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

export default SlidesList
