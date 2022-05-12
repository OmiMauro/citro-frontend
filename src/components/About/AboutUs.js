import { useSelector, useDispatch } from 'react-redux'
import {
	fetchOrganization,
	selectorOrganization
} from '../../redux/slices/organization-slice'
import { useEffect } from 'react'

import './styles.css'
import { STATUS } from '../../redux/constants/action-types'
const AboutUs = () => {
	const { organization, status } = useSelector(selectorOrganization)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])
	const splitedDescription = organization?.aboutUs
		? organization?.aboutUs.split('. ')
		: ['']
	return (
		<section className='page-section' id=''>
			<div className='container'>
				<div className='text-center'>
					<h2 className='section-heading text-uppercase'>
						{organization?.name}
					</h2>
					<h3 className='section-subheading text-muted'>
						{organization?.welcomeText}
					</h3>
				</div>
				<div className='row d-flex justify-content-center'>
					<img
						src={organization.image}
						alt={organization?.name}
						className='col-8'
					/>
				</div>
				<div className='row text-center fst-italic text-muted'>
					{splitedDescription?.map((paragraph) => {
						return <p>{paragraph}.</p>
					})}
				</div>
			</div>
		</section>
	)
}
export default AboutUs
