import { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth/index'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddImage = () => {
  const { user, token } = isAuthenticated()
  const [state, setState] = useState({
    images: [],
    uploading: false
  })
  const handleChange = async e => {
    e.preventDefault()
    setState({ uploading: true })
    const formData = new FormData()
    const files = Array.from(e.target.files)

    files.forEach((file, index) => {
      formData.append('picture', file)
    })
    const response = await axios({
      method: 'POST',
      url: `/api/images/${user._id}`,
      headers: { Authorization: `bearer ${token}`, 'content-type': 'multipart/form-data' },
      data: formData
    })
    if (response && response.status === 200) {
      setState({ ...state, uploading: false, images: response.data.images })
    }
  }
  const handleSubmit = (e) => {}
  const { images, uploading } = state

  useEffect(() => {
    const fetchImages = async () => {
    }
    fetchImages()
  }, [images])
  return (
    <>
      <div>
        <Link className='p-5 text-dark' to='/'>
          Inicio
        </Link>
        <Link className='p-5 text-dark' to='/admin/dashboard'>
          Panel de Administrador
        </Link>
      </div>
      <div className='container mt-5'>
        <h5>Imagenes del evento</h5>
        <p>Formatos disponibles: <span className='text-danger'>jpg', 'jpeg', 'png</span></p>
        <form encType='multipart/form'>
          <label htmlFor='image'>Seleccione uno/varias imagenes</label>
          <input
            className='input-group-append'
            type='file'
            name='picture'
            id='picture'
            onChange={handleChange}
            multiple
          />
        </form>
        {uploading && (
          <div class='d-flex justify-content-center'>
            <div class='spinner-border' role='status'>
              <span class='sr-only'>Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AddImage
