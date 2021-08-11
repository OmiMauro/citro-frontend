import axios from 'axios'

const backendURL = '/api/mercadopago/create_preference'

const MpPaymentHandler = async () => {
  const response = await axios({
    method: 'POST',
    url: '/api/mercadopago/create_preference'
  })
  console.log(response)
  window.location.href = response.data.init_point
}

const ButtonMP = () => {
  return (
    <button
      onClick={() => MpPaymentHandler()}
    >
      Inscribirme
    </button>
  )
}

export default ButtonMP
