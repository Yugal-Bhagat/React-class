import React from 'react'
import  './App.css'
import Home from './Home'
import Count from './Count'
import Clock from './clock'
import Input from './Input'
import ToList from './ToList'
const App = () => {
  let arr = [1,2,3,4,5]
let a = 5
let b = 2
  return (
    <div id='box' className='container'>
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
        <ToList/>
    </div>
  )
}

export default App