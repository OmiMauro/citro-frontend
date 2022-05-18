import React from 'react'
import { Link } from 'react-router-dom'
const SlidesList = ({ slides = [], handleDelete, msg }) => {
	return (
		<>
			<div className='col'>
				<h3 className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4 text-uppercase'>
					Lista de Slides
				</h3>
				<div className='container'>
					<div className='d-flex justify-content-center col-12'>
						<Link
							to={`/backoffice/slides/create/`}
							className='btn btn-outline-success col-4'>
							<i className='fas fa-pencil-alt' />
							Crear Nuevo Slide
						</Link>
						<Link to={`/backoffice/`} className='btn btn-outline-success col-4'>
							<i className='fas fa-pencil-alt' />
							Volver
						</Link>
					</div>
					<div className='row mt-4'>
						{slides?.map((slide) => {
							return (
								<div className='card col-12 m-3' key={slide._id}>
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
										{msg && <p>{msg}</p>}
										<button
											onClick={(e) => {
												e.preventDefault()
												handleDelete(slide._id)
											}}
											className='btn btn-outline-dark'>
											Eliminar Slide
										</button>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default SlidesList
