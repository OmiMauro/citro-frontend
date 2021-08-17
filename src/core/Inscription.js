import React, { useState, useEffect } from 'react'
import { getProvinces, getLocalidades } from '../services/locations'
/* import { addInscription } from '../services/inscriptions' */
import { getPreferenceMP } from '../services/mercadopago'
import { Alert } from './Alert'
import Input from './Input'
const Inscription = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    DNI: '',
    numberCell: '',
    provinceOrigin: '',
    locationOrigin: '',
    email: '',
    error: '',
    loading: ''
  })

  const [toast, setToast] = useState(false)
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
    DNI,
    numberCell,
    provinceOrigin,
    locationOrigin,
    email
  } = values

  const handleInscription = async event => {
    event.preventDefault()
    const inscription = {
      name, lastname, DNI, numberCell, email, provinceOrigin, locationOrigin
    }
    const response = await getPreferenceMP({ inscription })
    setToast(true)
    setValues[name] = ''
    setValues[lastname] = ''
    setValues[DNI] = ''
    setValues[email] = ''
    setValues[numberCell] = ''
    setValues[provinceOrigin] = ''
    setValues[locationOrigin] = ''
    setSelectTermsConditions(false)
    setTimeout(() => { setToast(false) }, 6000)
    window.location.href = response.data.init_point
  }
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }
  return (
    <section className='page-section signup-section' id='contact'>
      <div className='container '>
        <div className='row'>
          <div className='text-center col-md-10 col-lg-8 mx-auto'>
            <h2 className='section-heading text-uppercase text-dark mb-1'>Formulario de Inscripción</h2>
            <h3 className='section-subheading text-muted '>Lorem ipsum dolor sit amet consectetur.</h3>
            <form id='inscriptionForm' onSubmit={handleInscription}>
              <Input
                value={name} onChange={handleChange('name')}
                classInput='' id='name' type='text' placeholder='Nombre/s'
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
              <Input
                value={email} onChange={handleChange('email')}
                classInput='' id='email' type='text'
                placeholder='Correo Electronico' nameField='email' required='required'
              />
              <Input
                value={numberCell} onChange={handleChange('numberCell')}
                classInput='' id='numberCell' type='tel'
                placeholder='Numero de Celular' nameField='numberCell' required='required'
              />
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={provinceOrigin}
                    onChange={e => {
                      setValues({ ...values, error: false, provinceOrigin: e.target.value })
                      const name = e.target.value
                      handleLocality(name)
                    }}
                    className='form-select d-flex p-2 mr-sm-2 mb-3 mb-sm-0' id='provinceOrigin'
                    name='provinceOrigin' required='required'
                  >
                    <option hidden>Provincia</option>
                    {provinces.map(prov => (
                      <option value={prov.nombre} key={prov.id}>{prov.nombre}</option>)
                    )}
                  </select>
                </div>
              </div>
              <div className='form-row mt-2'>
                <div className='col'>
                  <select
                    value={locationOrigin}
                    onChange={e => setValues({ ...values, error: false, locationOrigin: e.target.value })}
                    className='form-select flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0'
                    id='locationOrigin' name='locationOrigin' required='required'
                  >
                    <option hidden>Localidad</option>
                    {locations.map(item => (
                      <option value={item.nombre} key={item.id}>{item.nombre}</option>)
                    )}
                    <option value='Other'>No se encuentra en la lista</option>
                  </select>
                </div>
              </div>
              <div className='input-group mt-2 '>
                <input
                  className='form-check-input ' type='checkbox' value={selectTermsConditions} onClick={e => {
                    setSelectTermsConditions(e.target.checked)
                  }} id='termsAndConditions'
                />
                <label className='form-check-label ' for='termsAndConditions' style={{ color: 'white' }}>
                  He leído y acepto los <a href='privacy_policy.html' target='_blank' rel='noreferrer'>Terminos y Condiciones</a>
                </label>
              </div>
              <button
                disabled={!selectTermsConditions}
                className='btn btn-success mx-auto mt-2' type='submit'
              >Inscribirme
              </button>
              {toast && <Alert />}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Inscription
