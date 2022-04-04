import { useState, useEffect } from 'react'
import { getMembers } from '../../services/membersServices'
import './styles.css'
const Members = () => {
	const [members, setMembers] = useState([])

	useEffect(() => {
		const fetchMembers = async () => {
			const response = await getMembers()
			setMembers(response.data.data)
		}
		fetchMembers()
	}, [])

	return (
		<section className='page-section bg-light' id='team'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>Organizadores</h2>
				</div>
				<div className='row'>
					{members &&
						members.map((item) => {
							return (
								<div className='col-lg-4'>
									<div className='team-member'>
										{item.image_id.url && (
											<img
												className='mx-auto rounded-circle'
												src={item.image_id.url}
												alt={item.name}
											/>
										)}
										<h4>{item.name}</h4>
										{item.urlFacebook && (
											<a
												className='btn btn-dark btn-social mx-2'
												href={item.urlFacebook}
												target='_blank'
												rel='noreferrer'>
												<i className='fa fa-facebook-f' />
											</a>
										)}
										{item.urlInstagram && (
											<a
												className='btn btn-dark btn-social mx-2'
												href={item.urlInstagram}
												target='_blank'
												rel='noreferrer'>
												<i className='fa fa-instagram' />
											</a>
										)}
										{item.phone && (
											<a
												className='btn btn-dark btn-social mx-2'
												href={`https://api.whatsapp.com/send?phone=${item.phone}&text=Hola ${item.name}.`}
												target='_blank'
												rel='noreferrer'>
												<i className='fa fa-whatsapp' />
											</a>
										)}
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}
export default Members
