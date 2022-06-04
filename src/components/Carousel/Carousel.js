import { useSelector, useDispatch } from 'react-redux'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import React, { useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { STATUS } from '../../redux/constants/action-types'
// import './styles.css'

const Carousel = () => {
  const dispatch = useDispatch()
  const { slides, status } = useSelector(selectorSlides)

  useEffect(() => {
    dispatch(fetchSlides())
  }, [])

  return (
    <>
      {status === STATUS.SUCCESSFUL && (
        <div className='carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner'>
            {slides?.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={item._id}
              >
                <img
                  className='d-block w-100'
                  src={item.image_id?.url}
                  alt={item.text}
                  key={item._id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {status === STATUS.PENDING && (
        <div className='d-flex justify-content-center '>
          <div className='spinner-border text-secondary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Carousel
