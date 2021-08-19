import { getInscriptions } from '../services/inscriptions'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const TableInscripciones = () => {
  const [inscription, setInscription] = useState([])
  const { user, token } = isAuthenticated()

  useEffect(() => {
    async function inscriptionHook () {
      try {
        const response = await getInscriptions({ userId: user._id, token })
        await setInscription(response.data.listInscriptions)
      } catch (err) {
        console.error(err)
      }
    }
    inscriptionHook()
  }, [])

  return (
    <>
      <div className='table-responsive'>
        <div>
          <Link className='p-5 text-dark' to='/'>Inicio</Link>
          <Link className='p-5 text-dark' to='/admin/dashboard'>Panel de Administrador</Link>
        </div>
        <table className='table table-striped table-dark table-bordered table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Apellido</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>DNI</th>
              <th scope='col'>Email</th>
              <th scope='col'>Celular</th>
              <th scope='col'>Provincia</th>
              <th scope='col'>Localidad</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Detalle del Pago</th>
              <th scope='col'>Neto Recibido</th>
              <th scope='col'>Total Pago</th>
            </tr>
          </thead>
          <tbody className='table-striped'>
            {inscription.map((item, index) => (
              <tr key={item.DNI.toString()}>
                <th>{index + 1}</th>
                <th>{item.lastname}</th>
                <th>{item.name}</th>
                <th>{item.DNI}</th>
                <th>{item.email}</th>
                <th>{item.numberCell}</th>
                <th>{item.provinceOrigin}</th>
                <th>{item.locationOrigin}</th>
                <th>{item.orders[0].unit_price}</th>
                <th>{item.orders[0].status}</th>
                <th>{item.orders[0].status_detail}</th>
                <th>{item.orders[0].net_received_amount}</th>
                <th>{item.orders[0].total_paid_amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableInscripciones
