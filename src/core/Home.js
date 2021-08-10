import Nav from './Nav'
import Header from './Header'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Inscription from './Inscription'
import Team from './Team'
import Modals from './Modals'
import Footer from './Footer'
const Home = () => {
  return (

    <div className='App' id='page-top'>
      <Nav />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Inscription />
      <Modals />
      <Footer />
    </div>

  )
}

export default Home
