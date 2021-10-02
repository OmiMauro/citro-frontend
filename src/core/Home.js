import Nav from './Nav'
import Header from './Header'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Inscription from './Inscription'
import Team from './Team'
import Modals from './Modals'
import Footer from './Footer'
import Description from './Description'
import Information from './Information'
const Home = () => {
  return (
    <div className='App' id='page-top'>
      <Nav />
      <Header />
      <Description />
      <Services />
      <Portfolio />
      <About />
      <Information />
      <Inscription />
      <Team />
      <Modals />
      <Footer />
    </div>
  )
}

export default Home
