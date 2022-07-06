import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { editorConfig } from '../Editor/editorConfig'

const EventForm = ({ event, handleSubmit, errors, handleUpdateImage, msg }) => {
	const [values, setValues] = useState({
		name: organization?.name ?? '',
		image_url: organization?.image_id?.url ?? '',
		price: '',
		valid_until: organization?.valid_until ?? '',
		dates: organization?.dates ?? '',
		country: organization?.country ?? '',
		province: organization?.province ?? '',
		locality: organization?.locality ?? '',
		description: organization?.description ?? '',
		is_public: organization?.is_public ?? '',
	})
	const {
		name,
		image,
		image_url,
		valid_until,
		dates,
		country,
		province,
		locality,
		description,
		is_public,
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
				Editar datos del evento
			</h3>
			<div className="row d-flex justify-content-center align-items-center ">
				<div className="col-lg-12 col-xl-11 ">
					<div className="p-md-5">
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-8 col-xl-10">
								<Modal id={event._id} handleUpdateImage={handleUpdateImage} />
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
												placeholder="Nombre del evento"
												value={name}
												name="name"
											/>
											<label htmlFor="name" className="form-label">
												Nombre del evento
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
												id="dates"
												onChange={handleChange}
												value={dates}
												type="date"
												name="dates"
											/>
											<label htmlFor="dates" className="form-label">
												Fechas del evento
											</label>
											{errors?.map(
												(err) =>
													err.param == 'dates' && (
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
												id="country"
												className="form-control"
												value={country}
												name="country"
												placeholder="https://www.whatsapp.com/nombre_de_usuario"
												onChange={handleChange}
											/>
											<label className="form-label" htmlFor="country">
												URL Whatsapp*
											</label>
											{errors?.map(
												(err) =>
													err.param == 'country' && (
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
												id="province"
												className="form-control"
												value={province}
												name="province"
												placeholder="Provincia"
												onChange={handleChange}
											/>
											<label className="form-label" htmlFor="province">
												Provincia
											</label>
											{errors?.map(
												(err) =>
													err.param == 'province' && (
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
												id="locality"
												type="text"
												placeholder="Localidad"
												value={locality}
												name="locality"
											/>
											<label htmlFor="locality" className="form-label">
												Localidad
											</label>
											{errors?.map(
												(err) =>
													err.param == 'locality' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className="d-flex flex-row align-items-center mb-4">
										<i className="fa fa-valid_until fa-lg me-3 fa-fw"></i>
										<div className="form-outline flex-fill mb-0">
											<input
												id="valid_until"
												type="date"
												value={valid_until}
												onChange={handleChange}
												placeholder="Valido hasta: "
												name="valid_until"
												className="form-control"
											/>
											<label className="form-label" htmlFor="valid_until">
												Valido hasta:
											</label>
											{errors?.map(
												(err) =>
													err.param == 'valid_until' && (
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
												config={{ placeholder: 'Descripción del evento' }}
												data={description}
												data-testid="description"
												id="description"
												name="description"
												onChange={(event, editor) => {
													const data = editor.getData()
													setValues({
														...values,
														description: data,
													})
												}}
											/>
											<label className="form-label" htmlFor="description">
												Descripcion del evento
											</label>
											{errors?.map(
												(err) =>
													err.param == 'description' && (
														<div className="text-danger">{err.msg}</div>
													)
											)}
										</div>
									</div>

									<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
										<button type="submit" className="btn btn-primary btn-lg">
											{event?._id ? 'Actualizar datos' : 'Crear evento'}
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

export default EventForm
