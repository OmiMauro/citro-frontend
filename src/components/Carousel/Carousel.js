import { useSelector, useDispatch } from 'react-redux'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import { useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
//import './styles.css'

const Carousel = () => {
	const dispatch = useDispatch()
	const { slides, status } = useSelector(selectorSlides)

	useEffect(() => {
		dispatch(fetchSlides())
	}, [])

	return (
		<div className='carousel slide' data-bs-ride='carousel'>
			<div className='carousel-inner'>
				{slides?.map((item) => (
					<div
						className={`carousel-item ${item.order === 1 ? 'active' : ''}`}
						key={item._id}>
						<img
							className='d-block w-100'
							src={item.image_id.url}
							alt={item.text}
							key={item._id}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
