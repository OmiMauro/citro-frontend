import { useSelector, useDispatch } from 'react-redux'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import React, { useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { STATUS } from '../../redux/constants/action-types'
import { Row, Carousel } from 'react-bootstrap'
import Spinner from '../Spinner/Spinner'
const CustomCarousel = () => {
	const dispatch = useDispatch()
	const { slides, status } = useSelector(selectorSlides)

	useEffect(() => {
		dispatch(fetchSlides())
	}, [])
	return (
		<Row>
			{status === STATUS.SUCCESSFUL && (
				<Carousel fade interval="2000">
					{slides.map((slide) => (
						<Carousel.Item
							key={slide.id}
							style={{
								height: '90vh',
							}}
						>
							<img
								src={slide.image_id.url}
								alt={slide.name}
								style={{
									width: '100%',
									height: '100vh',
									objectFit: 'cover',
									objectPosition: 'center',
								}}
							/>
							<Carousel.Caption>
								<h3>{slide.name}</h3>
								<p>{slide.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			)}

			{status === STATUS.PENDING && <Spinner />}
		</Row>
	)
}

export default CustomCarousel
