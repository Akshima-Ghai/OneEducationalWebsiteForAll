import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import InputField from "./../../../components/UI/InputField/InputField";
import RoleField from "./../../../components/UI/RoleField/RoleField";
import { ToastContainer, toast } from 'react-toastify';
import { StudentForgotPassword, TeacherForgotPassword } from '../../../axios/instance';

const inputValidator = (field) => {
  let isValid = true;

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false;
    }
  });

  return isValid;
};

const ForgotPassword = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let isValid = inputValidator([role,email]);
    if (!isValid) {
      toast.error('Please fill all inputs')
    }
    else {

      const body = {
        email: email,
      }

    try{

      if(role === 'student')
      {
        const res = await StudentForgotPassword(body);
        if (!res.data.error)
        {
           toast.success(`${ res.data.msg }`);
        }
      }
      else{
        const res = await TeacherForgotPassword(body);
        if (!res.data.error)
        {
           toast.success(`${ res.data.msg }`);
        }
      }
      clearFields();
    } catch(err) {
        if (err.response)
        {
          toast.error(`${ err.response.data.error }`);
        }
      }
    }
  };

  const clearFields = () => {
    setEmail("");
  }

  return (
    <div>
      <section className="login__container">
        <ToastContainer position="bottom-center" bodyClassName="toastBody"/>
        <form className="login__form" onSubmit={onSubmitHandler}>
          <div className="login__heading--container">
            <h1 className="login__heading">Forgot Password ?</h1>
          </div>
          <InputField
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <RoleField 
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <button className="login__form--button" type="submit">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
