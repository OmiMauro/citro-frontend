import React from 'react'
import { Link } from 'react-router-dom'
import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
const Organization = ({ organization }) => {
	return (
		<>
			<section className='page-section' id='services'>
				<div className='container' key={organization._id}>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase text-center h1'>
							{organization?.name}
						</h2>
						<h3 className='section-subheading text-muted h1'>
							{organization?.welcomeText}
						</h3>
					</div>
					<div className='d-flex justify-content-center'>
						<img
							alt={organization?.name}
							className='img w-50'
							src={organization?.image}
						/>
					</div>

					<div className='row text-center text-muted'>
						<DangerousSetInnerHTML content={organization?.aboutUs} />
					</div>

					<div className='mx-auto m-3'>
						<h3 className='text-center text-uppercase'>Redes Sociales</h3>
						<div className='row'>
							<div className='col-xl-3 col-md-6'>
								<div className='card bg-success text-white mb-4'>
									<p className='card-body'>Celular</p>
									<div className='card-footer d-flex align-items-center justify-content-between'>
										{organization?.phone ? (
											<a
												className='small text-white stretched-link'
												href={`tel:${organization?.phone}`}>
												{organization?.phone}
											</a>
										) : (
											<p>No has ingresado el celular</p>
										)}
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-md-6'>
								<div className='card bg-success text-white mb-4'>
									<p className='card-body'>Correo Electronico</p>
									<div className='card-footer d-flex align-items-center justify-content-between'>
										{organization?.email ? (
											<a
												className='small text-white stretched-link'
												href={organization?.email}
												target={'_blank'}>
												{organization?.email}
											</a>
										) : (
											<p>No has ingresado el email</p>
										)}
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-md-6'>
								<div className='card bg-success text-white mb-4'>
									<p className='card-body'>Facebook</p>
									<div className='card-footer d-flex align-items-center justify-content-between'>
										{organization?.urlFacebook ? (
											<a
												className='small text-white stretched-link'
												href={organization?.urlFacebook}
												target={'_blank'}>
												{organization?.urlFacebook}
											</a>
										) : (
											<p>No has ingresado la url</p>
										)}
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-md-6'>
								<div className='card bg-success text-white mb-4'>
									<p className='card-body'>Instagram</p>
									<div className='card-footer d-flex align-items-center justify-content-between'>
										{organization?.urlInstagram ? (
											<a
												className='small text-white stretched-link'
												href={organization?.urlInstagram}
												target={'_blank'}>
												{organization?.urlInstagram}
											</a>
										) : (
											<p>No has ingresado la url</p>
										)}
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-md-6'>
								<div className='card bg-success text-white mb-4'>
									<p className='card-body'>Whatsapp</p>
									<div className='card-footer d-flex align-items-center justify-content-between'>
										{organization?.urlWhatsapp ? (
											<a
												className='small text-white stretched-link'
												href={organization?.urlWhatsapp}
												target={'_blank'}>
												{organization?.urlWhatsapp}
											</a>
										) : (
											<p>No has ingresado la url</p>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className='d-flex justify-content-start mt-4'>
							<Link
								className='btn btn-outline-primary'
								to={`/backoffice/organizations/edit/${1}`}>
								Editar
							</Link>
							<Link className='btn btn-outline-primary' to={'/backoffice'}>
								Volver
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Organization
