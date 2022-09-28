import { Link } from 'react-router-dom'
const Inscription = ({ inscription, errors, status, user }) => {
	const { _eventId, _orderId } = inscription
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
							{user?.name}
						</p>
						<p>
							<strong className="text-uppercase">Apellido: </strong>
							{user?.lastname}
						</p>
						<p>
							<strong className="text-uppercase">DNI: </strong>
							{user?.DNI}
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
							{_orderId?.status_detail}
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
							{_orderId?.transaction_amount}
						</p>
						<a
							className="text-uppercase mx-auto btn btn-outline-primary"
							href={_orderId?.init_point}
						>
							Pagar
						</a>
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

/* 

	<ul className="list-unstyled list-inline mb-0">
						<li className="list-inline-item me-0">
							<i className="fas fa-star text-warning fa-xs"> </i>
						</li>
						<li className="list-inline-item me-0">
							<i className="fas fa-star text-warning fa-xs"></i>
						</li>
						<li className="list-inline-item me-0">
							<i className="fas fa-star text-warning fa-xs"></i>
						</li>
						<li className="list-inline-item me-0">
							<i className="fas fa-star text-warning fa-xs"></i>
						</li>
						<li className="list-inline-item">
							<i className="fas fa-star-half-alt text-warning fa-xs"></i>
						</li>
						<li className="list-inline-item">
							<p className="text-muted">4.5 (413)</p>
						</li>
					</ul>*/
/* 
<section className="wrapper">
    <div class="container-fostrap">
        <div>
            <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" class="fostrap-logo"/>
            <h1 class="heading">
                Bootstrap Card Responsive 
            </h1>
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                            <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> Bootstrap 3 Carousel FadeIn Out Effect
                                  </a>
                                </h4>
                                <p class="">
                                    Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html"> Material Design Responsive Menu
                                  </a>
                                </h4>
                                <p class="">
                                    Material Design is a visual programming language made by Google. Language programming...
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                  </a>
                                </h4>
                                <p class="">
                                    tutorials button hover animation, although very much a hover button is very beauti...
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

*/
