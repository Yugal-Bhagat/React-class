import React, { useEffect, useState } from 'react'

const ApiUseEffect = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data.recipes);
            setApi(data.recipes)
        })
    }, [])
    return (
        <div>
            {/* {console.log(api)}         */}
            {

                api.map((val) => {
                    console.log(val);
                    return (
                        <>
                            <h3>{val.id}</h3>
                            <p>{val.name}</p>
                            <img height={'200px'} src={val.image} alt="" />
                        </>)

                })
            }
        </div>
    )
}

export default ApiUseEffect