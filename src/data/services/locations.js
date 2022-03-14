import axios from 'axios'

const urlBase = 'https://apis.datos.gob.ar/georef/api'
const getProvinces = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/provincias?campos=id,nombre`
    })
    return response
  } catch (e) {
    console.error(e)
  }
}
const getLocalidades = async province => {
  try {
    const response = await axios({
      method: 'get',
      url: `${urlBase}/municipios?provincia=${province}&campos=id,nombre&max=600`
    })
    return response
  } catch (e) {
    console.error(e)
  }
}

export { getProvinces, getLocalidades }
