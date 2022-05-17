import React from 'react'

const Contact = ({ organization }) => {
	return (
		<>
			<div className='container py-6 m-5'>
				<div className='container'>
					<div className='row g-5'>
						<div className='col-lg-6 '>
							<h1 className='mb-3 text-uppercase text-center'>Contactanos</h1>

							<div className='d-flex mb-4'>
								<i className='fa fa-phone'></i>
								<div className='ms-3'>
									<p className='mb-2  text-uppercase'>Celular</p>
									<a href={`tel:+${organization?.phone}`}>
										<h5 className='mb-0'>{organization?.phone}</h5>
									</a>
								</div>
							</div>
							<div className='d-flex mb-4'>
								<i className='fa fa-envelope'></i>
								<div className='ms-3'>
									<p className='mb-2  text-uppercase'>Email</p>
									<a href={`mailto:${organization?.email}`}>
										<h5 className='mb-0'>{organization?.email}</h5>
									</a>
								</div>
							</div>
							<div className='d-flex mb-0'>
								<i className='fa fa-facebook'></i>
								<div className='ms-3'>
									<p className='mb-2 text-uppercase'>Facebook</p>
									<a
										href={organization?.urlFacebook}
										target='_blank'
										rel='noopener noreferrer'>
										<h5 className='mb-0'>{organization?.urlFacebook}</h5>
									</a>
								</div>
							</div>
							<div className='d-flex mb-0'>
								<i className='fa fa-instagram'></i>
								<div className='ms-3'>
									<p className='mb-2 text-uppercase'>Instagram</p>
									<a
										href={organization?.urlInstagram}
										target='_blank'
										rel='noopener noreferrer'>
										<h5 className='mb-0'>{organization?.urlInstagram}</h5>
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-6 ' data-wow-delay='0.5s'>
							<div className='row g-3 d-inline-block w-100 h-100'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56858.948731809454!2d-55.26777673070181!3d-27.04014019520598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f811245d4ce333%3A0xf150dfd86f665850!2sJard%C3%ADn%20America%2C%20Misiones!5e0!3m2!1ses!2sar!4v1652796319645!5m2!1ses!2sar'
									width='200px'
									height='100%'
									style={{ border: 0 }}
									allowfullscreen=''
									className='  '
									loading='lazy'
									referrerpolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
