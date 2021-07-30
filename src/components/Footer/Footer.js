import React, { useState } from 'react'
import './Footer.css'
import { StudentContact, TeacherContact } from '../../axios/instance';
import RoleField from "../UI/RoleField/RoleField";
import { ToastContainer, toast } from 'react-toastify';

const inputValidator = (field) => {
    let isValid = true;
  
    field.forEach((item) => {
      if (item.length === 0) {
        isValid = false;
      }
    });
  
    return isValid;
};

const Footer = () => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmitHandler = async (event) => {
    event.preventDefault();
    let isValid = inputValidator([role,email]);
    if (!isValid) {
        toast.error('Please fill all inputs')
    }
    else {
      const body = {
        name: name,
        email: email,
        message: message
      }

    try{

        if(role === 'student')
        {
            const res = await StudentContact(body);
            if (!res.data.error)
            {
                toast.success(`${ res.data.msg }`);
            }
        }
        else{
            const res = await TeacherContact(body);
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
    setName("");
    setEmail("");
    setMessage("");
}

    return (
        <footer className="footer">
        <ToastContainer position="bottom-center" bodyClassName="toastBody"/>
        <div className="footer__main-content">         
        <div className="footer_top">
            <div className="footer_top_box">
            <h2>Get in touch</h2>
            <div className="hr"></div>
            <p>Enjoy free access to all LearnZania resources and study material anytime, anywhere from your comfort and ace 
                your preparation.You can get in touch with us through any of the means below. </p>

            <div className="footer_top_contact">
                <div className="cont-icon">
                    <span className="fas fa-phone"></span>
                    <span className="fas fa-envelope"></span>
                    <span className="fas fa-map-marker-alt"></span>
                </div>
                <div className="text">  
                    <span className="text">+91 1234567890</span>
                    <span className="text">example123@gmail.com</span>
                    <span className="text">India</span>
                </div>
                
            </div>
        </div>
     
        <div className="footer_mid-box">
        <form className="qf--form" onSubmit={onSubmitHandler}>
            <h1>Have something to say ?</h1>
            <input 
              placeholder="Name" 
              type="text" 
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <RoleField 
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
            <input 
              placeholder="Email" 
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
            <textarea 
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            >
            </textarea>
            <button className="signup__form--button" type="submit">
              Send Message
            </button>
          </form>
          </div>
          </div>
                <div className="footer_bottom">
                    <div className="bottom_content">
                    <div className="footer_bottom_name">
                        <h1>LearnZania</h1>
                        <p>Struggling to choose right career path? Having difficulty in some topic or question? 
                        <br></br>
                           Don't worry!! Enjoy free access to all LearnZania resources and study material anytime, anywhere from your comfort and ace 
            your preparation.Get free and expert guidance from our mentors too.</p>
                    </div>
                    <div className="footer_bottom_about">
                        <h1>About Us</h1>
                        <p>If you are not geting proper resources or need a montor support we are here to help you. We have proper resources for your study
                            as well as mentors to guide you.
                        </p>
                    </div>
                    <div className="footer_bottom_connect">
                    <h1>Connect with Us</h1>
                            <div className="icons">
                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-linkedin-in"></span></a></li>
                                <li><a href="#"><span
                                    className="fab fa-github"></span></a>
                                </li>
                            </div>
                        </div>
                        </div>
                    <div className="footer_bottom_bottom">
                    <div className="footer_bottom_links">
                        <div className="links-dv">
                            <div className="navi">
                            <span className="text">Home</span>
                            </div>
                            <div className="navi">
                            <span className="text">Portfolio</span>
                            </div>
                        </div>
                        <div className="links-dv">
                            <div className="navi">
                            <span className="text">Services</span>
                            </div>
                            <div className="navi">
                            <span className="text">Team Member</span>
                            </div>
                        </div>
                        <div className="links-dv">
                        <div  className="navi">
                            <span className="text">Client</span>
                            </div>
                            <div className="navi">
                            <span className="text">Contact</span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="copyright">
                <center>
                    <span className="credit"><a
                        href="#" style={{color:"white",textDecoration:'none',marginTop:"0.5rem"}}>LearnZania</a> | </span>
                    <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                </center>
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer