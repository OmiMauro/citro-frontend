const Team = () => {
  return (
    <section className='page-section bg-light' id='team'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Organizadores</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img
                className='mx-auto rounded-circle'
                src='assets/img/team/1.jpg'
                alt='...'
              />
              <h4>Tino Olivera</h4>
              <a
                className='btn btn-dark btn-social mx-2'
                href='https://www.facebook.com/tino.oliveira.568'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-facebook-f' />
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='https://www.instagram.com/tino.oliveira.568/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-instagram' />
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='https://api.whatsapp.com/send?phone=5493743519395&text=Hola Tino, cómo andás? Quiero consultarte algunos detalles del evento. Soy ....'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-whatsapp' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team
