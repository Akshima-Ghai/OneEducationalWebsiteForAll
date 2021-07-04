import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__main-content">
                <div className="footer__left box">
                    <div className="footer__logo">
                        <img src="" />
                    </div>
                    <h2>Address</h2>
                    <div className="footer__box-content">
                        <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">India</span>
                        </div>
                        <div className="phone">
                            <span className="fas fa-phone"></span>
                            <span className="text">+91 1234567890</span>
                        </div>
                        <div className="email">
                            <a href="mailto:example123@gmail.com"><span className="fas fa-envelope"></span></a>
                            <span className="text">example123@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer__center box">
                    <h2>Connect with Us</h2>
                    <div className="footer__box-content">
                        <div className="social__icons">
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
                    <h2 className="additional">Additional Links</h2>
                    <div className="footer__box-content"></div>
                    <div className="footer__center-bottom">
                        <div>
                            <a href="#"><span className="fas fa-user"></span></a>
                            <span className="text">About</span>
                        </div>
                        <div className="courses">
                            <a href="#"><span className="fas fa-graduation-cap"></span></a>
                            <span className="text">Courses</span>
                        </div>
                        <div>
                            <a href="#"><span className="fas fa-comments"></span></a>
                            <span className="text">Guidance</span>
                        </div>
                    </div>
                </div>

                <div className="footer__right box">
                    <h2 className="cont">Contact us</h2>
                    <div className="footer__box-content">
                        <form action="#">
                            <div className="name">
                                <div className="text">Name</div>
                                <input type="text" placeholder="Enter your Name" />
                            </div>
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" placeholder="Enter your Email-id" required />
                            </div>
                            <div className="msg">
                                <div className="text">Message *</div>
                                <textarea className="msg" rows="4" cols="25" placeholder="Enter your message!" required></textarea>
                            </div>
                            <div className="btn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <center>
                    <span className="credit"><a
                        href="#">LearnZania</a> | </span>
                    <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                </center>
            </div>
        </footer>
    )
}

export default Footer