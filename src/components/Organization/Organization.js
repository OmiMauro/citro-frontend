import React from 'react'
import { Link } from 'react-router-dom'
const Organization = ({ organization }) => {
	return (
		<>
			<div className='container'>
				<div className='col'>
					<div className='justify-content-center'>
						<div className='d-flex flex-column'>
							<h1 className='text-center h1'>{organization.name}</h1>
							<div className='row'>
								<img
									alt={organization.name}
									className=''
									src={organization.image}
								/>
							</div>
							<p className=''>{organization.welcomeText}</p>
							<p className=''>{organization.aboutUs}</p>
							<p className=''>{organization.phone}</p>
							<p className=''>{organization.email}</p>
							<a href={organization.urlFacebook} target='_blank' className=''>
								{organization.urlFacebook}
							</a>
							<a
								href={organization.urlInstagram}
								target={'_blank'}
								className=''>
								{organization.urlInstagram}
							</a>
							<a href={organization.urlWhatsapp} target={'_blank'} className=''>
								{organization.urlWhatsapp}
							</a>
						</div>
						<div className='d-flex justify-content-between mt-4'>
							<Link
								className='flex-fill text-decoration-none'
								to={'/backoffice'}>
								Volver
							</Link>
							<Link
								className='flex-fill text-decoration-none'
								to={`/backoffice/organization/edit/${1}`}>
								Editar
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Organization
