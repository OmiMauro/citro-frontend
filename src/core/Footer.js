import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 text-lg-start'>&copy;Omiñuka, Mauro Cristian Emanuel</div>
          <div className='col-lg-4 my-3 my-lg-0'>
            <div className='mx-auto text-uppercase text-black-50'>{process.env.REACT_APP_NAME_APPLICATION} {year}</div>
            {/* <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>

            <Link className='link-dark text-decoration-none' to='/findinscription'>Buscar Inscripción</Link> */}
          </div>
          <div className='col-lg-4 text-lg-end'>
            <a className='link-dark text-decoration-none me-3' href='privacy_policy.html' target='_blank' rel='noreferrer'>Políticas de Privacidad</a>
            <a className='link-dark text-decoration-none' href='terms_conditions.html' target='_blank' rel='noreferrer'>Terminos y Condiciones</a>
            <br />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
