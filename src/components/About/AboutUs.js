import './styles.css'
const AboutUs = (props) => {
	const { aboutUs, name, welcomeText } = props.organization
	const splitedDescription = aboutUs ? aboutUs.split('. ') : ['']
	return (
		<section className='page-section' id='services'>
			<div className='container'>
				<div className='text-center '>
					<h2 className='section-heading text-uppercase'>{name}</h2>
					<h3 className='section-subheading text-muted'>{welcomeText}</h3>
				</div>
				<div className='row text-center fst-italic text-muted'>
					{splitedDescription &&
						splitedDescription.map((paragraph) => {
							return <p>{paragraph}.</p>
						})}
				</div>
			</div>
		</section>
	)
}
export default AboutUs
