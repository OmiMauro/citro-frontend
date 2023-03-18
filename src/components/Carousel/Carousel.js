import { useSelector, useDispatch } from 'react-redux'
import { selectorSlides, fetchSlides } from '../../redux/slices/slides-slice'
import React, { useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { STATUS } from '../../redux/constants/action-types'
import './styles.css'

const Carousel = () => {
	const dispatch = useDispatch()
	const { slides, status } = useSelector(selectorSlides)

	useEffect(() => {
		dispatch(fetchSlides())
	}, [])

	return (
		<>
			{status === STATUS.SUCCESSFUL && (
				<div
					className="carousel slide"
					data-bs-ride="carousel"
					data-bs-interval="5000"
					id="carousel"
				>
					<div className="carousel-inner">
						{slides?.map((item, index) => (
							<div
								className={`carousel-item carousel-container ${
									index === 0 ? 'active' : ''
								}`}
								key={item._id}
								data-bs-interval="5000"
							>
								<img
									className="img-fluid w-100 carousel-img"
									src={item.image_id?.url}
									alt={item.text}
									key={item._id}
								/>
							</div>
						))}
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="prev"
							href="#"
							role="button"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carousel"
							data-bs-slide="next"
							href="#"
							role="button"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			)}
			{status === STATUS.PENDING && (
				<div className="d-flex justify-content-center ">
					<div className="spinner-border text-secondary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
		</>
	)
}

export default Carousel
