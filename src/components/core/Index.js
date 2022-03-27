import Nav from './Nav';
import Header from './Carousel';
import About from './Activities';
// import Inscription from './Inscription'
import ImageEvent from './Galery';
import Team from './Members';
import Footer from './Footer';
import Description from './AboutUs';
const Home = () => {
	return (
		<div className='App' id='page-top'>
			<Nav />
			<Header />
			<Description />
			{/*  <Services /> */}
			<ImageEvent />
			<About />
			<Inscription /> */}
			<Team />
			<Footer />
		</div>
	);
};

export default Home;
