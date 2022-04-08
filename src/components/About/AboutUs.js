import { useSelector } from 'react-redux'
import { selectorOrganization } from '../../redux/slices/organization-slice'
import { useEffect } from 'react'

import './styles.css'
import StatusHandler from '../StatusHandler/StatusHandler'
const AboutUs = () => {
	const { organization, status } = useSelector(selectorOrganization)

	const { aboutUs, name, welcomeText } = organization
	const splitedDescription = aboutUs ? aboutUs.split('. ') : ['']
	return (
		<section className='page-section' id='services'>
			{organization && (
				<div className='container'>
					<div className='text-center '>
						<h2 className='section-heading text-uppercase'>{name}</h2>
						<h3 className='section-subheading text-muted'>{welcomeText}</h3>
					</div>
					<div className='row text-center fst-italic text-muted'>
						{splitedDescription?.map((paragraph) => {
							return <p>{paragraph}.</p>
						})}
					</div>
				</div>
			)}
			<StatusHandler status={status}></StatusHandler>
		</section>
	)
}
export default AboutUs
