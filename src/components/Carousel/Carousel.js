import { useSelector, useDispatch } from 'react-redux'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import { useEffect } from 'react'
import './styles.css'

const Carousel = () => {
	const dispatch = useDispatch()
	const { slides, status } = useSelector(selectorSlides)

	useEffect(() => {
		dispatch(fetchSlides())
	}, [])

	return (
		<div
			id='carouselExampleSlidesOnly'
			className='carousel slide'
			data-bs-ride='carousel'>
			<div className='carousel-inner'>
				{slides &&
					slides.map((item, index) => {
						return (
							<div
								className={`carousel-item ${index === 0 ? 'active' : ''}`}
								key={index}>
								<img
									width='100%'
									height='100%'
									src={item.image}
									alt={item.text}
									key={item._id}
								/>
							</div>
<<<<<<< HEAD
						)
					})}
			</div>
		</div>
	)
}
export default Carousel
=======
						);
					})}
			</div>
		</div>
	);
};
export default Carousel;
>>>>>>> 4a22957e474d3735b9f70d4bf27a6a6661196fc1
