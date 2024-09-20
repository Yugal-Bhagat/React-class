import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  let [count, setCount] = useState(0)
  let [city, setCity] = useState('Bhopal')
  // let [api,setApi] = useState([])
  console.log('hello') // reload this page
  function fun1() {
    setCount(count + 1)
  }
  function fun2() {
    setCity('Delhi')
  }
  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data, 'hello')
    })
  }, [count])
  
  // useEffect(() => {   // but in which not reload this page
  //   fetch('https://dummyjson.com/recipes').then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     console.log(data, 'hello')
  //   })
  // }, [])
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={fun1}>Click</button>
      <h2>{city}</h2>
      <button onClick={fun2}>Change</button>

    </div>
  )
}

export default UseEffect