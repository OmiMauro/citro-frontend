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
    travelPeople: 0,
    paymentWithMP: '',
    error: '',
    loading: false,
    success: false
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

  const handleLocality = async name => {
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
    paymentWithMP,
    error,
    loading,
    success
  } = values

  const handleInscription = async event => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true, success: false })
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
      paymentWithMP
    }
    await getPreferenceMP({ inscription }).then(res => {
      if (res.status === 400) {
        return setValues({
          ...values,
          error: res.data.error,
          loading: false,
          success: false
        })
      } else if (res.status === 201 && res.data.inscription === 'efectivo') {
        return setValues({
          name: '',
          lastname: '',
          dateBirth: '1980-01-01',
          DNI: '',
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
          travelPeople: 0,
          paymentWithMP: '',
          error: false,
          loading: false,
          success: true
        })
      } else if (res.status === 202 && res.data.inscription === 'exists') {
        return setValues({
          ...values,
          error: 'El DNI ingresado ya se encuentra inscripto.',
          loading: false,
          success: false
        })
      } else {
        setValues({ ...values, error: false, loading: false, success: false })
        window.location.href = res.data.init_point
      }
    })
  }

  const showError = () => {
    return (
      <div
        className='alert alert-danger'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    )
  }
  const showLoading = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Cargando...</h2>
        </div>
      )
    )
  }
  const showSuccess = () => {
    return (
      success && (
        <div className='alert alert-success'>
          <h2>Su inscripción se registró con éxito. ¡Te esperamos!</h2>
        </div>
      )
    )
  }
  const handleChange = name => event => {
    setValues({
      ...values,
      success: false,
      error: false,
      loading: false,
      [name]: event.target.value
    })
  }
  const stylesCitros = [
    'Personalizado',
    'Deportivo de Calle',
    'Deportivo Extremo',
    'Original de Época',
    'Original de Fábrica'
  ]
  const typesCitros = [
    'Ami8 Break',
    'Ami8 Club',
    'Citroën CX',
    'Citroën DS',
    'Citroën GS',
    'Dyane 6',
    'Forgen AK400',
    'IES Super América',
    'Mehari',
    '2CV Prestige',
    '3CV Azian M28',
    '3CV Pretige'
  ]
  const numberPeople = [0, 1, 2, 3, 4, 5, 6]
  return (
    <section className='page-section signup-section' id='contact'>
      <div className='container '>
        <div className='row'>
          <div className='text-center col-md-10 col-lg-8 mx-auto'>
            <h2 className='section-heading text-uppercase text-white mb-1'>
              Formulario de Inscripción{' '}
            </h2>
            <form id='inscriptionForm' onSubmit={handleInscription}>
              <div className='form-floating'>
                <Input
                  value={name}
                  onChange={handleChange('name')}
                  classInput='form-control'
                  id='name'
                  type='text'
                  placeholder='Nombre/s'
                  nameField='name'
                  required='required'
                />
              </div>
              <div className='form-floating'>
                <Input
                  value={lastname}
                  onChange={handleChange('lastname')}
                  classInput=''
                  id='lastname'
                  type='text'
                  placeholder='Apellido/s'
                  nameField='lastname'
                  required='required'
                />
              </div>
              <div className='form-floating'>
                <Input
                  value={DNI}
                  onChange={e =>
                    setValues({
                      ...values,
                      error: false,
                      DNI: e.target.value.replace(/[^0-9]/g, '')
                    })}
                  classInput=''
                  id='DNI'
                  type='text'
                  placeholder='DNI'
                  nameField='DNI'
                  required='required'
                  minLength={7}
                  maxLength={9}
                />
              </div>
              <div className='form-floating'>
                <input
                  value={dateBirth}
                  onChange={handleChange('dateBirth')}
                  id='dateBirth'
                  type='date'
                  name='dateBirth'
                  required='required'
                  className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2'
                  min='1900-1-1'
                  max='2021-11-21'
                />
                <label for='dateBirth'>Fecha de Nacimiento</label>
              </div>
              <div className='form-floating'>
                <Input
                  value={email}
                  onChange={handleChange('email')}
                  classInput=''
                  id='email'
                  type='text'
                  placeholder='Correo Electronico'
                  nameField='email'
                  required='required'
                />
              </div>
              <div className='form-floating'>
                <Input
                  value={numberCell}
                  onChange={handleChange('numberCell')}
                  classInput=''
                  id='numberCell'
                  type='tel'
                  placeholder='Número de Celular'
                  nameField='numberCell'
                  required='required'
                />
              </div>
              <div className='form-row '>
                <div className='col '>
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
                  <div className='form-floating'>
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
                    <Input
                      value={nameCar}
                      onChange={handleChange('nameCar')}
                      classInput=''
                      id='nameCar'
                      type='text'
                      placeholder='Nombre del Auto'
                      nameField='nameCar'
                      required='required'
                    />
                  </div>
                  <div className='form-floating'>
                    <Input
                      value={registrationCar}
                      onChange={handleChange('registrationCar')}
                      classInput=''
                      id='registrationCar'
                      type='text'
                      placeholder='Patente del auto'
                      nameField='registrationCar'
                      required='required'
                    />
                  </div>
                  <div className='form-floating'>
                    <Input
                      value={colorCar}
                      onChange={handleChange('colorCar')}
                      classInput=''
                      id='colorCar'
                      type='text'
                      placeholder='Color del auto'
                      nameField='colorCar'
                      required='required'
                    />
                  </div>
                  <div className='form-floating'>
                    <select
                      value={styleCar}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          styleCar: e.target.value
                        })}
                      className='form-select flex-fill mr-0 mr-sm-2 mb-sm-0 mt-2'
                      id='styleCar'
                      name='styleCar'
                      required='required'
                    >
                      <option hidden />
                      {stylesCitros.map(item => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label for='styleCar'>Estilo del Auto</label>
                  </div>
                  <div className='form-floating'>
                    <select
                      value={versionCar}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          versionCar: e.target.value
                        })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='versionCar'
                      namerequired='required'
                    >
                      <option hidden />
                      {typesCitros.map(item => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                      <option value='Other'>No se encuentra en la lista</option>
                    </select>
                    <label for='versionCar'>Modelo del Auto</label>
                  </div>
                  <div className='form-floating'>
                    <Input
                      value={yearCar}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          yearCar: e.target.value.replace(/[^0-9]/g, '')
                        })}
                      classInput=''
                      id='yearCar'
                      placeholder='Año de fabricación del auto'
                      namerequired='required'
                    />
                  </div>
                  <div className='form-floating'>
                    <select
                      value={VTV}
                      onChange={e => {
                        setValues({
                          ...values,
                          error: false,
                          VTV: e.target.value
                        })
                      }}
                      className='form-select flex-fill mr-sm-2  mb-sm-0 mt-2'
                      id='VTV'
                      name='VTV'
                      required='required'
                    >
                      <option hidden />
                      <option value='true' key='1'>
                        Si, tengo VTV
                      </option>
                      <option value='false' key='2'>
                        No tengo VTV
                      </option>
                    </select>
                    <label for='VTV'>¿Tiene VTV?</label>
                  </div>

                  <div className='form-floating'>
                    <select
                      value={travelPeople}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          travelPeople: e.target.value
                        })}
                      className='form-select flex-fill mr-0 mr-sm-2  mb-sm-0 mt-2'
                      id='travelPeople'
                      name='travelPeople'
                      required='required'
                    >
                      <option hidden />
                      {numberPeople.map(item => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label for='travelPeople'>
                      ¿Cuántos acompañantes viajarán en su automóvil?
                    </label>
                  </div>
                  <div className='form-floating'>
                    <input
                      className='form-control flex-fill mr-0 mr-sm-2 mb-sm-0 mt-2 text-success'
                      id='price'
                      disabled
                      value={
                        travelPeople !== 0
                          ? process.env.REACT_APP_PRICE_INSCRIPTION *
                            (parseInt(travelPeople) + 1)
                          : process.env.REACT_APP_PRICE_INSCRIPTION
                      }
                    />
                    <label for='price'>
                      Costo de la inscripción para{' '}
                      <b className='text-success'>
                        {`${
                          travelPeople !== 0 ? parseInt(travelPeople) + 1 : 1
                        } `}
                      </b>
                      persona/s
                    </label>
                  </div>
                  <div className='form-floating'>
                    <select
                      value={paymentWithMP}
                      onChange={e =>
                        setValues({
                          ...values,
                          error: false,
                          paymentWithMP: e.target.value
                        })}
                      className='form-select flex-fill mr-sm-2 mb-sm-0 mt-2'
                      id='paymentWithMP'
                      name='paymentWithMP'
                      required='required'
                    >
                      <option hidden />
                      <option value='true' key='MP'>
                        Pagar ahora con T. Debito, T. Crédito o Puntos de
                        Efectivo(Rapipago o PagoFácil)
                      </option>
                      <option value='false' key='EFECTIVO'>
                        Pagar en efectivo en el evento
                      </option>
                    </select>
                    <label for='paymentWithMP'>
                      ¿Cómo desea realizar el pago de su inscripción?
                    </label>
                  </div>
                </div>
              </div>
              <div className='input-group mt-1 '>
                <div className='col'>
                  <p
                    className='text-white font-italic'
                    style={{ 'font-size': '14px' }}
                  >
                    Sí eligió la opción de transferencia bancaria, será
                    redireccionado a la página de MercadoPago para completar el
                    proceso de inscripción.
                  </p>
                </div>
              </div>
              <div className='input-group'>
                <div className='col'>
                  <input
                    className='form-check-input '
                    type='checkbox'
                    value={selectTermsConditions}
                    onClick={e => {
                      setSelectTermsConditions(e.target.checked)
                    }}
                    id='termsAndConditions'
                  />

                  <label
                    className='form-check-label'
                    htmlFor='termsAndConditions'
                    style={{ color: 'white' }}
                  >
                    He leído y acepto los{' '}
                    <a
                      href='terms_conditions.html'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Términos y Condiciones
                    </a>
                  </label>
                </div>
              </div>
              <button
                disabled={!selectTermsConditions}
                className='btn btn-success mx-auto m-2'
                type='submit'
              >
                Inscribirme
              </button>
              {showLoading()}
              {showError()}
              {showSuccess()}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Inscription
