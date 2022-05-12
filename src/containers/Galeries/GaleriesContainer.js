import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GaleryForm from '../../components/Galery/GaleryForm'
import Pagination from '../../components/Pagination/Pagination'
import {
	selectorGalery,
	fetchGalery,
	addImagesToGalery
} from '../../redux/slices/galery-slice'

const GaleriesContainer = () => {
	const dispatch = useDispatch()
	const { galery, errors, status, msg } = useSelector(selectorGalery)
	const handleSubmit = (formData) => {
		dispatch(addImagesToGalery(formData))
	}
	return (
		<>
			<div className='col'>
				<GaleryForm
					handleSubmit={handleSubmit}
					errors={errors}
					status={status}
					msg={msg}
				/>
			</div>
		</>
	)
}

export default GaleriesContainer
