import React from "react";
import "./Student.css";
import ImgSrc from "../../shared/ImgSrc";
import { Fragment } from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Footer from "../../components/Footer/Footer";

const Feature_student = (props) => {
  return (
    <Fragment>
      {/* This is for first block */}
    <div className="whole_body">
      <div className="student_container1">
        <Slide left>
          <div className="student_inside_container1 student_down">
            <div className="student_main_info1">
              <h1 className="student_heading_block1_1">Basics</h1>
              <h1 className="student_heading_block1_2">For Students</h1>
              <div className="student_paragraph1">
                to improve life by improving online education
              </div>
              <button className="student_btn">Try for Free</button>
            </div>
            <img className="student_image1" src={ImgSrc.FeatureStudentImage1} alt="" />
          </div>
        </Slide>
      </div>

      {/* This is for second block */}

      <div className="student_container2">
        <div className="student_inside_container2">
          <Slide right>
            <img className="student_image2" src={ImgSrc.FeatureStudentImage2} alt="" />
            <div className="student_main_info2">
              <h1 className="student_heading_block2">
                About <label>Education</label>
              </h1>
              <div className="student_paragraph2">
                Video Lectures , Theory/Notes , TestSeries , Data Analysis of
                results , Blogs to motivate or for Guidance , Attendance System
                and many more features.
              </div>
            </div>
          </Slide>
        </div>

        
          <div className="student_inside_container2 student_down">
          <Slide left>
            <div className="student_student_main_info2">
              <h1 className="student_heading_block2">
                Why <label>Education?</label>
              </h1>
              <div className="student_paragraph2">
                We provide , students with free and right guidance and help them
                in selecting their correct career path
              </div>
            </div>
            <img className="student_image2" src={ImgSrc.FeatureStudentImage3} alt="" />
            </Slide>
          </div>
        
      </div>

      {/* This is third block */}
      <div className="student_container3">
        <Bounce up>
          <div className="student_heading3">
            <h1>
              Choose Your <label>Role</label>
            </h1>
          </div>
        </Bounce>

        <div className="student_inside_cont3-box">
          <Slide left>
            <div className="student_inside_container3 student_containers">
              <img
                className="student_image3"
                src={ImgSrc.FeatureStudentImage4}
                alt=""
              />
              <div className="student_main_info3">
                <h1 className="student_heading_block3">
                  As a <label>Student</label>
                </h1>
                <div className="student_paragraph3">
                  Start learning from the best teachers!
                </div>
                <button className="student_btn3">Join</button>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="student_inside_container3 student_containers">
              <img
                className="student_image3"
                src={ImgSrc.FeatureStudentImage5}
                alt=""
              />
              <div className="student_main_info3">
                <h1 className="student_heading_block3">
                  As a <label>Teacher</label>
                </h1>
                <div className="student_paragraph3">
                  Are you ready to share your knowledge and experience ?
                </div>
                
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

export default Feature_student;
