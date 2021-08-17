import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/index'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' }
  } else {
    return { color: '#ffffff' }
  }
}

const Menu = ({ history }) => {
  const log = () => console.log(isAuthenticated())
  return (
    <>
      {log}
      <ul className='nav nav-tabs bg-primary'>
        <li className='nav-item'>
          <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
        </li>
        {!isAuthenticated() && (
          <li className='nav-item'>
            <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>Login</Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className='nav-item'>
            <Link
              className='nav-link' style={isActive(history, '/admin/dashboard')}
              to='/admin/dashboard'
            >Dashboard
            </Link>
          </li>)}
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
