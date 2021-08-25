import React, { useState, useEffect } from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Success = () => {
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
        <Nav />
        <Header />
        <div className='container mt-4 mb-4'>
          <h2 className='text-center text-uppercase'>{`${process.env.REACT_APP_NAME_APPLICATION}`}</h2>
          <h4 className='text-start'>
            Proceso de Inscripción
          </h4>
          <br />
          <p className='text-success'>
            {`El proceso de inscripción  ${name}, ${lastname} de DNI ${DNI}
          cuyo número de pago es ${queryString.get('payment_id')} se
          ${queryString.get('status') === 'approved' ? 'aprobó' : queryString.get('status')} con éxito`}
          </p>
          <p>¡Te esperamos para el encuentro! </p>
          <p className='text-center'>¡Saludos!</p>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Success
