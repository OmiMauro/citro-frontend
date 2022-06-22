import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
import './event.css'
import image1 from './image1.jpg'
import image2 from './image2.jpg'

const Event = ({ event, errors }) => {
	return (
		<>
			<section className="col-12">
				<div className="row">
					<img src={event?.image_id?.url} className="img-fluid " alt="" />
					<h1 className="text-center mt-2 text-dark text-uppercase fw-bold">
						{event?.name}
					</h1>
					<div className="text-center mb-5">
						<DangerousSetInnerHTML
							content={event?.description}
							key={event?._id}
						></DangerousSetInnerHTML>
					</div>

					<div className="mb-5 ">
						<h3 className="text-uppercase text-center text-black">
							<span className="fw-bold">Fecha/s:</span>
							{event?.dates?.map((day) => {
								const date = new Date(day).toLocaleDateString()
								return <p className=""> - {date}</p>
							})}
						</h3>
					</div>
				</div>

				<article className="row">
					<div className="section-heading text-uppercase text-center">
						<h3 className="section-heading text-uppercase fw-bolder">
							Cronograma de Actividades
						</h3>
						<h6 className="section-subheading text-muted mb-5">
							Todos los horarios son estimativos
						</h6>
					</div>
					<ul className="timeline">
						{event?.chronogram?.map((chronogram, index) => {
							const day = new Date(chronogram?.day)
							return (
								<li
									key={chronogram?._id}
									className={index % 2 === 1 ? 'timeline-inverted' : ''}
								>
									<div className="timeline-image">
										<img
											className="rounded-circle img-fluid"
											src={index % 2 === 1 ? image1 : image2}
											alt="..."
										/>
									</div>
									<div className="timeline-panel text-center">
										<div className="timeline-heading">
											<h6 className="text-uppercase text-black-100 fw-bold">
												{day.toLocaleDateString('es-AR', {
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												})}
											</h6>
										</div>
										<div className="timeline-body">
											<ul className="text-muted text-start list-unstyled">
												<DangerousSetInnerHTML
													content={chronogram?.times}
												></DangerousSetInnerHTML>
											</ul>
											<p className="text-start fw-bold">
												<a
													href="https://goo.gl/maps/KwLyebsEL4PFHwqZ6"
													target="_blank"
													rel="noreferrer"
												>
													Recorrido en Google Maps
												</a>
											</p>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</article>
			</section>
		</>
	)
}

export default Event
