import React, { Fragment } from "react";
import "./Teacher.css";
import ImgSrc from "../../shared/ImgSrc";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Footer from "../../components/Footer/Footer";

const Feature_teacher = (props) => {
  return (
    <Fragment>
      {/* This is for first block */}
    <div className="whole_body">
      <div className="teacher_container1">
        <Slide left>
          <div className="teacher_inside_container1 teacher_down">
            <div className="teacher_main_info1">
              <h1 className="teacher_heading_block1_1">Basics</h1>
              <h1 className="teacher_heading_block1_2">For Teacher</h1>
              <div className="teacher_paragraph1">
                to improve life by improving online education
              </div>
              <button className="teacher_btn">Try for Free</button>
            </div>
            <img className="teacher_image1" src={ImgSrc.FeatureTeacherImage1} alt="" />
          </div>
        </Slide>
      </div>
      
      {/* This is for second block */}

      <div className="teacher_container2">
        <div className="teacher_inside_container2">
          <Slide right>
            <img className="teacher_image2" src={ImgSrc.FeatureTeacherImage2} alt="" />
            <div className="teacher_main_info2">
              <h1 className="teacher_heading_block2">
                About <label>Education</label>
              </h1>
              <div className="teacher_paragraph2">
                Video Lectures , Theory/Notes , TestSeries , Data Analysis of
                results , Blogs to motivate or for Guidance , Attendance System
                and many more features.
              </div>
            </div>
          </Slide>
        </div>

        <div className="teacher_inside_container2 teacher_down">
          <Slide left>
            <div className="teacher_main_info2">
              <h1 className="teacher_heading_block2">
                Why <label>Education?</label>
              </h1>
              <div className="teacher_paragraph2">
                We provide , students with free and right guidance and help them
                in selecting their correct career path
              </div>
            </div>
            <img className="teacher_image2" src={ImgSrc.FeatureTeacherImage3} alt="" />
          </Slide>
        </div>
      </div>

      {/* This is third block */}
      <div className="teacher_container3">
        <Bounce up>
          <div className="teacher_heading3">
            <h1>
              Choose Your <label>Role</label>
            </h1>
          </div>
        </Bounce>

        <div className="teacher_inside_cont3-box">
          <Slide left>
            <div className="teacher_inside_container3 teacher_containers">
              <img
                className="teacher_image3"
                src={ImgSrc.FeatureStudentImage4}
                alt=""
              />
              <div className="teacher_main_info3">
                <h1 className="teacher_heading_block3">
                  As a <label>Student</label>
                </h1>
                <div className="teacher_paragraph3">
                  Start learning from the best teachers!
                </div>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="teacher_inside_container3 teacher_containers">
              <img
                className="teacher_image3"
                src={ImgSrc.FeatureStudentImage5}
                alt=""
              />
              <div className="teacher_main_info3">
                <h1 className="teacher_heading_block3">
                  As a <label>Teacher</label>
                </h1>
                <div className="teacher_paragraph3">
                  Are you ready to share your knowledge and experience ?
                </div>
                <button className="teacher_btn3">Join</button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Feature_teacher;
