import React, { useEffect } from 'react'
import SlidesForm from '../../components/Slides/SlidesForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectorSlides,
	fetchSlideById,
	createSlide
} from '../../redux/slices/slides-slice'

const SlidesFormContainer = () => {
	const handleSubmit = (formData) => {
		dispatch(createSlide(formData))
	}
	const { id } = useParams()
	const dispatch = useDispatch()
	const { slide, errors, status, msg } = useSelector(selectorSlides)

	useEffect(() => {
		if (id) {
			dispatch(fetchSlideById(id))
		}
	}, [dispatch])
	return (
		<>
			<SlidesForm
				handleSubmit={handleSubmit}
				slide={slide}
				errors={errors}
				status={status}
				msg={msg}
			/>
		</>
	)
}

export default SlidesFormContainer
