import React, { useState } from 'react'

const Cars = ({ car, handleSubmit, errors, msg }) => {
	const [values, setValues] = useState({
		name: car?.name ?? '',
		registration: car?.registration ?? '',
		year: car?.year ?? '',
		VTV: car?.VTV ?? false
	})
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(values)
	}
	return (
		<div className='container'>
			<h3 className='text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4'>
				Editar los datos de tú automóvil
			</h3>
			<div className='row d-flex justify-content-center align-items-center '>
				<div className='col-lg-12 col-xl-11 '>
					<div className='p-md-5'>
						<div className='row justify-content-center'>
							<div className='col-md-10 col-lg-8 col-xl-10'>
								<form className='mx-1 mx-md-4' onSubmit={onSubmit}>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-building fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												className='form-control'
												onChange={handleChange}
												id='name'
												type='text'
												placeholder='Nombre del auto'
												value={values.name}
												name='name'
											/>
											<label htmlFor='name' className='form-label'>
												Nombre del auto
											</label>
											{errors?.map(
												(err) =>
													err.param == 'name' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-at fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												className='form-control'
												id='registration'
												onChange={handleChange}
												value={values.registration}
												type='text'
												placeholder='Patente'
												name='registration'
											/>
											<label htmlFor='registration' className='form-label'>
												Patente
											</label>
											{errors?.map(
												(err) =>
													err.param == 'registration' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-instagram fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												type='tel'
												id='year'
												className='form-control'
												value={values.year}
												name='year'
												placeholder='Año de fabricación'
												onChange={handleChange}
											/>
											<label className='form-label' htmlFor='year'>
												Año de fabricación
											</label>
											{errors?.map(
												(err) =>
													err.param == 'year' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-whatsapp fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												type='date'
												id='VTV'
												className='form-control'
												value={values.VTV}
												name='VTV'
												placeholder='https://www.whatsapp.com/nombre_de_usuario'
												onChange={handleChange}
											/>
											<label className='form-label' htmlFor='VTV'>
												¿Tiene VTV?
											</label>
											{errors?.map(
												(err) =>
													err.param == 'VTV' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
										<button type='submit' className='btn btn-primary btn-lg'>
											Actualizar datos
										</button>
									</div>
									{msg && <p className='text-success text-center'>{msg}</p>}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cars
