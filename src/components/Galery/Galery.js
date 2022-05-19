import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PhotoAlbum } from 'react-photo-album'

import { fetchGalery, selectorGalery } from '../../redux/slices/galery-slice'
import Pagination from '../Pagination/Pagination'
import { STATUS } from '../../redux/constants/action-types'

const ImageEvent = () => {
	const [values, setValues] = useState({
		page: 1,
		indexPagination: '',
		photos: []
	})
	const [ligthbox, setLigthbox] = useState({
		currentImage: '',
		indexImage: 1,
		openLightbox: false
	})

	const { page, indexPagination, photos } = values

	const dispatch = useDispatch()
	const { galery, status, errors } = useSelector(selectorGalery)

	useEffect(() => {
		dispatch(fetchGalery(page))
	}, [page, dispatch])

	useEffect(() => {
		setValues({
			...values,
			photos: galery?.docs?.map((item) => {
				return {
					src: item.image_id.secure_url,
					width: item.image_id.width || 200,
					height: item.image_id.height || 200
				}
			})
		})
	}, [galery])

	const handlePageChange = (e) => {
		setValues({ ...values, page: e.selected + 1 })
	}

	return (
		<>
			<div className='container '>
				<h2 className='text-center py-5 text-uppercase'>
					Imágenes de nuestros eventos
				</h2>

				{status === STATUS.SUCCESSFUL && (
					<div>
						<PhotoAlbum photos={photos} layout='rows' />
						<div className='m-0 row justify-content-center mt-2'>
							<div className='col-auto text-center'>
								<Pagination
									handlePageChange={handlePageChange}
									total={galery.total}
									pages={galery.pages}
								/>
							</div>
						</div>
					</div>
				)}
				{status === STATUS.PENDING && (
					<div className='d-flex justify-content-center '>
						<div className='spinner-grow text-secondary ' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
export default ImageEvent
