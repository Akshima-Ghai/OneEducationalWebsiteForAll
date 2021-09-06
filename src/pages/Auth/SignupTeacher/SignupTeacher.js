import React, { useState } from "react";
import "../SignupStudent/SignupStudent.css";
import { Link } from "react-router-dom";
import InputField from "./../../../components/UI/InputField/InputField";
import Footer from "../../../components/Footer/Footer";
import teacherimg from "../../../assets/teacher_signup.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TeacherSignUp } from '../../../axios/instance';

const inputValidator = (field) => {
  let isValid = true;

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false;
    }
  });

  return isValid;
};

const SignupTeacher = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [domain, setDomain] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let isValid = inputValidator([
      name,
      email,
      password,
      qualification,
      experience,
      domain,
    ]);

    if (!isValid) {
      toast.error('Please fill all inputs');
    }
    else{
    
    const body = {
      name,
      email,
      password,
      qualification,
      experience,
      domain,
    };

    try
     {
      const res = await TeacherSignUp(body);
      if (!res.data.error)
      {
        localStorage.setItem('token', res.data.accesstoken);
        // Save UserData using redux 
        toast.success('You have signed up successfully, Start teaching with us');
        clearFields();
      }
     } catch (err) {
      if (err.response)
      {
        toast.error(`${ err.response.data.error }`);
      }
    }

    }
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setQualification("");
    setExperience("");
    setDomain("");
  }

  return (
    <div>
      <section className="signup__container">
        <ToastContainer position="bottom-center" bodyClassName="toastBody"/>
        <form className="signup__form" onSubmit={onSubmitHandler}>
          <p className="signup__form--p">
            Already a user, you can <Link to="/login"> Login </Link> here
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
  );
};

export default SignupTeacher;
