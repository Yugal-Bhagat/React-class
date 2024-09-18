import React, { useState } from 'react'

const Input = () => {
   let [inp,setInp] = useState("Name")
function fun1(e){
    // console.log(e.target.value)
    setInp(e.target.value)
}
  return (
    <div>Input
        <h1>{inp}</h1>
        <input type="text" placeholder='enter name' onChange={fun1}/>
    </div>
  )
}

export default Input
