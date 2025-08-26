import { FaWhatsapp } from 'react-icons/fa'
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Register from './components/Register'
import About from './components/About'
import { useEffect } from 'react'

function App() {

  return (
    <>
    <div className='relative'>
    <Navbar/>
    <HeroSection/>
    <About/>
    {/* <Register/> */}
    <Footer/>

    <div className='right-10 bottom-20 bg-green-500 rounded-sm fixed text-4xl flex justify-center items-center gap-2 text-amber-50'>
      <a 
  href="https://api.whatsapp.com/send/?phone=918077072905&text=Hi%21+I%27m+interested+in+booking+a+ride+with+NainitalCabs.+Please+share+the+available+options.%EF%BF%BD&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
>

      <FaWhatsapp />
</a>
      <span className='text-sm hidden lg:block'>Whatsapp</span>
    </div>
    </div>
    </>
  )
}

export default App
