import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import GaleryForm from '../../components/Galery/GaleryForm'
import GaleryList from '../../components/Galery/GaleryList'
import Pagination from '../../components/Pagination/Pagination'
import {
	selectorGalery,
	fetchGalery,
	removePicture
} from '../../redux/slices/galery-slice'

const GaleriesListContainer = () => {
	const dispatch = useDispatch()
	const { galery, errors, status } = useSelector(selectorGalery)
	const [page, setPage] = useState(1)

	const handlePageChange = (e) => {
		setPage(e.selected + 1)
	}
	useEffect(() => {
		dispatch(fetchGalery(page))
	}, [dispatch, page])

	const handleDelete = (id) => {
		dispatch(removePicture(id))
	}
	return (
		<>
			<div className='col'>
				<div className='container'>
					<GaleryList
						galery={galery}
						errors={errors}
						handleDelete={handleDelete}
					/>
					<div className='d-flex justify-content-center'>
						<Pagination
							handlePageChange={handlePageChange}
							pages={galery?.pages}
							total={galery?.total}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default GaleriesListContainer
