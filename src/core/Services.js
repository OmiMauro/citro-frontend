const Services = () => {
  return (
    <section className='page-section' id='services'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Tips</h2>
          <h3 className='section-subheading text-muted'>Los participantes podrán ingresar a los lugares previstos con el abono de la inscripcion vía transferencia bancaria.
            Dicho CBU es 123123431241, en "Motivo": especificar el nombre, apellido y DNI. .
          </h3>
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-trophy fa-stack-1x' />
            </span>
            <h4 className='my-3'>Premios</h4>
            <p className='text-muted'>Premio al auto más lejano del pais</p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-medal fa-stack-1x ' />
            </span>
            <h4 className='my-3'>Premio</h4>
            <p className='text-muted'>Premio al auto mas antiguo.</p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary' />
              <i className='fas fa-award fa-stack-1x ' />
            </span>
            <h4 className='my-3'>Premio</h4>
            <p className='text-muted'>Premio al auto mejor cuidado por votacion de todos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
