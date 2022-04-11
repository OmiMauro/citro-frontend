import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGalery, selectorGalery } from '../../redux/slices/galery-slice'
import { PhotoAlbum } from 'react-photo-album'
// import Image from './Image'
import Pagination from './Pagination'
import SigleImage from './SingleImage'
const ImageEvent = () => {
	const [pageOffset, setPageOffset] = useState(0)
	const [index, setIndex] = useState(0)
	/* /api/images?limit=${perPage}&page=${pageOffset + 1} */
	const dispatch = useDispatch()
	const { galery } = useSelector(selectorGalery)

	const [photos, setPhotos] = useState([])
	useEffect(() => {
		dispatch(fetchGalery())
		setPhotos(
			galery.map((item) => {
				return { src: item.image_id.url, width: 200, height: 502 }
			})
		)
	}, [pageOffset])
	const handlePageChange = (e) => {
		setPageOffset(e.selected)
	}

	return (
		<div className='container '>
			<h2 className='text-center'>Imágenes de nuestros eventos</h2>
			{photos && (
				<PhotoAlbum
					photos={photos}
					layout='columns'
					/* onClick={(event, photo, index) => {
							setIndex(index)
						}} */
				/>
			)}
			{/* {index && (
				<SigleImage images={galery} index={index} setIndex={setIndex} />
			)}
			<div className='m-0 row justify-content-center'>
				<div className='col-auto text-center'>
					<Pagination
						handlePageChange={handlePageChange}
						pageOffset={pageOffset}
					/>
				</div>
			</div> */}
		</div>
	)
}
export default ImageEvent
