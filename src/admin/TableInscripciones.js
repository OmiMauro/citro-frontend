import { getInscriptions } from '../services/inscriptions'
import { isAuthenticated } from '../auth/index'
import React, { useEffect, useState } from 'react'
const TableInscripciones = () => {
  const [inscription, setInscription] = useState([])
  const { user, token } = isAuthenticated()

  useEffect(() => {
    async function inscriptionHook () {
      const response = await getInscriptions({ userId: user._id, token })
      await setInscription(response.data.listInscriptions)
    }
    inscriptionHook()
  }, [])

  return (
    <>

      <div className='table-responsive'>
        <div>
          <a className='p-5 text-dark' href='/'>Inicio</a>

          <a className='p-5 text-dark' href='/admin/dashboard'>Panel de Administrador</a>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableInscripciones
