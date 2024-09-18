import React, { useState } from 'react'

const Count = () => {
  let [count,SetCount]=useState(0)
  let [colors,SetColor] = useState('red')
 function fun1(){
SetCount(count+1)
  }
 function fun2(){
SetColor('green')

  }
  return (
    <div>Count
      <body style={{backgroundColor:colors}} >
        
      </body>
        <p>{count}</p>
        <button onClick={fun1}>click</button>
        <button onClick={fun2}>color gen</button>
    </div>
  )
}

export default Count