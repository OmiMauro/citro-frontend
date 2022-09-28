import React, { useState } from 'react'

const InscriptionsForm = ({
	user,
	event,
	inscription,
	errors,
	handleSubmit,
	msg,
	provinces,
	localities,
	handleLocalities,
}) => {
	const [values, setValues] = useState({
		_userId: user?._id ?? '',
		_eventId: event?._id ?? '',
		province: '',
		locality: '',

		_inscription: inscription._id ?? '',
	})
	const handleChange = (e) => {
		const { value, name } = e.target
		setValues({ ...values, [name]: value })
		if (name === 'province') handleLocalities(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(values)
	}
	return (
		<div className="container rounded bg-white mt-5 mb-5">
			<div className="row justify-content-center">
				<div className="col-md-5 border-right">
					<div className="p-3">
						<h4 className="text-center">Registrar mi inscripción</h4>
						<form className="" onSubmit={onSubmit}>
							<div className="row mt-2">
								<div className="col-md-6">
									<label htmlFor="name" className="form-label">
										Nombre
									</label>
									<input
										className="form-control"
										id="name"
										type="text"
										placeholder="Nombre"
										value={user?.name}
										readOnly
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="lastname" className="form-label labels">
										Apellido
									</label>
									<input
										className="form-control"
										id="lastname"
										value={user?.lastname}
										type="text"
										placeholder="Apellido"
										readOnly
									/>
								</div>
							</div>
							<div className="row mt-1">
								<div className="col-md-12">
									<label htmlFor="DNI" className="form-label labels">
										DNI
									</label>
									<input
										className="form-control"
										id="DNI"
										type="text"
										placeholder="DNI"
										value={user?.DNI}
										readOnly
									/>
								</div>
								<div className="col-md-12">
									<label className="form-label" htmlFor="phone">
										Numero de celular*
									</label>
									<input
										type="tel"
										id="phone"
										className="form-control"
										value={user?.phone}
										placeholder="Numero de celular"
										readOnly
									/>
								</div>
								<div className="col-md-12">
									<label className="form-label" htmlFor="email">
										Email*
									</label>
									<input
										type="email"
										id="email"
										className="form-control"
										value={user?.email}
										placeholder="email"
										readOnly
									/>
								</div>
							</div>
							<div className="col-md-12">
								<label className="form-label" htmlFor="province">
									Provinca
								</label>
								<select
									value={values.province}
									onChange={handleChange}
									className="form-select"
									id="province"
									name="province"
									required="required"
								>
									<option hidden />
									{provinces?.map((province) => (
										<option value={province?.nombre} key={province?.id}>
											{province?.nombre}
										</option>
									))}
									<option value="Otro">No se encuentra en la lista</option>
								</select>
								{errors?.map(
									(err) =>
										err.param == 'province' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="col-md-12">
								<label className="form-label" htmlFor="province">
									Localidad
								</label>
								<select
									value={values.locality}
									onChange={handleChange}
									className="form-select"
									id="locality"
									name="locality"
									required="required"
								>
									<option hidden />
									{localities?.map((locality) => (
										<option value={locality?.nombre} key={locality?.id}>
											{locality?.nombre}
										</option>
									))}
									<option value="Other">No se encuentra en la lista</option>
								</select>
								{errors?.map(
									(err) =>
										err.param == 'locality' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>

							<div className="mt-5 text-center">
								<button
									type="submit"
									className="btn btn-primary profile-button"
								>
									Inscribirme
								</button>
							</div>
							{errors?.map(
								(err) =>
									err.msg &&
									!err.param && (
										<div className="text-danger text-center">{err.msg}</div>
									)
							)}
							{msg && <p className="text-center text-success">{msg}</p>}
						</form>
					</div>

					{inscription?.init_point &&
						window.location.replace(inscription?.init_point)}
				</div>
			</div>
		</div>
	)
}

export default InscriptionsForm
