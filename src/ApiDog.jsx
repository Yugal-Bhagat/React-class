import React, { useEffect, useState } from 'react'

const ApiDog = () => {
let [image,setImage] = useState()

    useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/image/random').then((res)=>{
    return res.json()
        }).then((data)=>{
        console.log(data.message);
        setImage(data.message)

        })
    },[])
  return (
    <div>
<img src={image} alt="" height={'400px'}/>
    </div>
  )
}

export default ApiDog