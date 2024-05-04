
import './App.scss'
import Header from './Components/Header/Header.jsx'
import Section from './Components/Section/Section.jsx'
import Aside from './Components/Aside/Aside.jsx'
import Phone from './Components/Phone/Phone.jsx'
import Alerts from './Components/Alerts/Alerts.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Mils from './Components/Mils/Mils.jsx'

function App() {


  return (
    <>
    <Header/>
    <Section/>
    <Aside/>
    <Phone/>
    <Alerts/>
    <Footer/>
    <Mils/>
      <div className='app'></div>
    </>
  )
}

export default App
