import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GaleryList from '../../components/Galery/GaleryList'
import Pagination from '../../components/Pagination/Pagination'

import {
	selectorGalery,
	fetchGalery,
	removePicture,
} from '../../redux/slices/galery-slice'
import { Col, Row } from 'react-bootstrap'
const GaleriesListContainer = () => {
	const dispatch = useDispatch()
	const { galery, errors } = useSelector(selectorGalery)
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
		<Col>
			<GaleryList galery={galery} errors={errors} handleDelete={handleDelete} />
			<Row className="d-flex justify-content-center">
				<Pagination
					handlePageChange={handlePageChange}
					pages={galery?.pages}
					total={galery?.total}
				/>
			</Row>
		</Col>
	)
}

export default GaleriesListContainer
