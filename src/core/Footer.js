import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 text-lg-start'>&copy;Omiñuka Mauro Cristian Emanuel  <br />CitroRodando {year} </div>
          <div className='col-lg-4 my-3 my-lg-0'>
            <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
          </div>
          <div className='col-lg-4 text-lg-end'>
            <a className='link-dark text-decoration-none me-3' href='#!'>Políticas de Privacidad</a>
            <a className='link-dark text-decoration-none' href='#!'>Terminos y Condiciones</a>
            <br />
            {/*             <a className='link-dark text-decoration-none' href='/signin'>Login</a> */}
            {
              isAuthenticated() && isAuthenticated().user.role === 1
                ? <Link
                    className='nav-link' to='/admin/dashboard'
                  >Panel de control
                </Link>
                : <Link className='link-dark text-decoration-none' to='/signin'>LogIn</Link>
            }

          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
