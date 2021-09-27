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
                    {/*  <p className='item-intro text-muted'>Ciudad de los Jesuitas</p> */}
                    <img
                      className='img-fluid d-block mx-auto'
                      alt='...'
                      src='assets/img/SanIgnacioRuinas.jpg'
                    />
                    <p>
                      El almuerzo se realizará en La Carpa Azul que incluirá
                      <b> "Entrada + Plato principal + Postre" </b>
                    </p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
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
                    {/*  <p className='item-intro text-muted'>Capital de los Saltos</p> */}
                    <img
                      className='img-fluid d-block mx-auto'
                      src='../assets/img/jardinAmericaCristo.jpg'
                      alt='...'
                    />
                    <p>
                      Al llegar a Jardín América, se recorrerá las Instalaciones
                      de la Coop. Flor De Jardín y a la noche se prevee la cena
                      con el menu a definir y como opción "Choripan de Pernil
                      con Mandioca Frita" .
                    </p>

                    {/*  <p>Ubicaciones Utiles:</p> */}
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
                      {/* <li>
                        <strong>Complejos Saltos del Tabay: </strong>
                        <a href='tel:543743400421'>+543743400421</a>
                      </li> */}
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
                    {/*                     <p>El domingo a las 9hs, se prevee salir desde Jardín América, en la Axion, con destino a Papel Misionero. Luego a las 11hs se continua con el viaje hacia el Salto Capioví.</p>
                     */}
                    <ul className='list-inline'>
                      <li>
                        <strong>Hospedajes</strong>
                      </li>
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
      {/*  <div className='portfolio-modal modal fade' id='portfolioModal4' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='close-modal' data-bs-dismiss='modal'><img src='assets/img/close-icon.svg' alt='Close modal' /></div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  <div className='modal-body'>
                    <h2 className='text-uppercase'>Project Name</h2>
                    <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                    <img className='img-fluid d-block mx-auto' src='../assets/img/portfolio/4.jpg' alt='...' />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className='list-inline'>
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
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
