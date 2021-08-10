import axios from 'axios'

const backendURL = 'http://localhost:9000/api/mercadopago/create_preference'

const MpPaymentHandler = async () => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:9000/api/mercadopago/create_preference'
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
