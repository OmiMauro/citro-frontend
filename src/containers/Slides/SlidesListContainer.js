import React from 'react'
import SlidesList from '../../components/Slides/SlidesList'
import { useEffect } from 'react'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import { useDispatch, useSelector } from 'react-redux'

const SlidesListContainer = () => {
	const { slides, status, errors } = useSelector(selectorSlides)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchSlides())
	}, [dispatch])

	const handleDelete = () => {}
	return (
		<>
			<div className='col'>
				<h3 className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4'>
					Lista de Slides
				</h3>
				<SlidesList slides={slides} handleDelete={handleDelete} />
			</div>
		</>
	)
}

export default SlidesListContainer
