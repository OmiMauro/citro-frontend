import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PhotoAlbum } from 'react-photo-album'
// import Image from './Image'
import Pagination from './Pagination'
import SigleImage from './SingleImage'
import { getGalery } from '../../services/galeryServices'
const ImageEvent = () => {
	const [images, setImages] = useState([])
	const [pageOffset, setPageOffset] = useState(0)
	const [index, setIndex] = useState(0)
	/* /api/images?limit=${perPage}&page=${pageOffset + 1} */
	useEffect(() => {
		const fetchImages = async () => {
			const response = await getGalery()
			console.log(response.data.data)
			setImages(response.data.data)
		}
		fetchImages()
	}, [pageOffset])

	const handlePageChange = (e) => {
		setPageOffset(e.selected)
	}
	return (
		<div className='container '>
			<h2 className='text-center'>Imágenes de nuestros eventos</h2>
			<div className='row'>
				{images && (
					<PhotoAlbum
						photos={images.image_id.url}
						layout='rows'
						onClick={(event, photo, index) => {
							setIndex(index)
						}}
					/>
				)}
			</div>
			{console.log(images)}
			{index && (
				<SigleImage images={images} index={index} setIndex={setIndex} />
			)}
			<div className='m-0 row justify-content-center'>
				<div className='col-auto text-center'>
					<Pagination
						handlePageChange={handlePageChange}
						pageOffset={pageOffset}
					/>
				</div>
			</div>
		</div>
	)
}
export default ImageEvent
