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
        <div className='container'>

          <h4 className='text-danger text-center mt-2'>Proceso de Inscripción</h4>
          <br />
          <p className='text-start'>{`
            La inscripción de ${name}, ${lastname} cuyo DNI es ${DNI}, se
            encuentra RECHAZADO, ésto puede deberse a razones relacionadas por falta de fondos en el medio de
            pago seleccionado o algun inconveniente con el medio de pago seleccionado.`}
          </p>
          <br />
          <p className='text-start'>{`Puede volver a intentarlo nuevamente completanto el formulario de inscripción
            con sus datos e ingresar el mismo DNI ${DNI}, y luego seleccionar otro medio de pago disponible.
          
            `}
          </p>
          <br />
          <p className='text-start'>Ante cualquier duda, puede comunicarse con los organizadores del evento.</p>
          <p className='text-secondary text-center'>¡Saludos!</p>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Rejected
