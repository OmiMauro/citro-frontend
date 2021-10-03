const Information = () => {
  return (
    <section className='page-section' id=''>
      <div className='container'>
        <div className='text-center '>
          <h2 className='section-heading text-uppercase'>Citro Rodando</h2>
          {/*  <h3 className='section-subheading text-muted'>Alguna descripción
          </h3> */}
        </div>
        <div className='row text-muted text-start '>
          <p>
            Tendrá un costo de <b>$4099</b> por participante.
          </p>
          <p>
            El costo de la inscripción incluirá el desayuno, almuerzo, cena y
            fotos de recuerdos durante los días del evento.
          </p>
          <p>
            {' '}
            Durante todo el recorrido se dispondrá de asistencia mecánica
            gratuita, que contará con acarreo y/o servicio de mecánica gratuita,
            en caso de que el automóvil del participante se averíe. De ser
            necesario, los repuestos utilizados para la reparación del vehículo
            quedan por cuenta y cargo del propietario del automóvil.
          </p>
          <p />

          <p>
            También solicitamos que las personas con diferentes tipos de
            alimentación, se comuniquen con anticipación con algunos de los
            organizadores del evento.
          </p>
          <p>
            Tendrá tiempo de realizar su inscripción hasta el 5 de noviembre.
          </p>
          <p className='text-muted '>
            Ante cualquier duda, no dudes en consultarnos...{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
export default Information
