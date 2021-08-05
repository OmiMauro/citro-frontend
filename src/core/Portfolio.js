const Portfolio = () => {
  return (
    <section className='page-section bg-light' id='portfolio'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Telefonos útiles</h2>
          <h3 className='section-subheading text-muted'>SOme text.</h3>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/* <!-- Portfolio item 1--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal1'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/SanIgnacioRuinas.jpg' alt='...' />

              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>San Ignacio</div>
                <div className='portfolio-caption-subheading text-muted'>Lugar de partida</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/*  <!-- Portfolio item 2--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal2'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/jardinAmerica.jpg' alt='...' />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Jardín América</div>
                <div className='portfolio-caption-subheading text-muted'>Segundo día</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/* <!-- Portfolio item 3--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal3'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/SaltoCapiovi.jpg' alt='...' />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Capiovi</div>
                <div className='portfolio-caption-subheading text-muted'>Some Text</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4 mb-lg-0'>
            {/* <!-- Portfolio item 4--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal4'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/portfolio/4.jpg' alt='...' />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Lines</div>
                <div className='portfolio-caption-subheading text-muted'>Branding</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4 mb-sm-0'>
            {/*  <!-- Portfolio item 5--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal5'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/portfolio/5.jpg' alt='...' />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Southwest</div>
                <div className='portfolio-caption-subheading text-muted'>Website Design</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6'>
            {/* <!-- Portfolio item 6--> */}
            <div className='portfolio-item'>
              <a className='portfolio-link' data-bs-toggle='modal' href='#portfolioModal6'>
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
                </div>
                <img className='img-fluid' style={{ height: '350px' }} src='assets/img/portfolio/6.jpg' alt='...' />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Window</div>
                <div className='portfolio-caption-subheading text-muted'>Photography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
