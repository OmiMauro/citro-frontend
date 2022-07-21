import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectorAuth } from '../../redux/slices/auth-slice'
import { fetchUserById, selectorUsers } from '../../redux/slices/users-slice'

import Home from '../../components/Backoffice/Home/Home'

const Backoffice = () => {
	const { user } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserById(user.userId))
	}, [dispatch])

	return (
		<>
			<div className="col">
				<Home />
			</div>
		</>
	)
}

export default Backoffice
