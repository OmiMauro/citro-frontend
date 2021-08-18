import React from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
const Success = () => {
  return (
    <>
      <div className='App' id='page-top'>
        <Nav />
        <Header />
        <div className='text-center'>
          <h2>CitroRodando</h2>
          <h4 className='text-success'>Su pago de la inscripción, se encuentra realizado. Te esperamos para el encuentro! Saludos!.</h4>
          <p> {queryString.parse(this.props.location.search)}</p>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Success
