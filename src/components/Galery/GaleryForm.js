import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GaleryForm = ({ galery, handleSubmit, errors, status, msg }) => {
	const [values, setValues] = useState({
		name: '',
		image: ''
	})
	const { name, image } = values
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
	const onSubmitImage = (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		handleSubmit(formData)
	}

	return (
		<>
			<div className='container'>
				<h3 className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
					Cargar imagenes
				</h3>
				<div className='col-xl-11'>
					<div className='row d-flex justify-content-center align-items-center '>
						<Link
							to={`/backoffice/galery`}
							className='btn btn-outline-success col-5'>
							<i className='fas fa-pencil-alt' />
							Lista de imagenes
						</Link>
						<Link
							to={`/backoffice/galery`}
							className='btn btn-outline-success col-5'>
							<i className='fas fa-pencil-alt' />
							Volver
						</Link>
						<div className='row justify-content-start mt-5'>
							<div className='col-md-10 col-lg-12 col-xl-5 order-2 order-lg-1'>
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
												multiple
												name='image'
											/>
											<label htmlFor='image' className='form-label'>
												Imagenes*
											</label>
											<span>Formatos permitidos: jpg/png/jpeg</span>
											{errors?.map(
												(err) =>
													err.param === 'image' && (
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
												id='name'
												type='text'
												placeholder='Nombre/s'
												value={name}
												name='name'
											/>
											<label htmlFor='name' className='form-label'>
												Nombre/s*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'name' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
										{status === 'PENDING' ? (
											<div class='spinner-border text-secondary' role='status'>
												<span class='visually-hidden'>Loading...</span>
											</div>
										) : (
											<button type='submit' className='btn btn-primary btn-lg'>
												Agregar fotos
											</button>
										)}
									</div>
									{msg && <p className='text-success'>{msg}</p>}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GaleryForm
