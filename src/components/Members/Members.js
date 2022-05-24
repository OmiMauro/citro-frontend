import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../../redux/constants/action-types'
import { selectorMembers, fetchMembers } from '../../redux/slices/members-slice'
import './styles.css'

const Members = () => {
	const dispatch = useDispatch()
	const { members, status } = useSelector(selectorMembers)

	useEffect(() => {
		dispatch(fetchMembers())
	}, [])
	return (
		<div className='container'>
			<div className='text-center'>
				<h2 className='section-heading text-uppercase'>Organizadores</h2>
			</div>
			{status === STATUS.SUCCESSFUL ? (
				<section className='page-section bg-light' id='team'>
					<div className='row justify-content-center'>
						<div className='d-lg-flex justify-content-lg-around '>
							{members?.map((item) => {
								return (
									<div
										className={`col col-lg-${12 / members.length}`}
										key={item._id}>
										<div className='team-member'>
											{item.image_id.url && (
												<img
													className='mx-auto rounded-circle'
													src={item.image_id.url}
													alt={item.name}
												/>
											)}
											<h4>
												{item.name} {item.lastname}
											</h4>
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
			) : (
				<div className='d-flex justify-content-center '>
					<div className='spinner-grow text-secondary ' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
		</div>
	)
}
export default Members
