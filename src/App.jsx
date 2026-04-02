
import './App.css'
import Banner from './Components/Banner/Banner'
import CallBanner from './Components/CallBanner/CallBanner'
import Counter from './Components/Counter/Counter'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import PremiumTools from './Components/Premium-Tools/PremiumTools'
import Pricing from './Components/Pricing/Pricing'
import Steps from './Components/Steps/Steps'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <PremiumTools></PremiumTools>
      <Steps></Steps>
      <Pricing></Pricing>
      <CallBanner></CallBanner>
      <Footer></Footer>
              <ToastContainer />

    </>
    
  )
}

export default App
