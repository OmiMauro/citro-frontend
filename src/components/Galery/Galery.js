import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PhotoAlbum } from 'react-photo-album'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import { fetchGalery, selectorGalery } from '../../redux/slices/galery-slice'
import Pagination from '../Pagination/Pagination'

const ImageEvent = () => {
	const dispatch = useDispatch()
	const { galery } = useSelector(selectorGalery)

	const { limit, pages, page } = galery || {}
	useEffect(() => {
		dispatch(fetchGalery())
	}, [])
	useEffect(() => {
		if (!galery) {
			dispatch(fetchGalery(page))
		}
	}, [dispatch, galery, page])

	const [lightbox, setLightbox] = useState({
		photoIndex: 0,
		openLightbox: false,
	})

	useEffect(() => {
		setLightbox((prevLightbox) => ({
			...prevLightbox,
			photoIndex: prevLightbox.photoIndex % galery.limit,
		}))
	}, [limit])

	const handlePageChange = (selectedPage) => {
		dispatch(fetchGalery(selectedPage))
	}

	const getNextIndex = (currentIndex) => {
		return (parseInt(currentIndex) + 1) % limit
	}

	const getPrevIndex = (currentIndex) => {
		console.log(currentIndex)
		return (parseInt(currentIndex) + limit - 1) % limit
	}
	const openLightboxAtIndex = (index) => {
		setLightbox({ photoIndex: index, openLightbox: true })
	}
	const closeLightbox = () => {
		setLightbox({ photoIndex: 0, openLightbox: false })
	}

	const movePrevLightbox = () => {
		if (lightbox.photoIndex === 0 && parseInt(page) > 1) {
			dispatch(fetchGalery(parseInt(page) - 1))
			setLightbox({ photoIndex: limit - 1, openLightbox: true })
		} else {
			setLightbox((prevLightbox) => ({
				...prevLightbox,
				photoIndex: getPrevIndex(lightbox.photoIndex),
				openLightbox: true,
			}))
		}
	}
	const moveNextLightbox = () => {
		if (lightbox.photoIndex + 1 == limit && parseInt(page) + 1 <= pages) {
			dispatch(fetchGalery(parseInt(page) + 1))
			setLightbox({ photoIndex: 0, openLightbox: true })
		} else {
			setLightbox((prevLightbox) => ({
				...prevLightbox,
				photoIndex: getNextIndex(prevLightbox.photoIndex),
				openLightbox: true,
			}))
		}
	}

	return (
		<>
			<div className="container ">
				<h2 className="text-center py-5 text-uppercase">Algunas imagenes...</h2>
				<div>
					<PhotoAlbum
						photos={galery.docs?.map((item) => ({
							src: item.image_id.secure_url,
							width: item.image_id.width || 200,
							height: item.image_id.height || 200,
						}))}
						layout="rows"
						onClick={(event, photo, index) => {
							openLightboxAtIndex(index)
						}}
					/>
					<div className="m-0 row justify-content-center mt-2">
						{lightbox.openLightbox && (
							<Lightbox
								mainSrc={galery.docs[lightbox.photoIndex]?.image_id.secure_url}
								nextSrc={
									galery.docs[getNextIndex(lightbox.photoIndex)]?.image_id
										.secure_url
								}
								prevSrc={
									galery.docs[getPrevIndex(lightbox.photoIndex)]?.image_id
										.secure_url
								}
								onCloseRequest={closeLightbox}
								onMovePrevRequest={movePrevLightbox}
								onMoveNextRequest={moveNextLightbox}
							/>
						)}

						<div className="col-auto text-center">
							<Pagination
								handlePageChange={handlePageChange}
								pages={pages}
								itemsPerPage={limit}
								page={page}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ImageEvent
