import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'
const isActive = (history, path) => history.location.pathname === path ? { color: '#ff9900' } : { color: '#FFF' }

const Menu = ({ history }) => {
  return (
    <>
      <ul className='nav nav-tabs bg-primary'>
        <li className='nav-item'>
          <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className='nav-item'>
            <Link
              className='nav-link' style={isActive(history, '/admin/dashboard')}
              to='/admin/dashboard'
            >Dashboard
            </Link>
          </li>)}
        {!isAuthenticated() && (
          <li className='nav-item'>
            <Link className='nav-link' style={isActive(history, '/signin')} to='/'>Login</Link>
          </li>
        )}
        {isAuthenticated() & (
          <li className='nav-item'>
            <span
              className='nav-link' style={{ cursor: 'pointer', color: '#fff' }}
              onClick={() => signout(() => {
                history.push('/')
              })}
            >Salir
            </span>
          </li>
        )}
      </ul>
    </>
  )
}
export default withRouter(Menu)
