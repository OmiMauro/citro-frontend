import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
      <div className='container'>
        <Link className='nav-link navbar-brand' to='/'>
          <img src='assets/img/navbar-logo.png' alt='...' />
          {/* {process.env.REACT_APP_NAME_APPLICATION} */}
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i className='fas fa-bars ms-1' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0'>
            <li className='nav-item'>
              {isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Link className='nav-link' to='/admin/dashboard'>
                  Panel de control
                </Link>
              ) : (
                <Link className='nav-link' to='/signin'>
                  LogIn
                </Link>
              )}
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/findinscription'>
                Consultar Inscripción
              </Link>
            </li>
            {/* <li className='nav-item'><a className='nav-link' href='#contact'>Inscripciones</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav
