import React, { useState } from 'react'
import '../SignupStudent/SignupStudent.css'
import { Link } from 'react-router-dom'
import InputField from './../../../components/UI/InputField/InputField'
import Footer from "../../../components/Footer/Footer";
import teacherimg from "../../../assets/teacher_signup.png"

const inputValidator = (field) => {
    let isValid = true

    field.forEach((item) => {
        if (item.length === 0) {
            isValid = false
        }
    })

    return isValid
}

const SignupTeacher = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [qualification, setQualification] = useState('')
    const [experience, setExperience] = useState('')
    const [domain, setDomain] = useState('')
    const [error, setError] = useState('')


    const onSubmitHandler = (event) => {
        event.preventDefault()
        let isValid = inputValidator([name, email, password, qualification, experience, domain])
        if (!isValid) {
            return setError('Invalid input')
        }
        // SignUp Server Rq
    }

    return (
        <div>
            <section className="signup__container">
                <form className="signup__form" onSubmit={onSubmitHandler}>
                    <p className="signup__form--p">
                        Already a user, you can <Link to="/login"> Login </Link> here
                    </p>
                    <div className="signup__heading--container">
                        <h1 className="signup__heading">
                            Create an Account
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
                    <InputField
                        value={qualification}
                        type="text"
                        placeholder="Qualification"
                        onChange={(event) => setQualification(event.target.value)}
                    />
                    <InputField
                        value={experience}
                        type="text"
                        placeholder="Experience"
                        onChange={(event) => setExperience(event.target.value)}
                    />
                    <InputField
                        value={domain}
                        type="text"
                        placeholder="Domain"
                        onChange={(event) => setDomain(event.target.value)}
                    />
                    <button className="signup__form--button" type="submit">
                        Sign Up
                    </button>
                </form>
                <div className="signup__img">
                    <img src={teacherimg} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SignupTeacher