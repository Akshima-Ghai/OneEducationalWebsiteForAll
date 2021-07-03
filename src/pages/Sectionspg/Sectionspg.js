import React from "react";
import Sectionscard from "../../components/UI/Sectionscard/Sectionscard";
import "./Sectionspg.css";
import ImgSrc from "../../shared/ImgSrc";
const Sectionspg= () => {
  return (
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
              />
              <Sectionscard
                name="Video Lectures"
                image={ImgSrc.video}
                para="Bored with reading here are some interesting lectures"
              />
            </div>
            <div className="sec-middle">
              <Sectionscard
                name="Doubt Assistance"
                image={ImgSrc.doubt}
                para="Have doubts? We are here to help."
              />
              <Sectionscard
                name="Blogs"
                image={ImgSrc.blog}
                para="Read blogs related to on any topic of yor study."
              />
            </div>
            <div className="section_under">
              <Sectionscard
                name="Test Series/Quiz Section"
                image={ImgSrc.Quiz}
                para="Want to test your skills take Test/Quiz."
              />
              <Sectionscard
                name="More Features"
                image={ImgSrc.more}
                para="See more features"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionspg;
