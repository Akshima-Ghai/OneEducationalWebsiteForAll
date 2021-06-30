import React from 'react'
import "./About.css"
import ImgSrc from './../../shared/ImgSrc'

const About = props => {
    return (
        <section className="about__container">
            <h1 className="about__heading">Got Questions</h1>
            <div className="about__div">
                <img src={ImgSrc.Education} alt="logo" />
                <h1>What is EduOne?</h1>
                <p>EduOne is an e-learning website which provide the students with the option to choose their courses as per their needs. Quizzes, and guidence videos are some of the interaction methods through which students can learn.</p>
            </div>
            <div className="about__div">
                <img src={ImgSrc.Working} alt="logo" />
                <h1>How does it work?</h1>
                <p>Students can create an account and use all the features we provide.</p>
            </div>
            <div className="about__div">
                <img src={ImgSrc.Free} alt="logo" />
                <h1>Is it free?</h1>
                <p>YES, Forever.</p>
            </div>
            <div >
                <h1>Project Admin</h1>
                <div>
                    <h1>Name</h1>
                    <p>Title</p>
                    <div>
                        <h1>Social Link</h1>
                        <h1>Social Link</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1>STILL HAVE SOME QUESTIONS?</h1>
                <div>
                    <div>
                        Image
                    </div>
                    <form>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About