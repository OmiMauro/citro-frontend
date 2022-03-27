import { useState, useEffect } from 'react';
import './styles.css';
const Carousel = () => {
	const [url, setUrl] = useState([
		{
			path: 'https://cdn.pixabay.com/photo/2022/02/22/17/25/stork-7029266_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 12
		},
		{
			path: 'https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 13
		},
		{
			path: 'https://cdn.pixabay.com/photo/2018/11/19/15/06/machang-bridge-3825439_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 14
		},
		{
			path: 'https://cdn.pixabay.com/photo/2021/10/04/13/42/nature-6680367_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 15
		},
		{
			path: 'https://cdn.pixabay.com/photo/2021/09/26/08/41/lantern-6656783_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 16
		},
		{
			path: 'https://cdn.pixabay.com/photo/2022/03/03/11/18/nature-7045125_960_720.jpg',
			name: 'image',
			text: 'some text alternate',
			id: 17
		}
	]);

	return (
		<div
			id='carouselExampleSlidesOnly'
			className='carousel slide'
			data-bs-ride='carousel'>
			<div className='carousel-inner'>
				{url &&
					url.map((item, index) => {
						return (
							<div
								className={`carousel-item ${index === 0 ? 'active' : ''}`}
								key={index}>
								<img
									width='100%'
									height='100%'
									src={item.path}
									alt={item.text}
									key={item.id}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default Carousel;
