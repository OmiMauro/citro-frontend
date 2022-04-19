import Navbar from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const LayoutPublic = () => {
	return (
		<>
			<div className='App'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default LayoutPublic
