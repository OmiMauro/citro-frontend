import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CustomTable = ({ columns, data, className, renderRowActions }) => {
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{column.header}</th>
					))}
					{renderRowActions && <th>Actions</th>}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map((column, colIndex) => (
							<td key={colIndex}>{row[column.accessor]}</td>
						))}
						{renderRowActions && <td>{renderRowActions(row)}</td>}
					</tr>
				))}
			</tbody>
		</Table>
	)
}

CustomTable.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			header: PropTypes.string.isRequired,
			accessor: PropTypes.string.isRequired,
		})
	).isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
	renderRowActions: PropTypes.func,
}
export default CustomTable
