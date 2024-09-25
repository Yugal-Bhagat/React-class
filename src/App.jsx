import React from 'react'
// import './App.css'
import Count from './Count'
import Clock from './clock'
import Input from './Input'
import ToList from './ToList'
import UseEffect from './UseEffect'
import ApiUseEffect from './ApiUseEffect'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BootstrapNav from './BootstrapNav'
import BootstrapCarousel from './BootstrapCarousel'
import ApiDog from './ApiDog'
import InputControl from './InputControl'
import Login from './Login'
import SignUP from './SignUp'
const App = () => {
  // let arr = [1, 2, 3, 4, 5]
  // let a = 5
  // let b = 2
  return (
    <>
      {/* <div id='box' className='container'> */}
      {/* <h1>heloo</h1> */}
      {/* <p>heee</p> */}

      {/* <Home data1 ={{a,b}}  data2 ={b} /> */}
      {/* {
          arr.map((a)=>{
            return (
              <>
              <li>{a}</li>
              </>
            )
          })
        } */}
      {/* <Count/> */}
      {/* <Clock/> */}
      {/* <Input/> */}
      {/* <ToList/> */}
      {/* <UseEffect/> */}
      {/* <ApiUseEffect/> */}
      {/* <BootstrapNav/> */}
      {/* <BootstrapCarousel/> */}

      {/* <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router> */}
      {/* <ApiDog/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUP />} />
        </Routes>
      </Router>
      {/* </div> */}
    </>
  )
}

export default App