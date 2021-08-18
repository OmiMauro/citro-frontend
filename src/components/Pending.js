
import React from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
const Pending = () => {
  return (
    <>
      <div className='App' id='page-top'>
        <Nav> </Nav>
        <Header />
        <div className='text-center'>
          <h2>CitroRodando</h2>
          <h4 className='text-warning'>Su pago de la inscripción, se encuentra pendiente. </h4>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Pending
