import React from "react";
import "./Teacher.css";
import ImgSrc from "../../shared/ImgSrc";
import{Link}from "react-router-dom";
function Teacher() {
    return (
        <div>
            <section className="teacher__container">
      <div className="teacher__main">
        <div className="teacher__info--container">
          <div className="teacher__info">
            <h1 className="teacher__h1"><span style={{color: '#FF450B'}}>Basics </span>
            For Teachers</h1>
            <p className="teacher_p">to improve life by improving online education</p><br/>
            <a href="https://google.com" role="button" class="button1">Try for Free</a>
          </div>
        </div>
        <div className="teacher2">
          <img
            src={ImgSrc.teacher2}
            alt="teacher"
            className="teacher2--img"
          />
        </div>
        </div>
        </section>

<section className="teacher__container1">
      <div className="teacher__main1">
      <div className="Aboutedu2">
          <img
            src={ImgSrc.Aboutedu2}
            alt="About"
            className="Aboutedu2--img"
          />
        </div>
        <div className="teacher__info--container1">
          <div className="teacher__info1">
            <h1 className="teacher__h11"> About<span style={{color: '#FF450B'}}> Education </span></h1>
            <p className="teacher_p1">Video Lectures , Theory/Notes , TestSeries ,<br/>
             Data Analysis of results ,<br/>
              Blogs to motivate or for Guidance  ,<br/>
              Attendance System and many more features.<br/></p>
          </div>
        </div>
        </div>
        </section>


        <section className="teacher__container2">
        <div className="teacher__main2">
        <div className="teacher__info--container2">
          <div className="teacher__info2">
            <h1 className="teacher__h12"> Why<span style={{color: '#FF450B'}}> Education ?</span></h1>
            <p className="teacher_p2">We provide , students with free<br/>
             and right guidance and help them in selecting their<br/>
              correct career path,join us<br/>
               make to make their future better<br/></p>
          </div>
        </div>
      <div className="Whyedu2">
          <img
           src={ImgSrc.Whyedu2}
            alt="Why"
            className="Whyedu2--img"
          />
        </div>
        </div>
        </section>

        <h1 className="teacher__h3"> Choose Your &nbsp;<span style={{color: '#FF450B'}}>Role</span></h1>

      


    <section className="teacher__containerj">
      <div className="teacher__mainj">
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

export default Teacher

