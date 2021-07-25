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

const ForgotPassword = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = inputValidator([role,email]);
    if (!isValid) {
      return setError("Invalid input");
    }
  };

  return (
    <div>
      <section className="login__container">
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
