import React from "react";
import "./Student.css";
import ImgSrc from "../../shared/ImgSrc";
import{Link}from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Student() {
    return (
        <div>
            <section className="student__container">
      <div className="student__main">
        <div className="student__info--container">
          <div className="student__info">
            <h1 className="student__h1"><span style={{color: '#FF450B'}}>Basics </span>
            For Students</h1>
            <p className="student_p">to improve life by improving online education</p><br/>
            <a href="https://google.com" role="button" class="button1">Try for Free</a>
          </div>
        </div>
        <div className="teacher1">
          <img
            src={ImgSrc.teacher1}
            alt="teacher"
            className="teacher1--img"
          />
        </div>
        </div>
        </section>

<section className="student__container1">
      <div className="student__main1">
      <div className="Aboutedu1">
          <img
            src={ImgSrc.Aboutedu1}
            alt="About"
            className="Aboutedu1--img"
          />
        </div>
        <div className="student__info--container1">
          <div className="student__info1">
            <h1 className="student__h11"> About<span style={{color: '#FF450B'}}> Learnzania </span></h1>
            <p className="student_p1">Video Lectures , Theory/Notes , <br/>
            TestSeries , Data Analysis of results ,<br/>
            Blogs to motivate or for Guidance  ,<br/>
            Attendance System and many more features.<br/></p>
          </div>
        </div>
        </div>
        </section>


        <section className="student__container2">
        <div className="student__main2">
        <div className="student__info--container2">
          <div className="student__info2">
            <h1 className="student__h12"> Why<span style={{color: '#FF450B'}}> Learnzania ?</span></h1>
            <p className="student_p2">We provide , students with free  <br/>
            and right guidance and help them <br/>
            in selecting their correct career path<br/></p>
          </div>
        </div>
      <div className="Whyedu1">
          <img
           src={ImgSrc.Whyedu1}
            alt="Why"
            className="Whyedu1--img"
          />
        </div>
        </div>
        </section>

        <h1 className="student__h3"> Choose Your &nbsp;<span style={{color: '#FF450B'}}>Role</span></h1>

      


    <section className="student__containerj">
      <div className="student__mainj">
           <div class="cards">
           <img
            src={ImgSrc.studentjoin}
            alt="Joins"
            className="studentjoin--img"
          />
          <div class="containers">
                 <h4 class="joinhs">As a <span style={{color: '#FF450B'}}>
                   Student</span></h4> 
                 <p class="ps">Are you ready to start learning from the best teachers!</p> <br/><br/>
                 <div class="jcenter1">
                 <Link to="/Student_join" role="button" class="buttons">Join</Link>
                 </div>
          </div>
          </div>
          <div class="cardtt">
           <img
            src={ImgSrc.teacherjoin}
            alt="Joint"
            className="teacherjoin--img"
          />
          <div class="containertt">
                 <h4 class="joinhtt">As a <span style={{color: '#FF450B'}}>Teacher</span></h4> 
                 <p class="ptt"> Are you ready to share your knowledge and experience?</p> <br/><br/>
                 <div class="jcenter">
                 <Link to="/Teacher_join" role="button" class="buttons">Join</Link>
                 </div>
                
          </div>
          </div>
        </div>
     </section>

</div>
)
   
}

export default Student

