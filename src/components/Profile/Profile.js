import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import './Alert.css'

const Profile = ({ user }) => {
	return (
		<>
			<section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
				<div className="container ">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col col-lg-6 mb-lg-0">
							<div className="card ">
								<div className="row g-0">
									<div className="col-md-4 gradient-custom text-center ">
										<img
											alt="Avatar"
											className="img-fluid my-5"
											src={
												user?.image_id?.url ||
												'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
											}
										/>
										<h5>
											{user?.name}, {user?.lastname}
										</h5>
										<Link to={`edit/${user._id}`}>
											<i className="fa fa-edit mb-5" />
											Editar
										</Link>
									</div>
									<div className="col-md-8">
										<div className="card-body p-4">
											<h6>Datos personales</h6>
											<hr className="mt-0 mb-4" />
											<div className="row pt-1">
												<div className="col-6 mb-3">
													<h6>DNI</h6>
													<p className="text-muted">{user?.DNI}</p>
												</div>
												<div className="col-6 mb-3">
													<h6>Fecha de Nacimiento</h6>
													<p className="text-muted">{user?.dateBirth}</p>
												</div>
												<div className="col-6 mb-3">
													<h6>Email</h6>
													<p className="text-muted">{user?.email}</p>
												</div>
												<div className="col-6 mb-3">
													<h6>Celular</h6>
													<p className="text-muted">{user?.phone}</p>
												</div>
											</div>
											<h6>Datos del Auto</h6>
											<hr className="mt-0 mb-4" />
											<div className="row pt-1">
												<div className="col-6 mb-3">
													<h6>Proximamente....</h6>
													<p className="text-muted">Lorem ipsum</p>
												</div>
												<div className="col-6 mb-3">
													<h6>Most Viewed</h6>
													<p className="text-muted">Dolor sit amet</p>
												</div>
											</div>
											{/* <div className='d-flex justify-content-start'>
                      <a href='#!'>
                        <i className='fab fa-facebook-f fa-lg me-3'></i>
                      </a>
                      <a href='#!'>
                        <i className='fab fa-twitter fa-lg me-3'></i>
                      </a>
                      <a href='#!'>
                        <i className='fab fa-instagram fa-lg'></i>
                      </a>
                    </div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Profile

Profile.propTypes = {
	user: PropTypes.object,
}
