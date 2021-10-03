import { getInscriptionsPending } from '../services/inscriptions'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
const InscriptionsPending = () => {
  const [orders, setOrders] = useState([])
  const { user, token } = isAuthenticated()
  useEffect(() => {
    async function inscriptionHook () {
      try {
        const response = await getInscriptionsPending({
          userId: user._id,
          token
        })
        const sorted = await response.data.response.sort(function (a, b) {
          if (a.inscription.lastname > b.inscription.lastname) return 1
          if (a.inscription.lastname < b.inscription.lastname) return -1
          return 0
        })
        await setOrders(sorted)
      } catch (err) {
        console.error(err)
      }
    }
    inscriptionHook()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className='table-responsive'>
        <div>
          <Link className='p-5 text-dark' to='/'>
            Inicio
          </Link>
          <Link className='p-5 text-dark' to='/admin/dashboard'>
            Panel de Administrador
          </Link>
        </div>
        <table className='table table-striped table-dark table-bordered table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Apellido</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>DNI</th>
              <th scope='col'>ID Operación</th>
              <th scope='col'>Fecha Actualizacion</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Detalle del Pago</th>
              <th scope='col'>Precio Unitario</th>
              <th scope='col'>Total del Pago </th>
              <th scope='col'>Neto Recibido</th>
            </tr>
          </thead>
          <tbody className='table-striped'>
            {orders.map((item, index) => (
              <tr key={item.inscription.DNI.toString()}>
                <th>{index + 1}</th>
                <th>{item.inscription.lastname}</th>
                <th>{item.inscription.name}</th>
                <th>{item.inscription.DNI}</th>
                <th>{item.id_Operacion ? item.id_Operacion : '----'}</th>
                <th>
                  {' '}
                  {item.date_last_updated
                    ? new Intl.DateTimeFormat('es-AR', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                      }).format(new Date(item.date_last_updated))
                    : item.date_last_updated}
                </th>
                <th>
                  {item.status === 'approved'
                    ? 'APROBADO'
                    : item.status === 'pending'
                    ? 'PENDIENTE'
                    : item.status}
                </th>
                <th>{item.status_detail}</th>
                <th>{item.unit_price}</th>
                <th>{item.total_paid_amount}</th>
                <th>{item.net_received_amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default InscriptionsPending
