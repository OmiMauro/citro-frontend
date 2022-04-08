import Spinner from '../Spinner/Spinner'
import PropTypes from 'prop-types'
const StausHandler = ({ status }) => {
	if (status === 'PENDING') {
		return (
			<div className='container'>
				<Spinner />
			</div>
		)
	} else if (status === 'FAILED') {
		return (
			<div class='alert alert-danger' role='alert'>
				Ocurrió un error. Por favor, intente nuevamente.
			</div>
		)
	} else {
		return null
	}
}

StausHandler.propTypes = {
	status: PropTypes.string
}
export default StausHandler
