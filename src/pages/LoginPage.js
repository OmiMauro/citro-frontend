import Login from '../components/Auth/Login'
import LayoutPublic from '../components/LayoutPublic/LayoutPublic'

const LoginPage = (props) => {
	return (
		<LayoutPublic organization={props.organization}>
			<Login></Login>
		</LayoutPublic>
	)
}

export default LoginPage
