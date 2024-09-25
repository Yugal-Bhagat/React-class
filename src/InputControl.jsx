import React, { useState } from 'react'

const InputControl = () => {
    let [input, SetInput] = useState({
        name: "",
        email: "",
        password: ""

    })
    function fun(e) {
        let { name, value } = e.target
        SetInput({ ...input, [name]: value })
        console.log(e.target.value);

    }
    function done(e) {
        e.preventDefault()
        console.log(input, 'bbhbhhhb');
        localStorage.setItem('myInfo',JSON.stringify(input))
        SetInput('')
    }
   let myData = JSON.parse(localStorage.getItem('myInfo')) || {}

    console.log(myData);
    
    return (
        <div>
            <fieldset>
                <legend>Form</legend>
                <form onSubmit={done}>
                    <input type="text" onChange={fun} name="name" value={input.name} placeholder='Enter your name' />
                    <br />
                    <br />
                    <input type="email" onChange={fun} name="email" value={input.email} placeholder='Enter your Email id' />
                    <br />
                    <br />
                    <input type="password" onChange={fun} name="password" value={input.password} placeholder='Enter your password' />
                    <br />
                    <br />
                    <button type='submit'>submit</button>
                </form>
            </fieldset>
             <h1>{myData.name }</h1>
            <h1>{myData.email }</h1>
            <h1>{myData.password}</h1>
            {console.log(input.name)}
            
           

        </div>
    )
}

export default InputControl