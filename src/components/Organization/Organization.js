import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
const Organization = ({ organization }) => {
	return (
		<>
			<section className='col' key={organization._id}>
				<div class='card'>
					<div class='card__img'>
						<img className='img' src={organization?.image_id?.url} />
					</div>
					<div class='card__name'>{organization?.name}</div>
					<div class='card__job m-5'>
						<span className='h5'>Texto de bienvenida:</span>
						<hr className='w-25 mx-auto' />
						<span>{organization?.welcomeText}</span>
					</div>
					<div className='card__job mt-4'>
						<span className='h5'>Sobre Nosotros:</span>
						<hr className='w-25 mx-auto' />
						<DangerousSetInnerHTML content={organization?.aboutUs} />
					</div>
					<div class='card__link'>
						<span className='h5'>Enlaces</span>
						<hr className='w-25 mx-auto' />
						<article>
							Celular:
							{organization?.phone ? (
								<a
									className='small  stretched-link'
									href={`tel:${organization?.phone}`}>
									<i className='fa fa-phone' aria-hidden='true'></i>
								</a>
							) : (
								<span> No has ingresado el celular</span>
							)}
						</article>
						<article>
							Email:
							{organization?.email ? (
								<a
									className='small  stretched-link'
									href={`mailto:${organization?.email}`}
									target={'_blank'}>
									<i className='fa fa-at' aria-hidden='true'></i>
								</a>
							) : (
								<span> No has ingresado el email</span>
							)}
						</article>
						<article>
							Facebook:
							{organization?.urlFacebook ? (
								<a
									className='small  stretched-link'
									href={organization?.urlFacebook}
									target={'_blank'}>
									<i className='fa fa-facebook' aria-hidden='true'></i>
								</a>
							) : (
								<span> No has ingresado la url</span>
							)}
						</article>
						<article>
							Instagram:
							{organization?.urlInstagram ? (
								<a
									className='small  stretched-link'
									href={organization?.urlInstagram}
									target={'_blank'}>
									<i className='fa fa-instagram' aria-hidden='true'></i>
								</a>
							) : (
								<span> No has ingresado la url</span>
							)}
						</article>{' '}
						<article>
							Whatsapp:
							{organization?.urlWhatsapp ? (
								<a
									className='small  stretched-link'
									href={organization?.urlWhatsapp}
									target={'_blank'}>
									<i className='fa fa-whatsapp' aria-hidden='true'></i>
								</a>
							) : (
								<span> No has ingresado la url</span>
							)}
						</article>
					</div>
					<hr className='w-25 mx-auto' />
					<div className=''>
						<Link
							className=' card__btn-contact btn btn-outline-primary'
							to={`/backoffice/organizations/edit/${1}`}>
							Editar
						</Link>
						<Link
							className='btn btn-outline-primary card__btn-contact'
							to={'/backoffice'}>
							Volver
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default Organization
