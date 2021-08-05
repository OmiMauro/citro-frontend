import './App.css'
import './scripts.js'
import './styles.css'
import Nav from './core/Nav'
import Header from './core/Header'
import Services from './core/Services'
import Portfolio from './core/Portfolio'
import About from './core/About'
import Inscription from './core/Inscription'
import Team from './core/Team'
import Modals from './core/Modals'
import Footer from './core/Footer'
function App () {
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

export default App
