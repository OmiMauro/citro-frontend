const Modals = () => {
  return (
    <>
      <div
        className='portfolio-modal modal fade'
        id='portfolioModal1'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'>
              <img src='assets/img/close-icon.svg' alt='Close modal' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>San Ignacio</h2>
                    <img
                      className='img-fluid d-block mx-auto'
                      alt='...'
                      src='assets/img/SanIgnacioRuinas.jpg'
                    />
                    <p>
                      El desayuno se realizará en la plaza que está en frente al
                      predio de la Carpa Azul. El almuerzo del día sábado, se
                      realizará en La Carpa Azul en San Ignacio, que incluirá
                      <b> "Entrada + Plato principal + Postre" </b>, dónde el
                      plato principal podrán optar entre varias opciones
                      disponibles.{' '}
                    </p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Hotel La Toscana: </strong>
                        <a href='tel:543764470777'>+543764470777</a>
                      </li>
                      <li>
                        <strong>Hotel y Cabañas San Ignacio: </strong>
                        <a
                          href='https://api.whatsapp.com/send?phone=543764855841&text=Hola. Quiero consultarte por disponibilidad de habitaciones. Me llamo ....'
                          target='_blank'
                          rel='noreferrer'
                        >
                          +543764855841
                        </a>
                      </li>
                      <li>
                        <strong>Club de Río: </strong>
                        <a href='tel:543755340592'>+543755340592</a>
                      </li>
                      <li>
                        <strong>Hotel Portal del Sol: </strong>
                        <a href='tel:543764470005'>+543764470005</a>
                      </li>
                      <li>
                        <strong>Rancho Cué Lodge: </strong>
                        <a href='tel:543764227903'>+543764227903</a>
                      </li>
                      <li>
                        <strong>Cabañas Doña Ana: </strong>
                        <a href='tel:543743250388'>+543743250388</a>
                      </li>
                    </ul>

                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      data-bs-dismiss='modal'
                      type='button'
                    >
                      <i className='fas fa-times me-1' />
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='portfolio-modal modal fade'
        id='portfolioModal2'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'>
              <img src='assets/img/close-icon.svg' alt='Close modal' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Jardín América</h2>
                    <img
                      className='img-fluid d-block mx-auto'
                      src='../assets/img/jardinAmericaCristo.jpg'
                      alt='...'
                    />
                    <p>
                      La cena del día sábado, se realizará en "El Rodeo" en
                      Jardín América y el menú será "Choripanes y Pernil con
                      mandioca frita". También podremos observar la exposición
                      del motor y caja escuela de Angel Ortiga y encendido e
                      inyección electrónica de Pablo Castro.
                    </p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Hotel América: </strong>
                        <a href='tel:543743460521'>+543743460521</a>
                      </li>
                      <li>
                        <strong>Cabañas Kito: </strong>
                        <a
                          href='https://api.whatsapp.com/send?phone=543743435856&text=Hola Kito. Quiero consultarte por disponibilidad de las Cabañas. Me llamo ....'
                          target='_blank'
                          rel='noreferrer'
                        >
                          +543743435856
                        </a>
                      </li>
                      <li>
                        <strong>Baden Baden: </strong>
                        <a href='tel:543743460923'>+543743460923</a>
                      </li>
                      <li>
                        <strong>Paraíso Lodge: </strong>
                        <a href='tel:543743460517'>+543743460517</a>
                      </li>
                      <li>
                        <strong>Hotel Las Azaleas: </strong>
                        <a
                          href='https://api.whatsapp.com/send?phone=543743444378&text=Hola. Quiero consultarte por disponibilidad de habitaciones. Me llamo ....'
                          target='_blank'
                          rel='noreferrer'
                        >
                          +543743444378
                        </a>
                      </li>
                    </ul>
                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      data-bs-dismiss='modal'
                      type='button'
                    >
                      <i className='fas fa-times me-1' />
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='portfolio-modal modal fade'
        id='portfolioModal3'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'>
              <img src='assets/img/close-icon.svg' alt='Close modal' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Capioví</h2>
                    {/*  <p className='item-intro text-muted'>Capital de la Navidad</p> */}
                    <img
                      className='img-fluid d-block mx-auto'
                      src='assets/img/iglesiaCapiovi.jpg'
                      alt='...'
                    />
                    <p>
                      El almuerzo del día domingo se realizará en el predio de
                      <b>"Agroturismo Sof"</b> en la localidad de <b>Capioví</b>{' '}
                      y podrán elegir entre: asado vacuno, pollo, pescado a la
                      parrilla, pescado frito, ensalada rusa, mandioca y/o
                      ensaladas regionales. <br />
                    </p>

                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Hotel Castillo: </strong>
                        <a href='tel:543743493147'>+543743493147</a>
                      </li>
                      <li>
                        <strong>Cabañas El Sueño: </strong>
                        <a href='tel:543743493404'>+543743493404</a>
                      </li>
                      <li>
                        <strong>Cabaña Don Juan: </strong>
                        <a href='tel:543743456446'>+543743456446</a>
                      </li>
                      <li>
                        <strong>Hospedaje Capioví: </strong>
                        <a href='tel:543743493183'>+543743493183</a>
                      </li>
                    </ul>
                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      data-bs-dismiss='modal'
                      type='button'
                    >
                      <i className='fas fa-times me-1' />
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='portfolio-modal modal fade'
        id='portfolioModal4'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'>
              <img src='assets/img/close-icon.svg' alt='Close modal' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Puerto Rico</h2>
                    {/*  <p className='item-intro text-muted'>
                      Lorem ipsum dolor sit amet consectetur.
                    </p> */}
                    <img
                      className='img-fluid d-block mx-auto'
                      src='assets/img/PuertoRicoCostanera.jpg'
                      alt='...'
                    />
                    <br />
                    <p>
                      La cena se realizará en <b>"Don Justo"</b> en la localidad
                      de <b>Puerto Rico</b> y podrán degustar un Rodicio de
                      Pizzas acompañado con una variedad de platos tipícos.
                      Luego, para finalizar el evento, realizaremos los sorteos
                      y reconocimientos a los participantes.
                    </p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Hotel Paris: </strong>
                        <a href='tel:543743476500'>+543743476500</a>
                      </li>
                      <li>
                        <strong>Cabañas del Prado, Hotel y Resort: </strong>
                        <a href='tel:543743476989'>+543743476989</a>
                      </li>
                      <li>
                        <strong>Patio del Puerto Hotel Boutique: </strong>
                        <a href='tel:543743421153'>+543743421153</a>
                      </li>
                      <li>
                        <strong>Alojamiento Peter: </strong>
                        <a href='tel:543743477070'>+543743477070</a>
                      </li>
                      <li>
                        <strong>Hospedaje La Nona: </strong>
                        <a href='tel:543743520677'>+543743520677</a>
                      </li>
                      <li>
                        <strong>Hostel Tekoafro: </strong>
                        <a href='tel:543743500012'>+543743500012</a>
                      </li>
                    </ul>
                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      data-bs-dismiss='modal'
                      type='button'
                    >
                      <i className='fas fa-times me-1' />
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className='portfolio-modal modal fade' id='portfolioModal5' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'><img src='assets/img/close-icon.svg' alt='Close modal' /></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Project Name</h2>
                    <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                    <img className='img-fluid d-block mx-auto' src='assets/img/portfolio/5.jpg' alt='...' />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button className='btn btn-primary btn-xl text-uppercase' data-bs-dismiss='modal' type='button'>
                      <i className='fas fa-times me-1' />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal6' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'><img src='assets/img/close-icon.svg' alt='Close modal' /></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Project Name</h2>
                    <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                    <img className='img-fluid d-block mx-auto' src='assets/img/portfolio/6.jpg' alt='...' />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button className='btn btn-primary btn-xl text-uppercase' data-bs-dismiss='modal' type='button'>
                      <i className='fas fa-times me-1' />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  )
}
export default Modals
