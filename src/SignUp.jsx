import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <fieldset>
            <legend>Sign Up</legend>
            <form action="">
                <input type="text" placeholder='Enter the first name'/>
                <br />
                <br />
                <input type="text" placeholder='Enter the last name'/>
                <br />
                <br />
                <input type="number" placeholder='Enter the contact number'/>
                <br />
                <br />
                <input type="email" placeholder='Enter the email'/>
                <br />
                <br />
            </form>
        </fieldset>
        <Link to='/'>Long in</Link>
    </div>
  )
}

export default SignUp