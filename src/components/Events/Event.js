import { STATUS } from '../../redux/constants/action-types'
import DangerousSetInnerHTML from '../DangerousSetInnerHTML/DangerousSetInnerHTML'
import Spinner from '../Spinner/Spinner'

import { Row, Col, Image, Table, Card, Container } from 'react-bootstrap'

const formatDate = (dateString) =>
	new Date(dateString).toLocaleDateString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

const ErrorDisplay = ({ errors }) => (
	<Row>
		{errors?.map(
			(err, index) =>
				err.msg &&
				!err.param && (
					<Alert key={index} variant="danger" className="text-center">
						{err.msg}
					</Alert>
				)
		)}
	</Row>
)
const EventDetails = ({ event }) => (
	<Row>
		<Col>
			<h1 className="text-center mt-3 text-dark text-uppercase fw-bold">
				{event?.name}
			</h1>
			<Image src={event?.image_id?.url} className="img-fluid my-3" alt="" />
			<div className="text-center my-3">
				<DangerousSetInnerHTML content={event?.description} />
			</div>
			<div className="text-center my-3">
				<h3 className="text-uppercase text-black">
					<span className="fw-bold">Fecha/s:</span>
					{event?.dates?.map((day, index) => (
						<p key={index}> - {formatDate(day)}</p>
					))}
				</h3>
			</div>
		</Col>
		{event.chronogram?.length > 0 && (
			<Chronogram chronogram={event.chronogram} />
		)}
	</Row>
)

const ChronogramItem = ({ item }) => (
	<tr>
		<td>{formatDate(item.day)}</td>
		<td>
			<DangerousSetInnerHTML content={item?.times} />
		</td>
	</tr>
)
const Chronogram = ({ chronogram }) => (
	<Card className="my-4">
		<Card.Header as="h3" className="text-center text-uppercase fw-bolder">
			Cronograma de Actividades
		</Card.Header>
		<Card.Body>
			<Table responsive hover>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Actividades</th>
					</tr>
				</thead>
				<tbody>
					{chronogram.map((item) => (
						<ChronogramItem key={item._id} item={item} />
					))}
				</tbody>
			</Table>
		</Card.Body>
	</Card>
)
const Event = ({ event, errors, status, msg }) => {
	if (status === STATUS.FAILED) {
		return <ErrorDisplay errors={errors} />
	}
	if (status === STATUS.PENDING) {
		return <Spinner />
	}
	if (status === STATUS.SUCCESSFUL) {
		return <EventDetails event={event} />
	}
	return null
}

export default Event
