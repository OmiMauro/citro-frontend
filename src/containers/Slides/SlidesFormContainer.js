import React, { useEffect } from 'react'
import SlidesForm from '../../components/Slides/SlidesForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorSlides, fetchSlideById } from '../../redux/slices/slides-slice'

const SlidesFormContainer = () => {
	const handleSubmit = (formData) => {}
	const { id } = useParams()
	const dispatch = useDispatch()
	const { slide, errors, loading } = useSelector(selectorSlides())

	useEffect(() => {
		if (id) {
			dispatch(fetchSlideById(id))
		}
	}, [dispatch])
	return (
		<>
			<SlidesForm handleSubmit={handleSubmit} slide={slide} />
		</>
	)
}

export default SlidesFormContainer
