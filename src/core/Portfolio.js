const Portfolio = () => {
  return (
    <section className='page-section bg-light' id='portfolio'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>
            Alojamientos y Menús
          </h2>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/* <!-- Portfolio item 1--> */}
            <div className='portfolio-item'>
              <a
                className='portfolio-link'
                data-bs-toggle='modal'
                href='#portfolioModal1'
              >
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'>
                    <i className='fas fa-plus fa-3x' />
                  </div>
                </div>
                <img
                  className='img-fluid'
                  style={{ height: '350px' }}
                  src='assets/img/sanginacioportada.jpg'
                  alt='...'
                />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>San Ignacio</div>
                {/*  <div className='portfolio-caption-subheading text-muted'>Some Text</div> */}
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/*  <!-- Portfolio item 2--> */}
            <div className='portfolio-item'>
              <a
                className='portfolio-link'
                data-bs-toggle='modal'
                href='#portfolioModal2'
              >
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'>
                    <i className='fas fa-plus fa-3x' />
                  </div>
                </div>
                <img
                  className='img-fluid'
                  style={{ height: '350px' }}
                  src='assets/img/jardinAmerica.jpg'
                  alt='...'
                />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Jardín América</div>
                {/* <div className='portfolio-caption-subheading text-muted'>Alguna descripción.</div> */}
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            {/* <!-- Portfolio item 3--> */}
            <div className='portfolio-item'>
              <a
                className='portfolio-link'
                data-bs-toggle='modal'
                href='#portfolioModal3'
              >
                <div className='portfolio-hover'>
                  <div className='portfolio-hover-content'>
                    <i className='fas fa-plus fa-3x' />
                  </div>
                </div>
                <img
                  className='img-fluid'
                  style={{ height: '350px' }}
                  src='assets/img/Capiovi.jpg'
                  alt='...'
                />
              </a>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Capioví</div>
                {/*  <div className='portfolio-caption-subheading text-muted'>Alguna descripción.</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
