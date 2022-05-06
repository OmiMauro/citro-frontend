import { useSelector } from 'react-redux'
import { selectorOrganization } from '../../redux/slices/organization-slice'
import { useEffect } from 'react'

import './styles.css'
import { STATUS } from '../../redux/constants/action-types'
const AboutUs = () => {
	const { organization, status } = useSelector(selectorOrganization)

	const { aboutUs, name, welcomeText } = organization
	const splitedDescription = aboutUs ? aboutUs.split('. ') : ['']
	return (
		<section className='page-section' id='services'>
			<div className='container'>
				{status === STATUS.SUCCESSFUL && (
					<>
						<div className='text-center '>
							<h2 className='section-heading text-uppercase'>{name}</h2>
							<h3 className='section-subheading text-muted'>{welcomeText}</h3>
						</div>
						<div className='row text-center fst-italic text-muted'>
							{splitedDescription?.map((paragraph) => {
								return <p>{paragraph}.</p>
							})}
						</div>
					</>
				)}
			</div>
		</section>
	)
}
export default AboutUs
