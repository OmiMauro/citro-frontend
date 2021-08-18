import React from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
const Rejected = () => {
  return (
    <>
      <div className='App' id='page-top'>
        <Nav> </Nav>
        <Header />
        <div className='text-center'>
          <h2>CitroRodando</h2>
          <h4 className='text-danger'>Su pago de la inscripción, se encuentra rechazado. Por favor, intente devuelta.</h4>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Rejected
