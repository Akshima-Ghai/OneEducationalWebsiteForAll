import React from "react";
import ImgSrc from "../../shared/ImgSrc";
import "./Frontpg.css";
import Admin from "../../components/UI/admincard/Admin";
const Frontpg = () => {
  return (
    <section className="user">
      <div className="wrapper context">
        <div className="wrapper-container">
          <div className="txt">
            <div className="static-txt">
              <span>Welcome to</span>
            </div>
            <div className="dynamic-txts">
              <span>LearnZania</span>
            </div>
          </div>
          <img
            src="https://www.metrilo.com/images/illustrations/email.svg"
            alt=""
          />
        </div>
        <div className="id-user">
          <div className="userspan">
            <span>Are you a ?</span>
          </div>
          <div className="user-adminchoose">
            <Admin name="Student" Image={ImgSrc.Student} />
            <Admin name="Teacher" Image={ImgSrc.Teacher} />
          </div>
        </div>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};
export default Frontpg;
