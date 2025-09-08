import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Famous from './components/Famous'
import About from './components/About'
import Footer from './components/Footer.jsx'


function App() {


  return (
    <>
    <div className='bg-[#1d4e1a] '>
      {/* <Header/> */}
      <Hero/>
    </div>
    <div className='bg-[#FFECB8]'>
      <Menu/>
      <Famous/>
      <About/>
    </div>
    <div className='bg-[#1d4e1a]'>
      {/* <Footer/> */}
    </div>
    
      
    </>
  )
}

export default App
