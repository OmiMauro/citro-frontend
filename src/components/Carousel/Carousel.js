import { useState, useEffect } from 'react';
import { getSlides } from '../../services/slidesServices';
import './styles.css';
const Carousel = () => {
	const [slides, setSlides] = useState([]);
	useEffect(() => {
		const fetchSlides = async () => {
			const response = await getSlides();
			setSlides(response.data.data);
		};
		fetchSlides();
	}, []);

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
						);
					})}
			</div>
		</div>
	);
};
export default Carousel;
