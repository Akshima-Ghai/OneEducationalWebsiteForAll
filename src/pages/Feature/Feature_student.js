import React from "react";
import "./Feature.css";
import ImgSrc from "../../shared/ImgSrc";
const Feature_student = (props) => {
  return (
    <>
      {/* This is for first block */}

      <div className="container1">
        <div className="inside_container1">
          <div className="main_info1">
            <h1 className="heading_block1_1">Basics</h1>
            <h1 className="heading_block1_2">For Students</h1>
            <div className="paragraph1">
              to improve life by improving online education
            </div>
            <button className="btn">Try for Free</button>
          </div>
          <img className="image1" src={ImgSrc.FeatureStudentImage1} />
        </div>
      </div>

      {/* This is for second block */}

      <div className="container2">
      <div className="inside_container2">
        <img className="image2" src={ImgSrc.FeatureStudentImage2} />
          <div className="main_info2">
            <h1 className="heading_block2">
              About <label>Education</label>
            </h1>
            <div className="paragraph2">
              Video Lectures , Theory/Notes , TestSeries , Data Analysis of
              results , Blogs to motivate or for Guidance , Attendance System
              and many more features.
            </div>
          </div>
        </div>
    
        <div className="inside_container2 down">
          <div className="main_info2">
            <h1 className="heading_block2">
              Why <label>Education?</label>
            </h1>
            <div className="paragraph2">
              We provide , students with free and right guidance and help them
              in selecting their correct career path
            </div>
          </div>
          <img className="image2" src={ImgSrc.FeatureStudentImage3} />
        </div>
      </div>

        {/* This is third block */} 
      <div className="container3">
      <div className="heading3">
        <h1>
          Choose Your <label>Role</label>
        </h1>
      </div>
      <div className="inside_cont3-box">
        <div className="inside_container3">
          <img className="image3" src={ImgSrc.FeatureStudentImage4} />
          <div className="main_info3">
            <h1 className="heading_block3">
              As a <label>Student</label>
            </h1>
            <div className="paragraph3">
              Start learning from the best teachers!
            </div>
            <button className="btn3">Join</button>
          </div>
          </div>
          <div className="inside_container3">
          <img className="image3" src={ImgSrc.FeatureStudentImage5} />
          <div className="main_info3">
            <h1 className="heading_block3">
              As a <label>Teacher</label>
            </h1>
            <div className="paragraph3">Are you ready to share your knowledge and experience ?
            </div>
            <button className="btn3">Join</button>
          </div>
          </div>
         
        </div>
          
          
      </div>
    </>
  );
};

export default Feature_student;
