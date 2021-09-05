
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
  let cantidadPersonas = 1110
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
              <th scope='col'>F. Nacimiento</th>
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
              <th scope='col'>Nombre Auto</th>
              <th scope='col'>Patente</th>
              <th scope='col'>Color</th>
              <th scope='col'>Estilo</th>
              <th scope='col'>Modelo</th>
              <th scope='col'>Version</th>
              <th scope='col'>VTV</th>
              <th scope='col'>Llegada </th>
              <th scope='col'>Retirada</th>
              <th scope='col'>Nro. de Personas</th>

            </tr>
          </thead>
          <tbody className='table-striped'>
            {orders.map((item, index) => {
              { netReceived += item.net_received_amount }
              { netRefunded += item.transaction_amount_refunded }
              { cantidadPersonas += item.travelPeople }
              return (
                <tr key={item.inscription.DNI.toString()}>
                  <th>{index + 1}</th>
                  <th>{item.inscription.lastname}</th>
                  <th>{item.inscription.name}</th>
                  <th>{item.inscription.DNI}</th>
                  <th>{item.inscription.dateBirth
                    ? new Intl.DateTimeFormat('es-AR', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(item.inscription.dateBirth))
                    : item.inscription.dateBirth}
                  </th>
                  <th>{item.inscription.email}</th>
                  <th>{item.inscription.numberCell}</th>
                  <th>{item.inscription.provinceOrigin}</th>
                  <th>{item.inscription.locationOrigin}</th>
                  <th>{item.id_Operacion}</th>
                  <th>{item.date_last_updated
                    ? new Intl.DateTimeFormat('es-AR', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric'
                      }).format(new Date(item.date_last_updated))
                    : item.date_last_updated}
                  </th>
                  <th>{item.status === 'approved' ? 'APROBADO' : item.status === 'pending' ? 'PENDIENTE' : 'RECHAZADO'}</th>
                  <th>{item.status_detail}</th>
                  <th>{item.unit_price
                    ? new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(item.unit_price)
                    : item.unit_price}
                  </th>
                  <th>{item.transaction_amount_refunded
                    ? new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(item.transaction_amount_refunded)
                    : item.transaction_amount_refunded}
                  </th>
                  <th>{item.net_received_amount
                    ? new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(item.net_received_amount)
                    : item.net_received_amount}
                  </th>
                  <th>{item.inscription.nameCar}</th>
                  <th>{item.inscription.registrationCar}</th>
                  <th>{item.inscription.colorCar}</th>
                  <th>{item.inscription.styleCar}</th>
                  <th>{item.inscription.yearCar}</th>
                  <th>{item.inscription.versionCar}</th>
                  <th>{item.inscription.VTV}</th>
                  <th>{item.inscription.arrivalDate
                    ? new Intl.DateTimeFormat('es-AR', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(item.inscription.arrivalDate))
                    : item.inscription.arrivalDate}
                  </th>
                  <th>{item.inscription.dateToProvince
                    ? new Intl.DateTimeFormat('es-AR', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(item.inscription.dateToProvince))
                    : item.inscription.dateToProvince}
                  </th>
                  <th>{item.inscription.travelPeople}</th>
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
          <p>Cantidad de Acompañantes: {cantidadPersonas}</p>
        </div>

      </div>
    </>
  )
}

export default InscriptionsApproved
