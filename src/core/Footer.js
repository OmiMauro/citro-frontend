const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 text-lg-start'>Omiñuka Mauro Cristian Emanuel &copy; CitroRodando {year} </div>
          <div className='col-lg-4 my-3 my-lg-0'>
            <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
            <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
            <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-linkedin-in' /></a>
          </div>
          <div className='col-lg-4 text-lg-end'>
            <a className='link-dark text-decoration-none me-3' href='#!'>Políticas de Privacidad</a>
            <a className='link-dark text-decoration-none' href='#!'>Terminos y Condiciones</a>
            <a className='link-dark text-decoration-none' href='/signin'>Login</a>

          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
