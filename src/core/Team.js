const Team = () => {
  return (
    <section className='page-section bg-light' id='team'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Organizadores</h2>
          {/*           <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
 */}
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='assets/img/team/1.jpg' alt='...' />
              <h4>Tino Olivera</h4>
              <p className='text-muted'>Chapista El Relampago</p>
              <a className='btn btn-dark btn-social mx-2' href='https://www.facebook.com/tino.oliveira.568' target='_blank' rel='noreferrer'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='https://www.instagram.com/tino.oliveira.568/' target='_blank' rel='noreferrer'><i className='fab fa-instagram' /></a>
              <a className='btn btn-dark btn-social mx-2' href='https://api.whatsapp.com/send?phone=5493743519395&text=Hola Tino, quiero consultarte por el evento. Podés hablar ahora?' target='_blank' rel='noreferrer'><i className='fab fa-whatsapp' /></a>

            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='assets/img/team/2.jpg' alt='...' />
              <h4>Brahian Osorio</h4>
              <p className='text-muted'>Jefe de Indual</p>
              <a className='btn btn-dark btn-social mx-2' href='https://www.facebook.com/brayhan.osorio' target='_blank' rel='noreferrer'><i className='fab fa-facebook-f' /></a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='assets/img/team/3.jpg' alt='...' />
              <h4>Omiñuka Manu</h4>
              <p className='text-muted'>Desarrollador Web</p>
              <a className='btn btn-dark btn-social mx-2' href='https://www.facebook.com/manuominuka' target='_blank' rel='noreferrer'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='https://www.instagram.com/manu_ominuka/' target='_blank' rel='noreferrer'><i className='fab fa-instagram' /></a>
              <a className='btn btn-dark btn-social mx-2' href='https://api.whatsapp.com/send?phone=5493743519395&text=Hola Manu, quiero consultarte por el evento. Podés hablar ahora?' target='_blank' rel='noreferrer'><i className='fab fa-whatsapp' /></a>

            </div>
          </div>
        </div>
        {/*  <div className='row'>
          <div className='col-lg-8 mx-auto text-center'><p className='large text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
        </div> */}
      </div>
    </section>
  )
}
export default Team
