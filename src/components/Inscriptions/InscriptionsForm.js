import React, { useState } from 'react'

const InscriptionsForm = ({ user, event, errors, handleSubmit, msg }) => {
	const [values, setValues] = useState({
		_userId: user?._id ?? '',
		_eventId: event?._id ?? '',
		province: '',
		locality: '',
	})
	const handleChange = (e) => {
		const { value, name } = e.target
		setValues({ ...values, [name]: value })
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
						<div className="d-flex justify-content-between align-items-center mb-3">
							<h4 className="text-right">Registrar mi inscripción</h4>
						</div>
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
							<div className="row mt-3">
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
							</div>
							<div className="mt-5 text-center">
								<button
									type="submit"
									className="btn btn-primary profile-button"
								>
									Inscribirme
								</button>
							</div>
							{msg && <p className="text-success text-center">{msg}</p>}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InscriptionsForm
{
	/* <div className='form-floating'>
                    <select
                      value={locationOrigin}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          locationOrigin: e.target.value
                        })}
                      className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2'
                      id='locationOrigin'
                      name='locationOrigin'
                      required='required'
                    >
                      <option hidden />
                      {locations.map(item => (
                        <option value={item.nombre} key={item.id}>
                          {item.nombre}
                        </option>
                      ))}
                      <option value='Other'>No se encuentra en la lista</option>
                    </select>
                    <label for='locationOrigin'>Localidad de Origen</label>
                  </div>
									
									<div className='form-floating'>
                    <select
                      value={provinceOrigin}
                      onChange={e => {
                        setValues({
                          ...values,
                          error: false,
                          provinceOrigin: e.target.value
                        })
                        const name = e.target.value
                        handleLocality(name)
                      }}
                      className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2'
                      id='provinceOrigin'
                      name='provinceOrigin'
                      required='required'
                    >
                      <option hidden />
                      {provinces.map(prov => (
                        <option value={prov.nombre} key={prov.id}>
                          {prov.nombre}
                        </option>
                      ))}
                    </select>
                    <label for='provinceOrigin p-4'>Provincia de Origen</label>
                  </div>
									
						 const handleProvinces = async () => {
    const response = await getProvinces()
    const sorted = response.data.provincias.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setProvinces(sorted)
  }			
									
				
  const handleLocality = async name => {
    const response = await getLocalidades(name)
    const sorted = await response.data.municipios.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setLocations(sorted)
  }					

	import axios from 'axios'

const urlBase = 'https://apis.datos.gob.ar/georef/api'
const getProvinces = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/provincias?campos=id,nombre`
    })
    return response
  } catch (e) {
    console.error(e)
  }
}
const getLocalidades = async province => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/municipios?provincia=${province}&campos=id,nombre&max=600`
    })
    return response
  } catch (e) {
    console.error(e)
  }
}

export { getProvinces, getLocalidades }

									*/
}
