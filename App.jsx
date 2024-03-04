import './App.css'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {Services} from './Services'
import {Login} from './Login'
import { Navbar } from './Navbar'


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
