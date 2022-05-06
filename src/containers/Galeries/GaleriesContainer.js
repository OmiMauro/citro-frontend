import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GaleryForm from '../../components/Galery/GaleryForm'
import Pagination from '../../components/Pagination/Pagination'
import { selectorGalery, fetchGalery } from '../../redux/slices/galery-slice'

const GaleriesContainer = () => {
	const dispatch = useDispatch()
	const { galery, errors, status } = useSelector(selectorGalery)
	const handleSubmit = (formData) => {}
	return (
		<>
			<div className='col'>
				<GaleryForm
					handleSubmit={handleSubmit}
					errors={errors}
					title='Galería de fotos'
				/>
			</div>
		</>
	)
}

export default GaleriesContainer
