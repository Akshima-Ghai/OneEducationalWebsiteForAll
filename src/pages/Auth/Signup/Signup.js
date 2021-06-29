import React, { useState } from 'react'
import './Signup.css'
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 
  const onSubmitHandler = (event) => {
    event.preventDefault()
    let isValid = inputValidator([name,email, password])
    if (!isValid) {
      return setError('Invalid input')
    }
    // SignUp Server Rq
  }

  return (
    <section className="signup__container">
      <form className="signup__form" onSubmit={onSubmitHandler}>
        <div className="signup__heading--container">
            <h1 className="signup__heading">
                Signup
            </h1>
        </div>
        <InputField
          value={name}
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
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
        <p className="signup__form--p">
            Already a user you can <Link to="/login"> Login </Link> here
        </p>
        <button className="signup__form--button" type="submit">
          Signup
        </button>
      </form>
    </section>
  )
}

export default Login