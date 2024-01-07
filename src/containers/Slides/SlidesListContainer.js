import React from 'react'
import SlidesList from '../../components/Slides/SlidesList'
import { useEffect } from 'react'
import {
	selectorSlides,
	fetchSlides,
	removeSlide,
} from '../../redux/slices/slides-slice'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'react-bootstrap'
const SlidesListContainer = () => {
	const { slides, status, errors } = useSelector(selectorSlides)
	const dispatch = useDispatch()
	const handleDelete = (id) => {
		dispatch(removeSlide(id))
	}
	useEffect(() => {
		dispatch(fetchSlides())
	}, [dispatch])

	return (
		<Col>
			<SlidesList slides={slides} handleDelete={handleDelete} />
		</Col>
	)
}

export default SlidesListContainer
