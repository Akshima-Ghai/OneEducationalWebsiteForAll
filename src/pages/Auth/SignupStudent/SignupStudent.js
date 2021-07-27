import React, { useState } from "react";
import "./SignupStudent.css";
import { Link } from "react-router-dom";
import InputField from "./../../../components/UI/InputField/InputField";
import Footer from "../../../components/Footer/Footer";
import studentimg from "../../../assets/student_signup.png";

const inputValidator = (field) => {
  let isValid = true;

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false;
    }
  });

  return isValid;
};

const SignupStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = inputValidator([
      name,
      email,
      password,
      college,
      course,
      year,
    ]);
    if (!isValid) {
      return setError("Invalid input");
    }
    // SignUp Server Rq
    const user = {
      name,
      email,
      password,
      college,
      course,
      year,
    };
    fetch("http://localhost:3001/student-signup", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((resBody) => {
        const token = resBody.accesstoken;
        // Save this Token using redux to authenticate user
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <section className="signup__container">
        <form className="signup__form" onSubmit={onSubmitHandler}>
          <p className="signup__form--p">
            Already a user you can <Link to="/login"> Login </Link> here
          </p>
          <div className="signup__heading--container">
            <h1 className="signup__heading">Create an Account</h1>
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
            value={college}
            type="text"
            placeholder="College"
            onChange={(event) => setCollege(event.target.value)}
          />
          <InputField
            value={course}
            type="text"
            placeholder="Course"
            onChange={(event) => setCourse(event.target.value)}
          />
          <InputField
            value={year}
            type="text"
            placeholder="Year"
            onChange={(event) => setYear(event.target.value)}
          />
          <button className="signup__form--button" type="submit">
            Sign Up
          </button>
        </form>
        <div className="signup__img">
          <img src={studentimg} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignupStudent;
