import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import InputField from "./../../../components/UI/InputField/InputField";
import RoleField from "./../../../components/UI/RoleField/RoleField";

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
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = inputValidator([role,password]);
    if (!isValid) {
      return setError("Invalid input");
    }
    console.log(role,password);
  };

  return (
    <div>
      <section className="login__container">
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
