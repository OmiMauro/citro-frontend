import React, { useState } from 'react'
import Nav from '../core/Nav'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { getInscriptionByDNI } from '../services/inscriptions'
const FindInscription = () => {
  const [values, setValues] = useState({
    email: '',
    DNI: '',
    name: '',
    lastname: '',
    status: '',
    orders: [],
    error: false,
    loading: false,
    table: false
  })
  const { email, DNI, orders, name, lastname, status, loading, error, table } = values
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value, loading: false, table: false })
  }
  const handleFindInscription = async event => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    const inscription = { email, DNI }
    const response = await getInscriptionByDNI({ inscription })
      .then(res => {
        if (res.status === 400) {
          setValues({ ...values, error: res.data.error, loading: false })
        } else if (res.status === 404) {
          setValues({ ...values, error: res.data.message, loading: false })
        } else {
          const { name, lastname, DNI, status, orders } = res.data.findInscription
          setValues({ ...values, error: false, loading: false, name, lastname, DNI, status, orders, table: true })
        }
      })
  }

  const showError = () => {
    return (
      <div className='alert alert-danger mt-2' style={{ display: error ? '' : 'none' }}>
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
  const showTable = () => {
    return (
      table && (
        <div className=' mt-2 mx-auto col-8 table-responsive'>
          <table className='table table-striped table-dark table-bordered table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                <th scope='col'>DNI</th>
                <th scope='col'>Estado del Pago</th>
              </tr>
            </thead>
            <tbody className='table-striped'>
              {orders.map((item, index) => (
                <tr key={DNI + 1}>
                  <th>{name}</th>
                  <th>{lastname}</th>
                  <th>{DNI}</th>
                  <th>{`${item.status === 'approved' ? 'Aprobado' : item.status === 'pending' ? 'Pendiente' : 'Rechazado'}`}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ))
  }
  return (
    <div>
      <Nav />
      <Header />
      {/* page-section signup-section */}

      <div className='container '>
        <div className='row'>
          <div className='text-center col-md-10 col-lg-8 mx-auto'>
            <h2 className='text-center  mb-1'>Consultar el estado de la inscripción </h2>
            <p className='text-muted'>Para consultar el estado de tú pago, por favor, ingresá tú email y DNI que ingresaste al momento de completar la inscripción.</p>
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
          {showTable()}
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default FindInscription
