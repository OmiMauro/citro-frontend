import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

// import Image from './Image'
import Lightbox from 'react-image-lightbox'

const ImageEvent = () => {
  const perPage = 20
  const [images, setImages] = useState([])
  const [pageCount, setPageCount] = useState(20)
  const [pageOffset, setPageOffset] = useState(0)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchtImage = async () => {
      const response = await axios({
        method: 'GET',
        url: `/api/images?limit=${perPage}&page=${pageOffset + 1}`
      })
      if (response.status === 200) {
        setImages(response.data.images)
      }
    }
    fetchtImage()
  }, [pageOffset, perPage])

  const handlePageChange = e => {
    setPageOffset(e.selected)
  }
  return (
    <div className='container '>
      <h2 className='text-center'>Imágenes del Evento</h2>
      <div className='row'>
        {images && images.map((image, index) => {
          return (
            <div key={image.id} className='col-lg-4 col-md-4 col-sm-6 col-6 col-xs-12 thumb'>
              <img
                className='img-thumbnail img-fluid zoom'
                src={image.url}
                alt='citroen'
                onClick={() => {
                  setIsOpen(true)
                  setPhotoIndex(index)
                }}
              />

            </div>
          )
        })}
      </div>

      <div className='m-0 row justify-content-center'>
        <div className='col-auto text-center'>

          <ReactPaginate
            previousLabel='Anterior'
            nextLabel='Siguiente'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName='pagination'
            activeClassName='active'
            forcePage={pageOffset}
          />
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].url}
            nextSrc={images[(photoIndex + 1) % images.length].url}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div>
    </div>
  )
}
export default ImageEvent
