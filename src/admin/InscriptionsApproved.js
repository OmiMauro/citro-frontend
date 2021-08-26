
import { getInscriptionsApproved } from '../services/inscriptions'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const InscriptionsApproved = () => {
  const date_last_updated = new Date()
  const [orders, setOrders] = useState([])
  const { user, token } = isAuthenticated()

  useEffect(() => {
    async function inscriptionHook () {
      try {
        const response = await getInscriptionsApproved({ userId: user._id, token })
        await setOrders(response.data.response)
      } catch (err) {
        console.error(err)
      }
    }
    inscriptionHook()
  }, [])
  let netReceived = 0
  let netRefunded = 0
  return (
    <>

      <div className='table-responsive'>
        <div>
          <Link className='p-5 text-dark' to='/'>Inicio</Link>
          <Link className='p-5 text-dark' to='/admin/dashboard'>Panel de Administrador</Link>
        </div>

        <table className='table table-striped table-dark table-bordered table-hover mt-5'>
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
              <th scope='col'>ID Operación</th>
              <th scope='col'>Fecha Actualizacion</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Detalle</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Reembolso</th>
              <th scope='col'>Neto Recibido</th>
            </tr>
          </thead>
          <tbody className='table-striped'>
            {orders.map((item, index) => {
              { netReceived += item.net_received_amount }
              { netRefunded += item.transaction_amount_refunded }
              return (
                <tr key={item.inscription.DNI.toString()}>
                  <th>{index + 1}</th>
                  <th>{item.inscription.lastname}</th>
                  <th>{item.inscription.name}</th>
                  <th>{item.inscription.DNI}</th>
                  <th>{item.inscription.email}</th>
                  <th>{item.inscription.numberCell}</th>
                  <th>{item.inscription.provinceOrigin}</th>
                  <th>{item.inscription.locationOrigin}</th>
                  <th>{item.id_Operacion}</th>
                  <th>{item.date_last_updated}</th>
                  <th>{item.status === 'approved' ? 'APROBADO' : item.status === 'pending' ? 'PENDIENTE' : 'RECHAZADO'}</th>
                  <th>{item.status_detail}</th>
                  <th>{item.unit_price}</th>
                  <th>{item.transaction_amount_refunded}</th>
                  <th>{item.net_received_amount}</th>
                </tr>
              )
            }
            )}
          </tbody>
        </table>

        <div className='container'>
          <p>Neto Recibido: {netReceived}</p>
          <p>Total de Inscripciones Aprobadas: {orders.length}</p>
          <p>Total de dinero Reembolsado: {netRefunded}</p>
        </div>

      </div>
    </>
  )
}

export default InscriptionsApproved
