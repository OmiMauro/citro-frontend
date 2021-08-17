const About = () => {
  return (
    <section className='page-section' id='about'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Cronograma de Actividades</h2>
          <h3 className='section-subheading text-muted'>Todos los horarios son estimativos</h3>
        </div>
        <ul className='timeline'>
          <li>
            <div className='timeline-image'>
              {/* <iframe
                src='https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d26934.22434253041!2d-55.30186572525903!3d-27.06908645196357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m3!3m2!1d-27.2676846!2d-55.5392619!4m3!3m2!1d-27.2520354!2d-55.5310667!4m3!3m2!1d-27.2559291!2d-55.526337!4m5!1s0x95bcc88374dff219%3A0x16942fae58a27fe5!2sYerba%20Mate%20Flor%20de%20Jard%C3%ADn!3m2!1d-27.0498905!2d-55.2469444!5e1!3m2!1ses!2sar!4v1628187117071!5m2!1ses!2sar'
                width='100%' height='100%' style={{ border: 0 }} allowfullscreen='' loading='lazy'
              /> */}
              <img className='rounded-circle img-fluid' src='assets/img/about/1.jpg' alt='...' />
            </div>
            <div className='timeline-panel text-center'>
              <div className='timeline-heading'>
                <h4>20 de Noviembre 2021</h4>
              </div>
              <div className='timeline-body'>
                <ul className='text-muted text-start list-unstyled'>
                  <li><b>10:00</b> Encuentro en la Axion San Ignacio</li>
                  <li><b>11:00</b> Salida a las Ruinas de San Ignacio</li>
                  <li><b>14:00</b> Salida a la Cooperativa Flor de Jardín</li>
                  <li><b>16:00</b> Recorrido en la Cooperativa</li>
                </ul>
                <p><a href='https://goo.gl/maps/RvMAa9PzKAU9kwPA6'>Recorrido en Google Maps</a></p>
              </div>
            </div>
          </li>

          <li className='timeline-inverted'>
            <div className='timeline-image'><img className='rounded-circle img-fluid' src='assets/img/about/2.jpg' alt='...' /></div>
            <div className='timeline-panel text-center'>
              <div className='timeline-heading'>
                <h4>21 de Noviembre 2021</h4>
              </div>
              <div className='timeline-body'>
                <ul className='text-muted text-start list-unstyled'>
                  <li><b>10:00</b> Encuentro en la Axion San Ignacio</li>
                  <li><b>11:00</b> Salida a las Ruinas de San Ignacio</li>
                  <li><b>14:00</b> Salida a la Cooperativa Flor de Jardín</li>
                  <li><b>16:00</b> Recorrido en la Cooperativa</li>
                </ul>
                <p><a href='https://goo.gl/maps/RvMAa9PzKAU9kwPA6'>Recorrido en Google Maps</a></p>
              </div>
            </div>

          </li>
          <li>
            <div className='timeline-image'><img className='rounded-circle img-fluid' src='assets/img/about/3.jpg' alt='...' /></div>
            <div className='timeline-panel text-center'>
              <div className='timeline-heading'>
                <h4>22 de Noviembre 2022</h4>
              </div>
              <div className='timeline-body'>
                <ul className='text-muted text-start list-unstyled'>
                  <li><b>10:00</b> Encuentro en la Axion San Ignacio</li>
                  <li><b>11:00</b> Salida a las Ruinas de San Ignacio</li>
                  <li><b>14:00</b> Salida a la Cooperativa Flor de Jardín</li>
                  <li><b>16:00</b> Recorrido en la Cooperativa</li>
                </ul>
                <p className='text-center'><a href='https://goo.gl/maps/RvMAa9PzKAU9kwPA6'>Recorrido en Google Maps</a></p>
              </div>
            </div>
          </li>

          <li className='timeline-inverted'>
            <div className='timeline-image'>
              <h4>
                Se parte
                <br />
                de nuestra
                <br />
                aventura!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default About
