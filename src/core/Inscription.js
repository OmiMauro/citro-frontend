import React, { useState, useEffect } from 'react'
import { getProvinces, getLocalidades } from '../services/locations'
/* import { addInscription } from '../services/inscriptions' */
import { getPreferenceMP } from '../services/mercadopago'
import Input from './Input'
const Inscription = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    DNI: '',
    dateBirth: '1980-01-01',
    numberCell: '',
    provinceOrigin: '',
    locationOrigin: '',
    email: '',
    nameCar: '',
    registrationCar: '',
    colorCar: '',
    styleCar: '',
    yearCar: '',
    versionCar: '',
    VTV: '',
    arrivalDate: '2021-11-19',
    dateToProvince: '2021-11-21',
    travelPeople: '',
    error: '',
    loading: false
  })

  const [provinces, setProvinces] = useState([])
  const [locations, setLocations] = useState([])
  const [selectTermsConditions, setSelectTermsConditions] = useState(false)

  const handleProvinces = async () => {
    const response = await getProvinces()
    const sorted = response.data.provincias.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setProvinces(sorted)
  }

  useEffect(() => {
    async function getProvincesHook () {
      await handleProvinces()
    }
    getProvincesHook()
  }, [])

  const handleLocality = async (name) => {
    const response = await getLocalidades(name)
    const sorted = await response.data.municipios.sort(function (a, b) {
      if (a.nombre > b.nombre) return 1
      if (a.nombre < b.nombre) return -1
      return 0
    })
    setLocations(sorted)
  }
  const {
    name,
    lastname,
    dateBirth,
    DNI,
    numberCell,
    provinceOrigin,
    locationOrigin,
    email,
    nameCar,
    registrationCar,
    colorCar,
    styleCar,
    yearCar,
    versionCar,
    VTV,
    travelPeople,
    arrivalDate,
    dateToProvince,
    error,
    loading
  } = values
  const handleInscription = async event => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    const inscription = {
      name,
      lastname,
      dateBirth,
      DNI,
      numberCell,
      provinceOrigin,
      locationOrigin,
      email,
      nameCar,
      registrationCar,
      colorCar,
      styleCar,
      yearCar,
      versionCar,
      VTV,
      travelPeople,
      arrivalDate,
      dateToProvince
    }

    const response = await getPreferenceMP({ inscription })
      .then(res => {
        if (res.status === 400) {
          setValues({ ...values, error: res.data.error, loading: false })
        } else {
          setValues({ ...values, error: false, loading: false })
          window.location.href = res.data.init_point
        }
      })
  }

  const showError = () => {
    return (
      <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
        {error}
      </div>
    )
  }
  const showLoading = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Cargando...</h2>
        </div>)
    )
  }

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }
  const stylesCitros = [
    'Personalizado', 'Deportivo de Calle', 'Deportivo Extremo', 'Original de Época', 'Original de Fábrica'
  ]
  const typesCitros = ['Ami8 Break', 'Ami8 Club', 'Citroën CX', 'Citroën DS', 'Citroën GS',
    'Dyane 6', 'Forgen AK400', 'IES Super América', 'Mehari', '2CV Prestige', '3CV Azian M28', '3CV Pretige']
  const numberPeople = [1, 2, 3, 4, 5]
  return (
    <section className='page-section signup-section' id='contact'>
      <div className='container '>
        <div className='row'>
          <div className='text-center col-md-10 col-lg-8 mx-auto'>
            <h2 className='section-heading text-uppercase text-white mb-1'>Formulario de Inscripción </h2>
            <form id='inscriptionForm' onSubmit={handleInscription}>
              <Input
                value={name} onChange={handleChange('name')}
                classInput='form-control' id='name' type='text' placeholder='Nombre/s'
                nameField='name' required='required'
              />
              <Input
                value={lastname} onChange={handleChange('lastname')}
                classInput='' id='lastname' type='text' placeholder='Apellido/s'
                nameField='lastname' required='required'
              />
              <Input
                value={DNI}
                onChange={e => setValues({ ...values, error: false, DNI: e.target.value.replace(/[^0-9]/g, '') })}
                classInput=''
                id='DNI' type='text' placeholder='DNI'
                nameField='DNI' required='required'
                minLength={7} maxLength={9}
              />
              <div className='form-floating'>
                <input
                  value={dateBirth} onChange={handleChange('dateBirth')} id='dateBirth' type='date'
                  name='dateBirth' required='required' className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2'
                  min='1900-1-1' max='2021-11-21'
                />
                <label for='dateBirth'>Fecha de Nacimiento</label>
              </div>
              <Input
                value={email} onChange={handleChange('email')}
                classInput='' id='email' type='text'
                placeholder='Correo Electronico' nameField='email' required='required'
              />
              <Input
                value={numberCell} onChange={handleChange('numberCell')}
                classInput='' id='numberCell' type='tel'
                placeholder='Número de Celular' nameField='numberCell' required='required'
              />

              <div className='form-row '>
                <div className='col '>
                  <div className='form-floating'>
                    <select
                      value={provinceOrigin}
                      onChange={e => {
                        setValues({ ...values, error: false, provinceOrigin: e.target.value })
                        const name = e.target.value
                        handleLocality(name)
                      }}
                      className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2' id='provinceOrigin'
                      name='provinceOrigin' required='required'
                    >
                      <option hidden />
                      {provinces.map(prov => (
                        <option value={prov.nombre} key={prov.id}>{prov.nombre}</option>)
                      )}
                    </select>
                    <label for='provinceOrigin p-4'>Provincia de Origen</label>
                  </div>
                  <div className='form-floating'>
                    <select
                      value={locationOrigin}
                      onChange={e => setValues({ ...values, error: false, locationOrigin: e.target.value })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='locationOrigin' name='locationOrigin' required='required'
                    >
                      <option hidden />
                      {locations.map(item => (
                        <option value={item.nombre} key={item.id}>{item.nombre}</option>)
                      )}
                      <option value='Other'>No se encuentra en la lista</option>
                    </select>
                    <label for='locationOrigin'>Localidad de Origen</label>
                  </div>
                  <Input
                    value={nameCar} onChange={handleChange('nameCar')}
                    classInput='' id='nameCar' type='text'
                    placeholder='Nombre del Auto' nameField='nameCar' required='required'
                  />
                  <Input
                    value={registrationCar} onChange={handleChange('registrationCar')}
                    classInput='' id='registrationCar' type='text'
                    placeholder='Patente' nameField='registrationCar' required='required'
                  />
                  <Input
                    value={colorCar} onChange={handleChange('colorCar')}
                    classInput='' id='colorCar' type='text'
                    placeholder='Color' nameField='colorCar' required='required'
                  />
                  <div className='form-floating'>
                    <select
                      value={styleCar}
                      onChange={e => setValues({ ...values, error: false, styleCar: e.target.value })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='styleCar' name='styleCar' required='required'
                    >
                      <option hidden />
                      {stylesCitros.map(item => (
                        <option value={item} key={item}>{item}</option>)
                      )}
                    </select>
                    <label for='styleCar'>Estilo del Auto</label>
                  </div>
                  <div className='form-floating'>
                    <select
                      value={versionCar}
                      onChange={e => setValues({ ...values, error: false, versionCar: e.target.value })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='versionCar' name='versionCar' required='required'
                    >
                      <option hidden />
                      {typesCitros.map(item => (
                        <option value={item} key={item}>{item}</option>)
                      )}
                      <option value='Other'>No se encuentra en la lista</option>
                    </select>
                    <label for='versionCar'>Modelo del Auto</label>
                  </div>
                  <Input
                    value={yearCar}
                    onChange={e => setValues({ ...values, error: false, yearCar: e.target.value.replace(/[^0-9]/g, '') })}
                    classInput='' id='yearCar'
                    placeholder='Año de fabricación del auto' nameField='yearCar' required='required'
                  />
                  <div className='form-floating'>
                    <select
                      value={VTV}
                      onChange={e => {
                        setValues({ ...values, error: false, VTV: e.target.value })
                      }}
                      className='form-select flex-fillmr-sm-2  mb-sm-0 mt-2' id='VTV'
                      name='VTV' required='required'
                    >
                      <option hidden />
                      <option value='true' key='1'>Si, tengo VTV</option>
                      <option value='false' key='2'>No tengo VTV</option>
                    </select>
                    <label for='VTV'>¿Tiene VTV?</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      value={arrivalDate} onChange={handleChange('arrivalDate')} id='arrivalDate' type='date'
                      name='arrivalDate' required='required' className='form-select flex-fill mr-sm-2  mb-sm-0 mt-2'
                      placeholder='Fecha estimada que calcula llegar a la Provincia'
                    />
                    <label for='arrivalDate'>¿Fecha estimada que calcula llegar a la Provincia?</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      value={dateToProvince} onChange={handleChange('dateToProvince')} id='dateToProvince' type='date'
                      name='dateToProvince' required='required' className='form-control flex-fill mr-sm-2  mb-sm-0 mt-2'
                      placeholder='¿Fecha estimada que calcula regresar a su provincia?'
                    />
                    <label for='dateToProvince'>¿Fecha estimada que calcula regresar a su provincia?</label>
                  </div>
                  <div className='form-floating'>
                    <select
                      value={travelPeople}
                      onChange={e => setValues({ ...values, error: false, travelPeople: e.target.value })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='travelPeople' name='travelPeople' required='required'
                    >
                      <option hidden />
                      {numberPeople.map(item => (
                        <option value={item} key={item}>{item}</option>)
                      )}
                    </select>

                    <label for='travelPeople'>¿Cuántas personas viajan en su auto?</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      className='form-control flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='price' disabled
                      value={process.env.REACT_APP_PRICE_INSCRIPTION}
                    />
                    <label for='price'>Costo de la inscripción</label>
                  </div>
                </div>
              </div>
              <div className='input-group mt-1 '>
                <div className='col'>
                  <p className='text-white font-italic' style={{ 'font-size': '14px' }}>
                    Al completar todos los campos y presionar el boton "Inscribirme",
                    se redireccionará a la página de MercadoPago
                    para realizar el pago de la inscripción.
                  </p>
                </div>
              </div>
              <div className='input-group'>
                <div className='col'>
                  <input
                    className='form-check-input ' type='checkbox' value={selectTermsConditions} onClick={e => {
                      setSelectTermsConditions(e.target.checked)
                    }} id='termsAndConditions'
                  />

                  <label className='form-check-label' htmlFor='termsAndConditions' style={{ color: 'white' }}>
                    He leído y acepto los <a href='terms_conditions.html' target='_blank' rel='noreferrer'>Terminos y Condiciones</a>
                  </label>
                </div>
              </div>
              <button
                disabled={!selectTermsConditions}
                className='btn btn-success mx-auto mt-2' type='submit'
              >Inscribirme
              </button>
              {showLoading()}
              {showError()}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Inscription
