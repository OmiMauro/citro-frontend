import React, { useState, useEffect } from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Rejected = () => {
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
        <div className='text-center'>
          <h2>{`${process.env.REACT_APP_NAME_APPLICATION}`}</h2>
          <h4 className='text-success'>Proceso de Inscripción</h4>
          <br />
          <p className>{`
            El proceso de inscripción de ${name}, ${lastname} de DNI ${DNI} que ingresó en el formulario de inscripción, se
            encuentra rechazado, ésto puede deberse a razones relacionadas por falta de fondos en el medio de
            pago seleccionado o algun inconveniente con la plataforma de MercadoPago.`}
          </p>
          <br />
          <p>{`Puede volver a intentarlo nuevamente y seleccionar otro medio de pago disponible,
            completando todos sus datos e ingresando el mismo DNI ${DNI}
            en el formulario de inscripción que se encuentra disponible en la página.`}
          </p>
          <br />
          <p>Ante cualquier duda, puede comunicarse con los organizadores del evento.</p>
          <p>¡Saludos!</p>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Rejected
