import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import InputField from './../../../components/UI/InputField/InputField'

const inputValidator = (field) => {
  let isValid = true

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false
    }
  })

  return isValid
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 
  const onSubmitHandler = (event) => {
    event.preventDefault()
    let isValid = inputValidator([email, password])
    if (!isValid) {
      return setError('Invalid input')
    }
    // Login Server Rq
  }

  return (
    <section className="login__container">
      <form className="login__form" onSubmit={onSubmitHandler}>
        <div className="login__heading--container">
            <h1 className="login__heading">
                Login
            </h1>
        </div>
        <InputField
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          value={password}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="login__form--p">
            Not a User, Don't worry you can <Link to="/signup"> SignUp </Link> here
        </p>
        <button className="login__form--button" type="submit">
          Login
        </button>
      </form>
    </section>
  )
}

export default Login