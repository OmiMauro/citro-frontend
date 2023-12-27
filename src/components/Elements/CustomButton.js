import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
const CustomButton = ({
	label,
	isLoading = false,
	spinnerSize = 'sm',
	children,
	onClick,
	...props
}) => {
	return (
		<Button {...props} onClick={onClick} disabled={isLoading || props.disabled}>
			{isLoading ? (
				<>
					<Spinner
						as="span"
						animation="border"
						size={spinnerSize}
						role="status"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Loading...</span>
				</>
			) : (
				<>{children || label}</>
			)}
		</Button>
	)
}
CustomButton.propTypes = {
	label: PropTypes.string,
	isLoading: PropTypes.bool,
	spinnerSize: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
}

export default CustomButton
