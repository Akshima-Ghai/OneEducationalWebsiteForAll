import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import InputField from "./../../../components/UI/InputField/InputField";
import RoleField from "./../../../components/UI/RoleField/RoleField";
import { ToastContainer, toast } from 'react-toastify';
import { StudentResetPassword, TeacherResetPassword } from '../../../axios/instance';

const inputValidator = (field) => {
  let isValid = true;

  field.forEach((item) => {
    if (item.length === 0) {
      isValid = false;
    }
  });

  return isValid;
};

const ResetPassword = () => {
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let isValid = inputValidator([role,password]);
    if (!isValid) {
      toast.error('Please fill all inputs')
    }
    else {

      const body = {
        token: token,
        password: password,
      }

    try{

      if(role === 'student')
      {
        const res = await StudentResetPassword(body);
        if (!res.data.error)
        {
           toast.success(`${ res.data.msg }`);
        }
      }
      else{
        const res = await TeacherResetPassword(body);
        if (!res.data.error)
        {
           toast.success(`${ res.data.msg }`);
        }
      }
    } catch(err) {
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
            <h1 className="login__heading">Reset New Password</h1>
          </div>
          <InputField
            value={password}
            type="password"
            placeholder="New Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <RoleField 
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <button className="login__form--button" type="submit">
            Reset
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ResetPassword;
