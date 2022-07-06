import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { editorConfig } from '../Editor/editorConfig'

const OrganizationForm = ({
	organization,
	handleSubmit,
	errors,
	handleUpdateImage,
	msg,
}) => {
	const [values, setValues] = useState({
		name: organization?.name ?? '',
		image_url: organization?.image_id?.url ?? '',
		image: '',
		phone: organization?.phone ?? '',
		email: organization?.email ?? '',
		urlWhatsapp: organization?.urlWhatsapp ?? '',
		urlInstagram: organization?.urlInstagram ?? '',
		urlFacebook: organization?.urlFacebook ?? '',
		aboutUs: organization?.aboutUs ?? '',
		welcomeText: organization?.welcomeText ?? '',
	})
	const {
		name,
		image,
		image_url,
		phone,
		email,
		urlWhatsapp,
		urlInstagram,
		urlFacebook,
		aboutUs,
		welcomeText,
	} = values
	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === 'image') setValues({ ...values, name: e.target.files[0] })
		setValues({ ...values, [name]: value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(values)
	}
	ClassicEditor.defaultConfig = editorConfig
	return (
		<div className="container">
			<h3 className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
				Editar datos de la organización
			</h3>
			<div className="row d-flex justify-content-center align-items-center ">
				<div className="col-lg-12 col-xl-11 ">
					<div className="p-md-5">
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-8 col-xl-10">
								<Modal
									id={organization._id}
									handleUpdateImage={handleUpdateImage}
								/>
								<form className="mx-1 mx-md-4" onSubmit={onSubmit}>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-image fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											{image_url ? (
												<>
													<div className="d-flex justify-content-start ">
														<img
															src={image_url}
															alt={image_url}
															className="mt-2 w-50"
														/>
													</div>
													<button
														type="button"
														className="btn btn-primary d-flex justify-content-center mt-1 w-50"
														data-bs-toggle="modal"
														data-bs-target="#modalID"
													>
														Cambiar imagen
													</button>
												</>
											) : (
												<input
													className="form-control"
													id="image"
													onChange={handleChange}
													value={image}
													type="file"
													placeholder="image"
													name="image"
												/>
											)}
											<label htmlFor="image" className="form-label">
												Imagen*
											</label>

											{errors?.map(
												(err) =>
													err.param == 'image' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-building fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												className="form-control"
												onChange={handleChange}
												id="name"
												type="text"
												placeholder="Nombre de la organizacion"
												value={name}
												name="name"
											/>
											<label htmlFor="name" className="form-label">
												Nombre de la organizacion
											</label>
											{errors?.map(
												(err) =>
													err.param == 'name' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-at fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												className="form-control"
												id="email"
												onChange={handleChange}
												value={email}
												type="text"
												placeholder="correo_electronico@gmail.com"
												name="email"
											/>
											<label htmlFor="email" className="form-label">
												Correo Electronico
											</label>
											{errors?.map(
												(err) =>
													err.param == 'email' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-facebook fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												className="form-control"
												onChange={handleChange}
												id="urlFacebook"
												type="text"
												placeholder="https://www.facebook.com/nombre_de_usuario"
												value={urlFacebook}
												name="urlFacebook"
											/>
											<label htmlFor="urlFacebook" className="form-label">
												URL Facebook *
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlFacebook' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-instagram fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												type="text"
												id="urlInstagram"
												className="form-control"
												value={urlInstagram}
												name="urlInstagram"
												placeholder="https://www.instagram.com/nombre_de_usuario"
												onChange={handleChange}
											/>
											<label className="form-label" htmlFor="urlInstagram">
												URL Instagram*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlInstagram' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-whatsapp fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												type="text"
												id="urlWhatsapp"
												className="form-control"
												value={urlWhatsapp}
												name="urlWhatsapp"
												placeholder="https://www.whatsapp.com/nombre_de_usuario"
												onChange={handleChange}
											/>
											<label className="form-label" htmlFor="urlWhatsapp">
												URL Whatsapp*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'urlWhatsapp' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-phone fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												id="phone"
												type="phone"
												value={phone}
												onChange={handleChange}
												placeholder="3743123456"
												name="phone"
												className="form-control"
											/>
											<label className="form-label" htmlFor="phone">
												Número de celular*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'phone' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-bold fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<CKEditor
												editor={ClassicEditor}
												required
												config={{ placeholder: 'Descripción corta' }}
												data={values.aboutUs}
												data-testid="description"
												id="aboutUs"
												name="aboutUs"
												onChange={(event, editor) => {
													const data = editor.getData()
													setValues({
														...values,
														aboutUs: data,
													})
												}}
											/>
											<label className="form-label" htmlFor="aboutUs">
												Sobre Nosotros - Decripcion larga*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'aboutUs' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-comment fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<textarea
												id="welcomeText"
												type="welcomeText"
												value={welcomeText}
												onChange={handleChange}
												placeholder="Descripcion breve"
												name="welcomeText"
												className="form-control"
												cols="30"
												rows="10"
											/>
											<label className="form-label" htmlFor="welcomeText">
												Texto de bienvenida
											</label>
											{errors?.map(
												(err) =>
													err.param == 'welcomeText' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>
									<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
										<button type="submit" className="btn btn-primary btn-lg">
											Actualizar datos
										</button>
									</div>
									{msg && <p className="text-success text-center">{msg}</p>}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrganizationForm
