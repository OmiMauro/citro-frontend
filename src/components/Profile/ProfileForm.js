import React, { useState } from 'react'
import Modal from '../Modal/Modal'
const ProfileForm = ({
	user,
	handleSubmit,
	handleUpdateImage,
	msg,
	errors
}) => {
	const [values, setValues] = useState({
		name: user?.name ?? '',
		lastname: user?.lastname ?? '',
		DNI: user?.DNI ?? '',
		phone: user?.phone ?? '',
		dateBirth: user?.dateBirth ?? '',
		image: '',
		image_url: user?.image_id?.url ?? ''
	})

	const handleChange = (e) => {
		const { value, name } = e.target
		if (name === 'image') setValues({ ...values, name: e.target.files[0] })
		setValues({ ...values, [name]: value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(values)
	}
	return (
		<section className='container rounded bg-white mt-5 mb-5'>
			<div className='row justify-content-center'>
				<div className='col-md-3 border-right'>
					<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
						<Modal
							handleUpdateImage={handleUpdateImage}
							key={user._id}
							id={user._id}></Modal>
						<img
							className='rounded-circle mt-5'
							width='150px'
							src={
								values.image_url ||
								'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
							}
						/>
						<button
							type='button'
							className='btn btn-primary'
							data-bs-toggle='modal'
							data-bs-target='#modalID'>
							<i className='fa fa-edit'></i>Cambiar
						</button>
						<span className='font-weight-bold'>
							{user?.name}, {user?.lastname}
						</span>
						<span className='text-black-50'>{user?.email}</span>
					</div>
				</div>
				<div className='col-md-5 border-right'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='text-right'>Editar tus datos personales</h4>
						</div>
						<form className='mx-1 mx-md-4' onSubmit={onSubmit}>
							<div className='row mt-2'>
								<div className='col-md-6'>
									<label htmlFor='name' className='form-label'>
										Nombre
									</label>
									<input
										className='form-control'
										onChange={handleChange}
										id='name'
										type='text'
										placeholder='Nombre'
										value={values.name}
										name='name'
									/>

									{errors?.map(
										(err) =>
											err.param == 'name' && (
												<div className='text-danger'>{err.msg}</div>
											)
									)}
								</div>

								<div className='col-md-6'>
									<label htmlFor='lastname' className='form-label labels'>
										Apellido
									</label>
									<input
										className='form-control'
										id='lastname'
										onChange={handleChange}
										value={values.lastname}
										type='text'
										placeholder='Apellido'
										name='lastname'
									/>
									{errors?.map(
										(err) =>
											err.param == 'lastname' && (
												<div className='text-danger'>{err.msg}</div>
											)
									)}
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label htmlFor='DNI' className='form-label labels'>
										DNI
									</label>
									<input
										className='form-control'
										onChange={handleChange}
										id='DNI'
										type='text'
										placeholder='DNI'
										value={values.DNI}
										name='DNI'
									/>

									{errors?.map(
										(err) =>
											err.param == 'DNI' && (
												<div className='text-danger'>{err.msg}</div>
											)
									)}
								</div>
								<div className='col-md-12'>
									<label className='form-label' htmlFor='phone'>
										Numero de celular*
									</label>
									<input
										type='tel'
										id='phone'
										className='form-control'
										value={values.phone}
										name='phone'
										placeholder='Numero de celular'
										onChange={handleChange}
									/>
									{errors?.map(
										(err) =>
											err.param == 'phone' && (
												<div className='text-danger'>{err.msg}</div>
											)
									)}
								</div>
								<div className='col-md-12'>
									<label className='form-label' htmlFor='dateBirth'>
										Fecha de Nacimiento
									</label>
									<input
										type='date'
										id='dateBirth'
										className='form-control'
										value={values.dateBirth}
										name='dateBirth'
										onChange={handleChange}
									/>
									{errors?.map(
										(err) =>
											err.param == 'dateBirth' && (
												<div className='text-danger'>{err.msg}</div>
											)
									)}
								</div>
							</div>
							<div className='mt-5 text-center'>
								<button
									type='submit'
									className='btn btn-primary profile-button'>
									Actualizar datos
								</button>
							</div>
							{msg && <p className='text-success text-center'>{msg}</p>}
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfileForm

{
	/* <div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-image fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											{values.image_url ? (
												<>
													<div className='d-flex justify-content-start '>
														<img
															src={values.image_url}
															alt={values.image_url}
															className='mt-2 w-50'
														/>
													</div>
													<button
														type='button'
														className='btn btn-primary d-flex justify-content-center mt-1 w-50'
														data-bs-toggle='modal'
														data-bs-target='#modalID'>
														Cambiar imagen
													</button>
												</>
											) : (
												<input
													className='form-control'
													id='image'
													onChange={handleChange}
													value={values.image}
													type='file'
													placeholder='image'
													name='image'
												/>
											)}
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
									</div> */
}
