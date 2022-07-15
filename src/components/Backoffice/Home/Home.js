import { linksUser, linksAdmin } from '../SideNav/Links'
import { selectorAuth } from '../../../redux/slices/auth-slice'
import { useSelector } from 'react-redux'

const Home = () => {
	const { user } = useSelector(selectorAuth)

	return (
		<section className="container">
			<div className="">
				<div className="row">
					{user.roleId === 2 &&
						linksAdmin.map((item, index) => {
							return (
								<div className="col-xl-3 col-md-6 mb-4" key={index}>
									<div className="card border-left-primary shadow h-100 py-2">
										<div className="card-body">
											<div className="row no-gutters align-items-center">
												{item}
											</div>
										</div>
									</div>
								</div>
							)
						})}
					{user.roleId === 1 &&
						linksUser.map((item, index) => {
							return (
								<div className="col-xl-3 col-md-6 mb-4" key={index}>
									<div className="card border-left-primary shadow h-100 py-2">
										<div className="card-body">
											<div className="row no-gutters align-items-center">
												{item}
											</div>
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}

export default Home
