import React, { useState, useEffect } from 'react'
const MembersForm = ({ member = {}, handleSubmit, errors }) => {
	const [values, setValues] = useState({
		name: member.name ?? '',
		lastname: member.lastname ?? '',
		urlFacebook: member.urlFacebook ?? '',
		urlInstagram: member.urlInstagram ?? '',
		urlWhatsapp: member.urlWhatsapp ?? '',
		image: member.image ?? '',
		phone: member.phone ?? ''
	})
	const {
		name,
		lastname,
		urlFacebook,
		urlInstagram,
		urlWhatsapp,
		image,
		phone
	} = values
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
		<div className='container'>
			<div className='row d-flex justify-content-center align-items-center '>
				<div className='col-lg-12 col-xl-11'>
					<div className=' text-black'>
						<div className=' p-md-5'>
							<div className='row justify-content-start'>
								<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
									<form className='mx-1 mx-md-4' onSubmit={onSubmit}>
										<div className='d-flex flex-row align-items-center mb-4'>
											<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
													image*
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
											<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
											<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
											<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
											<i class='fa fa-at fa-lg me-3 fa-fw'></i>
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
											<i class='fa fa-at fa-lg me-3 fa-fw'></i>
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
												Crear / Editar
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MembersForm
