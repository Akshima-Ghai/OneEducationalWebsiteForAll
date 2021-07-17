import React from "react";
import "./Student_join.css";
import ImgSrc from "../../shared/ImgSrc";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import StarIcon from '@material-ui/icons/Star';

function Student_join() {
    return (
        <div>
            <section className="student_join__container">
      <div className="student_join__main">
        <div className="student_join__info--container">
          <div className="student_join__info">
            <h1 className="student_join__h1"><span style={{color: '#FF450B'}}>Welcome  </span>
            Students</h1>
            <p className="student_join_p">to the world of resources</p>
          </div>
        </div>
        <div className="ws1">
          <img
            src={ImgSrc.ws1}
            alt="teacher"
            className="ws1--img"
          />
        </div>
        </div>
        </section>

<section className="student_join__container1">
      <div className="student_join__main1">
      <div className="ws2">
          <img
            src={ImgSrc.ws2}
            alt="About"
            className="ws2--img"
          />
        </div>
        <div className="student_join__info--container1">
          <div className="student_join__info1">
            <h1 className="student_join__h11"> Tutorial <span style={{color: '#FF450B'}}>Videos </span></h1>
            <p className="student_join_p1">Get the best possible video leactures Video Lectures <br/>
            available on the web free of cost,<br/>
            with new technologies and interactive sessions.<br/></p>
          </div>
        </div>
        </div>
        </section>


        <section className="student_join__container2">
        <div className="student_join__main2">
        <div className="student_join__info--container2">
          <div className="student_join__info2">
            <h1 className="student_join__h12"> On Demand <span style={{color: '#FF450B'}}> Test-series</span></h1>
            <p className="student_join_p2">Learning isn’t enough,<br/>
            to test your skill set is seldom a wise decesion,<br/>
            keeping that in mind,<br/>
            we have made the best probable test- series<br/></p>
          </div>
        </div>
      <div className="ws3">
          <img
           src={ImgSrc.ws3}
            alt="Why"
            className="ws3--img"
          />
        </div>
        </div>
        </section>

        <section className="student_join__container1">
      <div className="student_join__main1">
      <div className="ws4">
          <img
            src={ImgSrc.ws4}
            alt="About"
            className="ws4--img"
          />
        </div>
        <div className="student_join__info--container1">
          <div className="student_join__info1">
            <h1 className="student_join__h11"> Tech <span style={{color: '#FF450B'}}> Blogs </span></h1>
            <p className="student_join_p1">Sharing what you know,with the world,<br/>
            and learning from others experience,<br/>
            is the best way to grow,believing in this <br/>
            we have Blogs customized for your users<br/></p>
          </div>
        </div>
        </div>
        </section>

        <section className="student_join__container2">
        <div className="student_join__main2">
        <div className="student_join__info--container2">
          <div className="student_join__info2">
            <h1 className="student_join__h12"> Your<span style={{color: '#FF450B'}}> Motivation ?</span></h1>
            <p className="student_join_p2">Failures dishearten  people,<br/>
            and we understand that,<br/>
            thus we bring our motivational series to help you,<br/>
            learn from failures,and <br/>
            look towards a bright future<br/></p>
          </div>
        </div>
      <div className="ws5">
          <img
           src={ImgSrc.ws5}
            alt="Why"
            className="ws5--img"
          />
        </div>
        </div>
        </section>

        <h1 className="student_join__h3"> Student&nbsp;<span style={{color: '#FF450B'}}>Speak</span></h1>
     <section className="carouselsd">
       <div className="c_info">
           <div className="Imgsd">
           <img
            src={ImgSrc.ws6}
            alt="About"
            className="ws6--img"
          />
           </div>
           <div className="cardsd">
             <Carousel>
               <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>


                <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>


                <div class="cardt">
                <img
                    src={ImgSrc.pro}
                    alt="Joint"
                    className="pro--img"
                />
                <div class="containert">
                <ul class="ra-rating-star">
                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /> </li>
                                                <li><StarIcon /></li>
                                                <li><StarIcon /> </li>
                                            </ul>
                 <h4 class="joinht">Ruchi Sharma</h4> 
                 <p class="pt">Lorem Ipsum is simply dummy text of the printing<br/>
                  and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s,<br/>
                    when an unknown printer took .</p> 
                 </div>
                </div>
             </Carousel>
           </div>
        </div>
    </section>

   

</div>
)
   
}

export default Student_join

