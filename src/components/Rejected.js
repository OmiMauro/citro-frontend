import React from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { useLocation } from 'react-router-dom'

const Rejected = () => {
  // Separar la URL de los querys, donde se retorna una instancia del objeto URLSearchParams
  // para obtener los parametros se puede utilizar el metodo get
  const useQueryString = () => {
    const location = useLocation()
    return new URLSearchParams(location.search)
  }
  const queryString = useQueryString()
  return (
    <>
      <div className='App' id='page-top'>
        <Nav> </Nav>
        <Header />
        <div className='text-center'>
          <h2>CitroRodando</h2>
          <h4 className='text-danger'>Su pago de la inscripción, se encuentra rechazado. Por favor, intente devuelta.</h4>
          <p>{`Id is ${queryString.get('id')}`}</p>
          <p>{`DNI is ${queryString.get('DNI')}`}</p>
          <p>{`location is ${queryString.get('location')}`}</p>

        </div>

        <Footer />
      </div>
    </>
  )
}
export default Rejected
