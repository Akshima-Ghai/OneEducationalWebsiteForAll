import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <section className="signup--options__container">
        <div className="signup__options">
          <div className="signup__options--student">
            <Link to="/SignupStudent">Sign Up as a Student</Link>
          </div>
          <div className="signup__options--teacher">
            <Link to="/SignupTeacher">Sign Up as a Teacher</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
