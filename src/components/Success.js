import React from 'react'
import Nav from '../core/Nav'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { useLocation } from 'react-router-dom'
const Success = () => {
  // Separar la URL de los querys, donde se retorna una instancia del objeto URLSearchParams
  // para obtener los parametros se puede utilizar el metodo get
  const useQueryString = () => {
    const location = useLocation()
    return new URLSearchParams(location.search)
  }

  /*   external_reference=611e52c4709261001649bb34&payment_type=credit_card&merchant_order_id=3125433401&preference_id=806459734-9e82d6fc-43b6-4b52-b2b7-d620fb7e1eea&site_id=MLA&processing_mode=aggregator&merchant_account_id=null */ const queryString = useQueryString()
  return (
    <>
      <div className='App' id='page-top'>
        <Nav />
        <Header />
        <div className='text-center'>
          <h2>CitroRodando</h2>
          <h4 className='text-success'>Su pago de la inscripción, se encuentra acreditado. Te esperamos para el encuentro! </h4>
          <p className='text-center'>Datos del pago:</p>
          <p>{`Estado del pago ${queryString.get('status') === 'approved' ? 'Aprobado y acreditado' : 'Aprobado'}`}</p>
          <p>{`Numero de pago: ${queryString.get('payment_id')}`}</p>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Success
