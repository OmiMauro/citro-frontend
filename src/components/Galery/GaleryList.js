import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faPlus,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import CustomTable from '../Table/Table'
const GaleryList = ({ galery, handleDelete }) => {
	const columns = [
		{ header: 'Imagen', accessor: 'image' },
		{ header: 'URL', accessor: 'url' },
		{ header: 'Ancho', accessor: 'width' },
		{ header: 'Alto', accessor: 'height' },
	]

	const data =
		galery?.docs?.map((picture) => ({
			image: (
				<img
					alt={picture?._id}
					width={'120px'}
					className="img-table rounded mx-auto d-block"
					src={picture?.image_id.secure_url}
				/>
			),
			url: (
				<a
					href={picture?.image_id.secure_url}
					target={'_blank'}
					className="mt-3 text-dark"
				>
					{picture?.image_id.secure_url}
				</a>
			),
			width: picture?.image_id.width,
			height: picture?.image_id.height,
		})) || []

	const renderRowActions = (row) => (
		<button className="btn btn-danger" onClick={() => handleDelete(row._id)}>
			<FontAwesomeIcon icon={faTrashAlt} className="mr-3" size="lg" />
		</button>
	)
	return (
		<>
			<h4 className="text-uppercase">
				<Link to={`/backoffice/`}>
					<FontAwesomeIcon icon={faArrowLeft} className="mx-3" />
				</Link>
				Lista de imagenes
				<Link to={`/backoffice/galery/create`}>
					<FontAwesomeIcon icon={faPlus} className="mx-3" />
				</Link>
			</h4>

			<div className="table-responsive m-2">
				{data.length > 0 ? (
					<CustomTable
						columns={columns}
						data={data}
						renderRowActions={renderRowActions}
					/>
				) : (
					<div className="text-center my-4">No hay imágenes para mostrar.</div>
				)}
			</div>
		</>
	)
}

export default GaleryList
