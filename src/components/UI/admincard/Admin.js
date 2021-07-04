import React from "react";
import "./Admin.css";
const Admin= (props) => {
  return (
     <section>
      <div className="user-admin">
        <div className="title">
        <h2>{props.name}</h2>
        </div>
        <div className="img-user">
        <img src={props.Image} alt="" />
        </div>
      </div>
      </section>
  );
};

export default Admin;
