import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../../redux/constants/action-types'
import { selectorMembers, fetchMembers } from '../../redux/slices/members-slice'
import './styles.css'
import { Row, Col, Card } from 'react-bootstrap'
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../Spinner/Spinner'
const SocialLink = ({ url, icon }) => (
	<a
		className="btn btn-dark btn-social mx-2"
		href={url}
		target="_blank"
		rel="noreferrer"
	>
		<FontAwesomeIcon icon={icon} />
	</a>
)
const Member = ({ member }) => (
	<Col lg={4} md={6}>
		<Card className="text-center h-100">
			<Card.Img
				variant="top"
				src={member.image_id.url}
				alt={member.name}
				className="mx-auto rounded-top-4  "
			/>
			<Card.Body>
				<Card.Title>
					{member.name} {member.lastname}
				</Card.Title>
				<div>
					{member.urlFacebook && (
						<SocialLink url={member.urlFacebook} icon={faFacebookF} />
					)}
					{member.urlInstagram && (
						<SocialLink url={member.urlInstagram} icon={faInstagram} />
					)}
					{member.phone && (
						<SocialLink
							url={`https://api.whatsapp.com/send?phone=${member.phone}&text=Hola ${member.name}.`}
							icon={faWhatsapp}
						/>
					)}
				</div>
			</Card.Body>
		</Card>
	</Col>
)
const Members = () => {
	const dispatch = useDispatch()
	const { members, status } = useSelector(selectorMembers)

	useEffect(() => {
		dispatch(fetchMembers())
	}, [])
	return (
		<Row className="bg-light py-5 ">
			<div className="text-center">
				<h2 className="section-heading text-uppercase">Organizadores</h2>
			</div>
			{status === STATUS.SUCCESSFUL && (
				<Row className="d-flex align-items-center justify-content-center">
					<div className="d-lg-flex justify-content-lg-around ">
						{members?.map((member) => (
							<Member key={member._id} member={member} />
						))}
					</div>
				</Row>
			)}
			{status === STATUS.ERROR && (
				<Col xs={12} lg={12}>
					<h3 className="text-center">Error al cargar los miembros</h3>
				</Col>
			)}
			{status === STATUS.LOADING && (
				<Col xs={12} lg={12}>
					<Spinner />
				</Col>
			)}
		</Row>
	)
}
export default Members
