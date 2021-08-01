import React from "react";
import "./Sectionscard.css";
const Sectionscard = (props) => {
  return (
    <section>
      <div className="section-div" >
        <img className="section-img" src={props.image} alt="" />
        <div className="sections">
          <div className="sec-data">
            <span>{props.name}</span>
            <p>{props.para}</p>
            <div className="hover-div">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionscard;
