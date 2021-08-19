import React from 'react'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom'
import Menu from '../core/Menu'

const AdminDashboard = () => {
  const { user: { name, email, role } } = isAuthenticated()
  const adminLinks = () => {
    return (
      <div className='card'>
        <h4>Enlaces del administrador</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/inscripciones'>Ver Inscripciones</Link>
          </li>
        </ul>
      </div>
    )
  }

  const adminInfo = () => {
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>Informacion del administrador</h3>
        <ul className='list-group'>
          <li className='list-group-item'>{name}</li>
          <li className='list-group-item'>{email}</li>
          <li className='list-group-item'>Administrador{role}</li>
        </ul>
      </div>
    )
  }
  return (
    <div className='row'>
      <Menu />
      {console.log('dashboard', isAuthenticated())}
      <div className='col-4'>
        {adminLinks()}
      </div>
      <div className='col-8'>
        {adminInfo()}
      </div>
    </div>
  )
}
export default AdminDashboard
