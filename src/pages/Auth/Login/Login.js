import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import InputField from "./../../../components/UI/InputField/InputField";
import RoleField from "./../../../components/UI/RoleField/RoleField";
import { ToastContainer, toast } from 'react-toastify';
import { StudentLogin, TeacherLogin } from '../../../axios/instance';

const inputValidator = (field) => {
  let isValid = true;

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false;
    }
  });

  return isValid;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let isValid = inputValidator([email, password, role]);
    if (!isValid) {
      toast.error('Please fill all inputs')
    }

    else{

    const body = {
      email: email,
      password: password
    }

    try
     {
      if(role === 'student')
      {
        const res = await StudentLogin(body);

        if (!res.data.error)
        {
          localStorage.setItem('token', res.data.accesstoken);
          // Save UserLoginData and make authenticated using redux 
        }
      }
      else {
        const res = await TeacherLogin(body);

        if (!res.data.error)
        {
          localStorage.setItem('token', res.data.accesstoken);
          // Save UserLoginData and make authenticated using redux 
        }
      }
    
     } catch (err) {
      if (err.response)
      {
        toast.error(`${ err.response.data.error }`);
      }
    }
   }
  };

  return (
    <div>
      <section className="login__container">
        <ToastContainer position="bottom-center" bodyClassName="toastBody"/>
        <form className="login__form" onSubmit={onSubmitHandler}>
          <div className="login__heading--container">
            <h1 className="login__heading">Login</h1>
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
          <RoleField 
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <p className="login__form--p">
            Not a User, Don't worry you can <Link to="/signup"> SignUp </Link>{" "}
            here
          </p>
          <p className="login__forgot--button">
            <Link to="/forgot-password">Forgot Password</Link>
          </p>
          <button className="login__form--button" type="submit">
            Login
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
