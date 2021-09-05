
import React, { useState, useEffect } from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Pending = () => {
  // Separar la URL de los querys, donde se retorna una instancia del objeto URLSearchParams
  // para obtener los parametros se puede utilizar el metodo get
  const useQueryString = () => {
    const location = useLocation()
    return new URLSearchParams(location.search)
  }
  const queryString = useQueryString()
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [DNI, setDNI] = useState('')

  const handleFindInscription = async () => {
    const external_reference = queryString.get('external_reference')
    const response = await axios({
      url: `/api/inscription/${external_reference}`,
      method: 'GET'
    })
    if (response) {
      setDNI(response.data.info.DNI)
      setName(response.data.info.name)
      setLastname(response.data.info.lastname)
    }
  }
  useEffect(() => {
    async function getInscriptionHook () {
      await handleFindInscription()
    }
    getInscriptionHook()
  }, [])
  return (
    <>
      <div className='App' id='page-top'>
        <Nav> </Nav>
        <Header />
        <div className='container mt-4 mb-4'>
          <h4 className='text-center text-warning'>Proceso de Inscripción</h4>
          <p className>{`
            El proceso de inscripción ${name}, ${lastname} de DNI ${DNI} cuyo número de pago es 
            ${queryString.get('payment_id')}, se
            encuentra ${queryString.get('status') === 'pending'
            ? 'pendiente, ésto puede deberse a que eligió cómo medio de pago en efectivo .'
            : queryString.get('status')}`}
          </p>
          <p>{`En caso de tener algún inconveniente para realizar éste pago,
            puede volver a intentarlo nuevamente, completando sus datos e ingresando el mismo DNI: ${DNI}
            en el formulario de inscripción que se encuentra en la página`}
          </p>
          <p>Ante cualquier inconveniente, puede comunicarse con los organizadores del evento.</p>
          <p className='text-center text-secondary'>¡Saludos!</p>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Pending
