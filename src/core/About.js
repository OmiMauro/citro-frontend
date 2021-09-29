const About = () => {
  return (
    <section className='page-section' id='about'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>
            Cronograma de Actividades
          </h2>
          <h3 className='section-subheading text-muted'>
            Todos los horarios son estimativos
          </h3>
        </div>
        <ul className='timeline'>
          <li>
            <div className='timeline-image'>
              <img
                className='rounded-circle img-fluid'
                src='assets/img/about/2.jpg'
                alt='...'
              />
            </div>
            <div className='timeline-panel text-center'>
              <div className='timeline-heading'>
                <h4>20 de Noviembre 2021</h4>
              </div>
              <div className='timeline-body'>
                <ul className='text-muted text-start list-unstyled'>
                  <li>
                    <b>08:00</b> Desayuno en la Carpa Azul
                  </li>
                  <li>
                    <b>09:00</b> Ruinas de San Ignacio
                  </li>
                  <li>
                    <b>11:00</b> Almuerzo en la Carpa Azul
                  </li>
                  <li>
                    <b>14:00</b> Casa de Horacio Quiroga
                  </li>
                  <li>
                    <b>17:00</b> Saltos del Tabay
                  </li>
                  <li>
                    <b>21:00</b> Cena en El Rodeo
                  </li>
                </ul>
                <p>
                  <a href='https://goo.gl/maps/dGJSWWQRUJEzwu7x5'>
                    Recorrido en Google Maps
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className='timeline-inverted'>
            <div className='timeline-image'>
              <img
                className='rounded-circle img-fluid'
                src='assets/img/about/3.jpg'
                alt='...'
              />
            </div>
            <div className='timeline-panel text-center'>
              <div className='timeline-heading'>
                <h4>21 de Noviembre 2022</h4>
              </div>
              <div className='timeline-body'>
                <ul className='text-muted text-start list-unstyled'>
                  <li>
                    <b>08:00</b> Desayuno en Plaza Colón
                  </li>
                  <li>
                    <b>09:00</b> Coop. de Yerba Flor de Jardín
                  </li>
                  <li>
                    <b>10:30</b> Fábrica de Fécula de Mancioca
                  </li>
                  <li>
                    <b>12:00</b> Almuerzo en Agroturismo Sof
                  </li>
                  <li>
                    <b>15:00</b> Adornos Navideños
                  </li>
                  <li>
                    <b>16:30</b> Maderera Puerto Madera
                  </li>
                  <li>
                    <b>18:00</b> Fotografías de recuerdo
                  </li>
                  <li>
                    <b>21:00</b> Cena de Gala Don Justo
                  </li>
                  <li>
                    <b>21:15</b> Entrega de premios y recuerdos
                  </li>
                </ul>
                <p className='text-center'>
                  <a href='https://goo.gl/maps/gFZkDUcyuTUk9Xb46'>
                    Recorrido en Google Maps
                  </a>
                </p>
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
