import React from 'react';
import Navbar from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { getOrganization } from '../../services/organizationsServices';
const LayoutPublic = ({ children }) => {
	const [organization, setOrganization] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getOrganization(null);
				setOrganization(response.data.data);
			} catch (error) {
				alert(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			{organization && (
				<>
					<Navbar organization={organization}></Navbar>
					<main organization={organization}>{children}</main>
					<Footer organization={organization}></Footer>
				</>
			)}
		</>
	);
};

export default LayoutPublic;
