const Services = () => {
  return (
    <section className='page-section' id='services'>
      <div className='container'>
        <div className='text-center '>
          <h2 className='section-heading text-uppercase'>
            Reconocimientos y Sorteos
          </h2>
          {/* <h3 className='section-subheading text-muted'>Alguna descripción
          </h3> */}
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-medal fa-stack-1x ' />
            </span>
            <h4 className='my-3'>Soporte de Escapes</h4>
            <p className='text-muted'>Para los participantes</p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-award fa-stack-1x ' />
            </span>
            <h4 className='my-3'>Sorteos</h4>
            <p className='text-muted'>Repuestos varios</p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-trophy fa-stack-1x' />
            </span>
            <h4 className='my-3'>Sorteos</h4>
            <p className='text-muted'>
              Descuento en{' '}
              <a href='https://www.facebook.com/pablo.castro.50'>
                {' '}
                Encendido electrónico
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
