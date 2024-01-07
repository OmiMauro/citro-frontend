import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PhotoAlbum } from 'react-photo-album'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import { fetchGalery, selectorGalery } from '../../redux/slices/galery-slice'
import Pagination from '../Pagination/Pagination'
import { Container, Row } from 'react-bootstrap'

const ImageEvent = () => {
	const dispatch = useDispatch()
	const { galery } = useSelector(selectorGalery)
	const { limit, pages, page, docs } = galery || {}
	useEffect(() => {
		dispatch(fetchGalery(page || 1))
	}, [dispatch, page])

	const [lightboxIndex, setLightboxIndex] = useState(null)

	const openLightboxAtIndex = (index) => setLightboxIndex(index)
	const closeLightbox = () => setLightboxIndex(null)

	const movePrevLightbox = () => {
		setLightboxIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : limit - 1))
	}

	const moveNextLightbox = () => {
		setLightboxIndex((prevIndex) => (prevIndex + 1) % limit)
	}

	const handlePageChange = ({ selected }) => {
		dispatch(fetchGalery(selected + 1))
	}

	const photos = docs?.map((item) => ({
		src: item.image_id.secure_url,
		width: item.image_id.width || 200,
		height: item.image_id.height || 200,
	}))

	return (
		<Container>
			<h2 className="text-center py-5 text-uppercase">Algunas imagenes...</h2>
			<PhotoAlbum
				photos={photos}
				layout="rows"
				onClick={(event, photo, index) => openLightboxAtIndex(index)}
			/>
			{lightboxIndex !== null && (
				<Lightbox
					mainSrc={docs[lightboxIndex]?.image_id.secure_url}
					nextSrc={docs[(lightboxIndex + 1) % limit]?.image_id.secure_url}
					prevSrc={
						docs[(lightboxIndex + limit - 1) % limit]?.image_id.secure_url
					}
					onCloseRequest={closeLightbox}
					onMovePrevRequest={movePrevLightbox}
					onMoveNextRequest={moveNextLightbox}
					onImageLoad={() => console.log('loaded')}
				/>
			)}
			<Row className="justify-content-center mt-2">
				<div className="col-auto text-center">
					<Pagination
						handlePageChange={handlePageChange}
						pages={pages}
						itemsPerPage={limit}
						page={page}
					/>
				</div>
			</Row>
		</Container>
	)
}

export default ImageEvent
