import React from "react";
import "./About.css";
import ImgSrc from "./../../shared/ImgSrc";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
const About = (props) => {
  return (
    <section className="about__container">
      <h1 className="about__heading">Who we are</h1>
      <div className="about__div">
        <img src={ImgSrc.Education} alt="logo" />
        <h1>What is EduOne?</h1>
        <p>
          EduOne is an e-learning website which provide the students with the
          option to choose their courses as per their needs. Quizzes, and
          guidence videos are some of the interaction methods through which
          students can learn.
        </p>
      </div>
      <div className="about__div">
        <img src={ImgSrc.Working} alt="logo" />
        <h1>How does it work?</h1>
        <p>
          Students can create an account and use all the features we provide.
        </p>
      </div>
      <div className="about__div">
        <img src={ImgSrc.Free} alt="logo" />
        <h1>Is it free?</h1>
        <p>YES, Forever.</p>
      </div>
      <h1 className="about__heading">Our Team</h1>
      <div className="about__pa--card">
        <img src={ImgSrc.Woman} alt="profile" />
        <h1>Akshima Ghai</h1>
        <p>Project Admin</p>
      </div>
      <Scrolltop showBelow={250} />
    </section>
  );
};

export default About;
