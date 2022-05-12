const Modal = ({ id, handleUpdateImage }) => {
	return (
		<>
			<div
				className='modal fade'
				id='modalID'
				tabIndex='-1'
				aria-labelledby='modalImage'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Actualizar imagen</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form
								onSubmit={(e) => {
									e.preventDefault()
									const formData = new FormData(e.currentTarget)
									handleUpdateImage(formData)
								}}>
								<div>
									<label htmlFor='image' className='form-label'>
										Imagen* {id}
									</label>
									<input
										className='form-control'
										id='image'
										type='file'
										placeholder='image'
										name='image'
									/>
								</div>
								<div className='d-flex justify-content-center m-2'>
									<button type='submit' className='btn btn-primary'>
										Actualizar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
