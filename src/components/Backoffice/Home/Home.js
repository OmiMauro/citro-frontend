import { linksUser, linksAdmin } from '../SideNav/Links'
import { selectorAuth } from '../../../redux/slices/auth-slice'
import { useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
const Home = () => {
	const { user } = useSelector(selectorAuth)

	return (
		<Row>
			{(user.roleId === 2 ? linksAdmin : linksUser).map((item, index) => (
				<Col md={6} xl={4} key={index} className="mb-4">
					<Card className="border-left-primary shadow py-2">
						<Card.Body>
							<Row className="no-gutters align-items-center">
								<Col>{item}</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default Home
