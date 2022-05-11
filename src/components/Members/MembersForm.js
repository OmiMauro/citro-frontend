import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Modal = ({ id, handleUpdateImage }) => {
	return (
		<>
			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Actualizar imagen
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form
								onSubmit={(e) => {
									e.preventDefault()
									const formData = new FormData(e.currentTarget)
									handleUpdateImage(formData)
								}}>
								<div>
									<label htmlFor='image' className='form-label'>
										Imagen* {id}
									</label>
									<input
										className='form-control'
										id='image'
										type='file'
										placeholder='image'
										name='image'
									/>
								</div>
								<div className='d-flex justify-content-center m-2'>
									<button type='submit' className='btn btn-primary'>
										Actualizar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
const MembersForm = ({
	member = {},
	handleSubmit,
	handleUpdateImage,
	errors,
	title,
	msg
}) => {
	const [values, setValues] = useState({
		name: member?.name ?? '',
		lastname: member?.lastname ?? '',
		urlFacebook: member?.urlFacebook ?? '',
		urlInstagram: member?.urlInstagram ?? '',
		urlWhatsapp: member?.urlWhatsapp ?? '',
		image_url: member?.image_id?.url ?? '',
		image: '',
		phone: member.phone ?? ''
	})
	const {
		name,
		lastname,
		urlFacebook,
		urlInstagram,
		urlWhatsapp,
		image,
		image_url,
		phone
	} = values

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === 'image') setValues({ ...values, name: e.target.files[0] })
		setValues({ ...values, [name]: value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		member._id
			? handleSubmit(values)
			: handleSubmit(new FormData(e.currentTarget))
	}
	return (
		<div className='container'>
			<h3 className='text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4'>{title}</h3>
			<div className='row d-flex justify-content-center align-items-center '>
				<div className='col-lg-12 col-xl-11 '>
					<div className='p-md-5'>
						<div className='row justify-content-center'>
							<div className='col-md-10 col-lg-6 col-xl-5'>
								<Modal id={member._id} handleUpdateImage={handleUpdateImage} />
								<form className='mx-1 mx-md-4' onSubmit={onSubmit}>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											{image_url && (
												<div className='d-flex justify-content-center m-2'>
													<img
														src={image_url}
														alt={image_url}
														className='mt-2 w-50'
													/>
												</div>
											)}
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
											{image_url && (
												<div className='d-flex justify-content-center'>
													<button
														type='button'
														className='btn btn-primary'
														data-bs-toggle='modal'
														data-bs-target='#exampleModal'>
														Cambiar imagen
													</button>
												</div>
											)}
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
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												className='form-control'
												id='lastname'
												onChange={handleChange}
												value={lastname}
												type='text'
												placeholder='Apellido'
												name='lastname'
											/>
											<label htmlFor='lastname' className='form-label'>
												Apellido*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'lastname' && (
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
												id='urlFacebook'
												type='text'
												placeholder='https://www.facebook.com/nombre_de_usuario'
												value={urlFacebook}
												name='urlFacebook'
											/>
											<label htmlFor='urlFacebook' className='form-label'>
												URL Facebook *
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlFacebook' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-at fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												type='text'
												id='urlInstagram'
												className='form-control'
												value={urlInstagram}
												name='urlInstagram'
												placeholder='https://www.instagram.com/nombre_de_usuario'
												onChange={handleChange}
											/>
											<label className='form-label' htmlFor='urlInstagram'>
												URL Instagram*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlInstagram' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-at fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												type='text'
												id='urlWhatsapp'
												className='form-control'
												value={urlWhatsapp}
												name='urlWhatsapp'
												placeholder='https://www.whatsapp.com/nombre_de_usuario'
												onChange={handleChange}
											/>
											<label className='form-label' htmlFor='urlWhatsapp'>
												URL Whatsapp*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlWhatsapp' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className='d-flex flex-row align-items-center mb-4'>
										<i className='fa fa-lock fa-lg me-3 fa-fw'></i>
										<div className='form-outline flex-fill mb-0'>
											<input
												id='phone'
												type='phone'
												value={phone}
												onChange={handleChange}
												placeholder='3743123456'
												name='phone'
												className='form-control'
											/>
											<label className='form-label' htmlFor='phone'>
												Número de celular*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'phone' && (
														<div className='text-danger'>{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
										<button type='submit' className='btn btn-primary btn-lg'>
											{member?._id ? 'Actualizar datos' : 'Crear organizador'}
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

export default MembersForm
