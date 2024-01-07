import { Link } from 'react-router-dom'
const Inscription = ({ inscription, errors, status }) => {
	const { _eventId, _orderId, _userId } = inscription
	return (
		<section className="mx-auto" style={{ maxWidth: '50rem' }}>
			<div className="card">
				<div className="card-body">
					<h3 className="card-title font-weight-bold text-uppercase">
						{_eventId?.name}
					</h3>
					<h6>
						{_eventId?.locality}, {_eventId?.province}, {_eventId?.country}
					</h6>

					<hr className="my-4" />
					<h6 className="lead text-uppercase">
						<strong>Estado de la Inscripcion</strong>
					</h6>
					<div className="text-start">
						<p>
							<strong className="text-uppercase">Nombre: </strong>
							{_userId?.name}
						</p>
						<p>
							<strong className="text-uppercase">Apellido: </strong>
							{_userId?.lastname}
						</p>
						<p>
							<strong className="text-uppercase">DNI: </strong>
							{_userId?.DNI}
						</p>
						<p>
							<strong className="text-uppercase">Celular: </strong>
							{_userId?.phone}
						</p>

						<p>
							<strong className="text-uppercase">Localidad: </strong>
							{inscription?.locality}
						</p>
						<p>
							<strong className="text-uppercase">Provincia: </strong>
							{inscription?.province}
						</p>
					</div>
					<hr className="my-4" />
					<h6 className="lead text-uppercase">
						<strong>Estado del Pago</strong>
					</h6>
					<div className="text-start">
						<p>
							<strong className="text-uppercase">Codigo de referencia: </strong>
							{_orderId?.external_reference}
						</p>
						<p>
							<strong className="text-uppercase">Estado: </strong>
							{_orderId?.status === 'pending'
								? 'Pendiente'
								: _orderId?.status === 'rejected'
								? 'Rechazado'
								: 'Aprobado'}
						</p>
						<p>
							<strong className="text-uppercase">Detalle del Pago: </strong>
							{_orderId?.status_detail === 'accredited'
								? 'Acreditado'
								: _orderId?.status_detail}
						</p>
						<p>
							<strong className="text-uppercase">Tipo de operación: </strong>
							{_orderId?.operation_type}
						</p>
						<p>
							<strong className="text-uppercase">Nombre del Resumen: </strong>
							{_orderId?.statement_descriptor}
						</p>
						<p>
							<strong className="text-uppercase">Tipo de pago: </strong>
							{_orderId?.payment_method_id}
						</p>
						<p>
							<strong className="text-uppercase">Precio: </strong> $
							{inscription?.unitPrice}
						</p>
						{_orderId?.status !== 'approved' && (
							<a
								className="text-uppercase mx-auto btn btn-outline-primary"
								href={_orderId?.init_point}
							>
								Pagar
							</a>
						)}
					</div>

					<Link
						to="/backoffice/inscriptions"
						className="btn btn-link link-secondary p-md-1 mb-0"
					>
						Volver
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Inscription
