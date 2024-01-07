import React from 'react'
import { Form, Col, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const SelectInput = ({
	icon,
	label,
	name,
	id,
	errors,
	value,
	handleChange,
	options,
	placeholder,
}) => {
	return (
		<Form.Group id={id || name} as={Col} className="mb-3">
			{label && (
				<Form.Label className="text-start d-flex justify-content-start align-items-center">
					{label}
				</Form.Label>
			)}

			<InputGroup className="mb-3">
				{icon && (
					<InputGroup.Text id={label}>
						<FontAwesomeIcon icon={icon} className="fa-icon" />
					</InputGroup.Text>
				)}
				<Form.Select
					name={name}
					value={value}
					onChange={handleChange}
					className="text-start"
					aria-label={placeholder}
				>
					<option hidden>{placeholder}</option>
					{options?.map((option) => (
						<option value={option.value} key={option.key || option.value}>
							{option.label}
						</option>
					))}
				</Form.Select>
			</InputGroup>
			{errors && errors[name] && (
				<div className="text-danger">{errors[name]}</div>
			)}
		</Form.Group>
	)
}

export { SelectInput }
