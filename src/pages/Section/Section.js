import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Sectionscard from "../../components/UI/Sectionscard/SectionCard";
import Chatbot from '../../components/UI/Chatbot/Chatbot'
import ImgSrc from "../../shared/ImgSrc";
import Footer from "../../components/Footer/Footer";
import "./Section.css";

const Section = () => {
 const [opened, setOpened] = useState(false);
useEffect(() => {
  setOpened(false);
}, [opened])
  return (
    <div>
     
      <section>
        <div className="main-container">
          <div className="main_section">
            <h1 className="main-sec-head">
              Where <span>To Go ?</span>
            </h1>
            <div className="choose_sec">
              <div className="section_under">
                <Sectionscard
                  name="Home Page"
                  image={ImgSrc.home}
                  para="Go to home page"
                >
                  <div className="home_hover">
                  <p className="login__forgot--button home_btns">
                     <Link to="/login">Login</Link>
                  </p>
                  <p className="login__forgot--button home_btns">
                     <Link to="/signup">Sign Up</Link>
                  </p>
                  </div>
                </Sectionscard>
                <Sectionscard
                  name="Video Lectures"
                  image={ImgSrc.video}
                  para="Bored with reading here are some interesting lectures"
                >
                  <div>
                    <img src={ImgSrc.videolec1}></img>
                    <img src={ImgSrc.videolec2}></img>
                  </div>
                </Sectionscard>
              </div>
              <div className="sec-middle">
                <button className="doubt" onClick={()=>{
                      setOpened(!opened);
                }}
                style={{background:'transparent',border:"none"}} 
>
                <Sectionscard
                  name="Doubt Assistance"
                  image={ImgSrc.doubt}
                  para="Have doubts? We are here to help."
                  >
                    <img src={ImgSrc.doubtassistant}></img>
                  </Sectionscard>
                 </button>
                 <button style={{background:'transparent',border:"none"}} >
                <Sectionscard
                  name="Blogs"
                  image={ImgSrc.blog}
                  para="Read blogs related to on any topic of yor study."
                >
                <div>
                  <p className="hovertext">Find Blogs about learning and teaching </p>
                </div>
                </Sectionscard>
                </button>
              </div>
              <div className="section_under">
                <Sectionscard
                  name="Test Series/Quiz Section"
                  image={ImgSrc.Quiz}
                  para="Want to test your skills take Test/Quiz."
                >
                <div>
                  <p className="hovertext">Which is the most popular js framework ?</p>
                  <p className="hovertext">Which is the most popular NoSQL Database ? </p>
                </div>
                </Sectionscard>
                <Sectionscard
                  name="More Features"
                  image={ImgSrc.more}
                  para="See more features"
                >
                  <div>
                   <p className="hovertext">Web Designing</p>
                   <p className="hovertext">Flutter Development</p>
                  </div>
                </Sectionscard>
              </div>
            </div>
          </div>
        </div>
      </section>
      {(opened===true)?(
        <div id="chatbot"><Chatbot open={opened}/></div>
      ):(
        <div id="chatbot"><Chatbot/></div>
      )}
      <Scrolltop showBelow={250} showLeft={true}/>
      <Footer />
    </div>
  );
}


export default Section;

