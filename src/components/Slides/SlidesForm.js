import React, { useState } from 'react'
import { STATUS } from '../../redux/constants/action-types'

const SlidesForm = ({ slide = {}, handleSubmit, errors, status, msg }) => {
	const [values, setValues] = useState({
		image: slide?.image ?? '',
		text: slide?.text ?? '',
		order: slide?.order ?? ''
	})
	const { image, text, order } = values
	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === 'image') setValues({ ...values, name: e.target.files[0] })
		setValues({ ...values, [name]: value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		handleSubmit(formData)
	}
	return (
		<>
			<div className='col'>
				<div className='container'>
					<h3 className='text-center h3 m-3'>Agregar un nuevo slide </h3>
					<div className='row d-flex justify-content-center align-items-center '>
						<div className='col-lg-12 col-xl-11'>
							<div className='row justify-content-center'>
								<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
									<form className='mx-1 mx-md-4' onSubmit={onSubmit}>
										<div className='d-flex flex-row align-items-center mb-4'>
											<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
											<div className='form-outline flex-fill mb-0'>
												<input
													className='form-control'
													id='image'
													onChange={handleChange}
													value={image}
													type='file'
													placeholder='image'
													name='image'
												/>
												<label htmlFor='image' className='form-label'>
													Imagen*
												</label>
												{errors?.map(
													(err) =>
														err.param == 'image' && (
															<div className='text-danger'>{err.msg}</div>
														)
												)}
											</div>
										</div>
										<div className='d-flex flex-row align-items-center mb-4'>
											<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
											<div className='form-outline flex-fill mb-0'>
												<input
													className='form-control'
													onChange={handleChange}
													id='text'
													type='text'
													placeholder='Descripcion'
													value={text}
													name='text'
												/>
												<label htmlFor='text' className='form-label'>
													Descripción
												</label>
												{errors?.map(
													(err) =>
														err.param == 'text' && (
															<div className='text-danger'>{err.msg}</div>
														)
												)}
											</div>
										</div>
										<div className='d-flex flex-row align-items-center mb-4'>
											<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
											<div className='form-outline flex-fill mb-0'>
												<input
													className='form-control'
													id='order'
													onChange={handleChange}
													value={order}
													type='number'
													placeholder='order'
													name='order'
												/>
												<label htmlFor='order' className='form-label'>
													Orden*
												</label>
												{errors?.map(
													(err) =>
														err.param == 'order' && (
															<div className='text-danger'>{err.msg}</div>
														)
												)}
											</div>
										</div>
										<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
											{status === STATUS.PENDING ? (
												<div
													class='spinner-border text-secondary'
													role='status'>
													<span class='visually-hidden'>Loading...</span>
												</div>
											) : (
												<button
													type='submit'
													className='btn btn-primary btn-lg'>
													Crear
												</button>
											)}
										</div>
									</form>
									{msg && <p className='text-center text-success'>{msg}</p>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SlidesForm
