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
        const sorted = await response.data.listInscriptions.sort(function (a, b) {
          if (a.inscription.lastname > b.inscription.lastname) return 1
          if (a.inscription.lastname < b.inscription.lastname) return -1
          return 0
        })
        await setInscription(sorted)
      } catch (err) {
        console.error(err)
      }
    }
    inscriptionHook()
  }, [])

  return (
    <>
      <div className=''>
        <Link className='p-5 text-dark' to='/'>Inicio</Link>
        <Link className='p-5 text-dark' to='/admin/dashboard'>Panel de Administrador</Link>
      </div>
      <div className='table-responsive'>
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
              <th scope='col'>Nro. Operacion</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Detalle del Pago</th>
              <th scope='col'>Neto Recibido</th>
            </tr>
          </thead>
          <tbody className='table-striped'>
            {inscription.map((item, index) => (
              <tr key={item.inscription.DNI.toString()}>
                <th>{index + 1}</th>
                <th>{item.inscription.lastname}</th>
                <th>{item.inscription.name}</th>
                <th>{item.inscription.DNI}</th>
                <th>{item.inscription.email}</th>
                <th>{item.inscription.numberCell}</th>
                <th>{item.inscription.provinceOrigin}</th>
                <th>{item.inscription.locationOrigin}</th>
                <th>{item.unit_price}</th>
                <th>{item.id_Operacion ? item.id_Operacion : '-'}</th>
                <th>{item.status}</th>
                <th>{item.status_detail}</th>
                <th>{item.net_received_amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableInscripciones
