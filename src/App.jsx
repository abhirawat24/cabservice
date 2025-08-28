import { FaWhatsapp } from 'react-icons/fa'
import './App.css'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Vehicles from './components/Vehicles'
import Locations from './components/Locations'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect } from 'react'

function App() {

  return (
    <>
    <Preloader/>
    <div className='relative'>
    <Navbar/>
    <HeroSection/>
    <Vehicles/>
    <Locations/>
    <About/>
    <Contact/>
    <Footer/>

    <div className="fixed right-6 bottom-6">
  <a
    href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+am+interested+in+booking+a+ride+with+NainitalCabs.+Can+you+please+share+the+available+options+and+pricing%3F&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
  >
    <FaWhatsapp className="text-2xl" />
    <span className="hidden lg:block text-sm font-medium">Chat on WhatsApp</span>
  </a>
</div>


    </div>
    </>
  )
}

export default App
