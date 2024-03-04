import './App.css'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Services} from './pages/Services'
import {Login} from './pages/Login'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
