import React,{ useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from '@material-ui/icons/GitHub';
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import ImgSrc from "./../../shared/ImgSrc";
import "./About.css";

const About = (props) => {

  const [contributors, setContributors] = useState([]);
  const [viewnumber, setViewNumber] = useState(15);
  const [adminmentors, setAdminMentors] = useState([]);
  const adminmentors_ids = [58785998, 78724676];

  const apiURL = "https://api.github.com/repos/Akshima-Ghai/OneEducationalWebsiteForAll/contributors";

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      const res = await axios.get(apiURL);
      setAdminMentors(res.data.filter(contributor => adminmentors_ids.includes(contributor.id)));
      setContributors(res.data.filter(contributor => !adminmentors_ids.includes(contributor.id)));
    };
    fetchData();
  }, []);

  const getrole = (id) => {
    switch(id){
      case 58785998 : return "Admin"; 
      case 78724676 : return "Mentor";
      default : return "Contributor";
    }
  }

  const handleViewMore = (e) => {
    e.preventDefault(); 
    setViewNumber(viewnumber + 15);
  }

  return (
    <div>
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
        <br/>
        <br/>
        <h1 className="about__heading">Our Team</h1>
        <div className="contributors__list">
          {adminmentors.map((mentor, index) => {
            return (
              <div className="contributor" key={index}>
                <div className="contributor__img">
                  <img src={mentor.avatar_url} alt="contributor-avatar" />
                </div>
                <div className={`contributor__details mentor__details`}>
                  <a href={mentor.html_url} target="_blank">
                  <h3><i className="fab fa-github" aria-hidden="true"></i>@{mentor.login}</h3></a>
                  <p> Project { getrole(mentor.id) }</p>
                </div>
              </div>
              )
            })
          }
        </div>
        <div className="contributors__list">
          {contributors.slice(0,viewnumber).map((contributor, index) => {
            return (
              <div className="contributor" key={index}>
                <div className="contributor__img">
                  <img src={contributor.avatar_url} alt="contributor-pic" />
                </div>
                {
                <div className="contributor__details">
                  <a href={contributor.html_url} target="_blank">
                  <h3><i className="fab fa-github" aria-hidden="true"></i>@{contributor.login}</h3></a>
                  <p>{ getrole(contributor.id) }</p>
                </div>
                }
              </div>
              )
            })
          }
        </div>
        { viewnumber < contributors.length ?
          <button className="view__more--button" onClick={ handleViewMore }>
            View More
          </button>
        : null }
        <Scrolltop showBelow={250} />
      </section>
      <Footer />
    </div>
  );
};

export default About;
