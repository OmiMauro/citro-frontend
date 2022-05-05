import React from 'react'
import SlidesList from '../../components/Slides/SlidesList'
import { useEffect } from 'react'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import { useDispatch, useSelector } from 'react-redux'

const SlidesListContainer = () => {
	const { slides, status, errors } = useSelector(selectorSlides)
	const dispatch = useDispatch()
	const handleDelete = (id) => {}
	useEffect(() => {
		dispatch(fetchSlides())
	}, [dispatch])

	return (
		<>
			<SlidesList slides={slides} handleDelete={handleDelete} />
		</>
	)
}

export default SlidesListContainer
