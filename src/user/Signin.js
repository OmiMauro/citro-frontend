import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../core/Layout'
import { signin, authenticate, isAuthenticated } from '../auth/index'

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { email, password, loading, error, redirectToReferrer } = values
  const { user } = isAuthenticated()

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = async (event) => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    try {
      const logIn = await signin({ email, password })
      if (logIn.error) {
        setValues({ ...values, error: logIn.error, loading: false })
      } else {
        authenticate(logIn, () => setValues({ ...values, redirectToReferrer: true }))
      }
    } catch (e) {
      setValues({ ...values, error: e.error, loading: false })
    }
  }

  const signInForm = () => {
    return (
      <form>
        <div className='form-group'>
          <label className='text-muted'>E-Mail</label>
          <input onChange={handleChange('email')} type='email' className='form-control' value={email} />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Contraseña</label>
          <input onChange={handleChange('password')} type='password' className='form-control' value={password} />
        </div>
        <button onClick={clickSubmit} className='btn btn-primary'>Submit</button>
      </form>
    )
  }

  const showError = () => {
    return (
      <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
        {error}
      </div>
    )
  }

  const showLoading = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Loading...</h2>
        </div>)
    )
  }

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return (
          <Redirect to='/admin/dashboard' />
        )
      }
    } if (isAuthenticated()) {
      return (
        <Redirect to='/' />
      )
    }
  }

  return (
    <Layout title='Inicio de Session' description='Disponible unicamente para los organizadores' className='container col-md-8 offset-md-2'>
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  )
}

export default Signin
