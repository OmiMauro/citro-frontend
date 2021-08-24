import React, { useState } from 'react'
import Nav from '../core/Nav'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { getInscriptionByDNI } from '../services/inscriptions'
const FindInscription = () => {
  const [values, setValues] = useState({
    email: '',
    DNI: '',
    error: false,
    loading: false
  })
  const { email, DNI, loading, error } = values
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value, loading: false })
  }
  const handleFindInscription = async event => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    const inscription = { email, DNI }
    const response = await getInscriptionByDNI({ inscription })
      .then(res => {
        if (res.status === 400) {
          setValues({ ...values, error: res.data.error, loading: false })
        } else {
          setValues({ ...values, error: false, loading: false })
          setValues[DNI] = ''
          setValues[email] = ''
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
          <h2>Buscando...</h2>
        </div>)
    )
  }
  return (
    <div>
      <Nav />
      <Header />
      {/* page-section signup-section */}
      <section className=''>
        <div className='container '>
          <div className='row'>
            <div className='text-center col-md-10 col-lg-8 mx-auto'>
              <h2 className='section-heading text-uppercase text-white mb-1'>Consultar el estado de la inscripción </h2>
              <p className='text-muted'>Para consultar si ya te inscribiste para el evento, por favor, ingresá tú email y DNI.</p>
              <form id='findInscriptionForm' onSubmit={handleFindInscription}>
                <input
                  value={email} onChange={handleChange('email')}
                  className=' form-control flex-fill  mr-0 mr-sm-2 mb-3 mb-sm-0'
                  id='email' type='text' placeholder='Email'
                  required='required'
                />
                <input
                  value={DNI}
                  onChange={e => setValues({ ...values, error: false, DNI: e.target.value.replace(/[^0-9]/g, '') })}
                  id='DNI' type='tel' placeholder='DNI'
                  required='required' name='DNI' className=' form-control flex-fill  mr-0 mr-sm-2 mb-3 mb-sm-0'
                  minLength={7} maxLength={9}
                />
                <button
                  className='btn btn-success mx-auto mt-2' type='submit'
                >Consultar
                </button>
                {showLoading()}
                {showError()}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default FindInscription
