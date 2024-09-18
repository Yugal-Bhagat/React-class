import React from 'react'
import New from './demo/new'
import Go from './Go'

const Home = (value) => {
    let arr = [1,2,3,4,5]
    // console.log(value.data1.b)
  return (
    <div>
        <h1>home1</h1>
        <h1>home2</h1>
        <New/>
        <Go ex={value.data1.b}/>
    </div>
  )
}

export default Home