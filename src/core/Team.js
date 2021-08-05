const Team = () => {
  return (
    <section className='page-section bg-light' id='team'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Nuestro equipo de organizadores</h2>
          <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='../assets/img/team/1.jpg' alt='...' />
              <h4>Jose Fernandez</h4>
              <p className='text-muted'>Chapista de El Relampago</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-instagram' /></a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='../assets/img/team/2.jpg' alt='...' />
              <h4>Jose Fernandez</h4>
              <p className='text-muted'>Vendedor de Maderas</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='../assets/img/team/3.jpg' alt='...' />
              <h4>José Perez</h4>
              <p className='text-muted'>Fabrica de valde</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-linkedin-in' /></a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'><p className='large text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
        </div>
      </div>
    </section>
  )
}
export default Team
