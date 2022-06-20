import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
import './event.css'

const Event = ({ event, errors }) => {
	return (
		<>
			<section className="row">
				<div className="col-md-12 col-lg-6">
					<div className="card-box">
						<div className="card-thumbnail d-flex justify-content-center">
							<img src={event?.image_id?.url} className="img-fluid " alt="" />
						</div>
						<h3 className="text-center mt-2 text-dark text-uppercase">
							{event?.name}
						</h3>
						<p className="text-secondary">{event?.description}</p>
						<div>
							<h6>
								Fecha:
								{event?.dates?.map((day) => {
									const date = new Date(day).toLocaleDateString()
									return <span> - {date}</span>
								})}
							</h6>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Event
