import React, { useState } from "react";
import "./Signup.css";
import Footer from "../../../components/Footer/Footer";
import {Link} from "react-router-dom"
import Slide from "react-reveal/Slide";
import Student from "../../../assets/Student_option.png"
import Teacher from "../../../assets/Teacher_option.png"

const Login = () => {
  return (
    <div>
      <section className="signup--options__container">
        <div className="inside_cont3-box">
          <Slide left>
            <div className="inside_container3">
              <img
                className="image3"
                src={Student}
                alt=""
              />
              <div className="main_info3">
                <h1 className="heading_block3">
                  SignUp As a <label>Student</label>
                </h1>
                <div className="paragraph3">
                  Start learning from the best teachers!
                </div>
                <Link to="./SignupStudent" className="btn3">Join</Link>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="inside_container3">
              <img
                className="image3"
                src={Teacher}
                alt=""
              />
              <div className="main_info3">
                <h1 className="heading_block3">
                  SignUp As a <label>Teacher</label>
                </h1>
                <div className="paragraph3">
                  Are you ready to share your knowledge and experience ?
                </div>
                <Link to="./SignupTeacher" className="btn3">Join</Link>
              </div>
            </div>
          </Slide>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
