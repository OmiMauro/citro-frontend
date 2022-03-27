import React from 'react';
import Navbar from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const LayoutPublic = ({ children }) => {
	return (
		<>
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
};

export default LayoutPublic;
