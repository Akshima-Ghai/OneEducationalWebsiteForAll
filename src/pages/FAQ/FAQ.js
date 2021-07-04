import React, { useState } from "react";
import "./FAQ.css";
import ImgSrc from "../../shared/ImgSrc";
import Scrolltop from "../../components/ScrollTop/Scrolltop";

export default function FAQ() {
  const [isOneActive, setOneActive] = useState("false");
  const [isTwoActive, setTwoActive] = useState("false");
  const [isThreeActive, setThreeActive] = useState("false");
  const [isFourActive, setFourActive] = useState("false");

  const handleToggle = (ques) => {
    switch (ques) {
      case "one":
        setOneActive((prev) => !prev);
        break;
      case "two":
        setTwoActive((prev) => !prev);
        break;
      case "three":
        setThreeActive((prev) => !prev);
        break;
      case "four":
        setFourActive((prev) => !prev);
        break;
    }
  };
  return (
    <>
      <section className="faq__container">
        <Scrolltop showBelow={250} />
        <div>
          <h2 className="faq__title">FAQS</h2>

          <div
            className={`faq ${isOneActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "one")}
            key="1"
          >
            <div className="faq__question">
              <h3>Q: HOW DO I FIGURE OUT WHAT TO LEARN?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
                The most important thing is that you want to learn something
                that interests you, because once you start learning, you’ll be
                with this topic for a while. Choosing something just because
                it’s popular or what others are doing isn’t the way to go
                because if you don’t have a true interest in it, you’ll lose the
                motivation to learn! Spend some time seriously looking into the
                different tech career paths before choosing one to go down.
              </p>
            </div>
          </div>

          <div
            className={`faq ${isTwoActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "two")}
            key="2"
          >
            <div className="faq__question">
              <h3>Q: WHICH PROGRAMMING LANGUAGE IS THE BEST TO LEARN?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
                I usually tell most people to start by learning HTML and CSS,
                then move into learning JavaScript. The reason is that
                JavaScript is used everywhere: frontend, backend, and even to
                build mobile apps. It has many use cases, which is why I think
                it’s smart to learn.
              </p>
            </div>
          </div>

          <div
            className={`faq ${isThreeActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "three")}
            key="3"
          >
            <div className="faq__question">
              <h3>Q: WHERE SHOULD I LEARN TECH SKILLS?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
                THIS website :One of the largest online course marketplaces with
                topic covering practically everything you can think of. Anyone
                can upload a course on Udemy, so it’s important to research and
                read reviews–but they do have most affordable options compared
                other online course providers, with regular sales on almost
                everything on the site.
              </p>
            </div>
          </div>

          <div
            className={`faq ${isFourActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "four")}
            key="4"
          >
            <div className="faq__question">
              <h3>
                Q: WHERE ARE THE BEST PLACES TO LEARN FRONT-END AND BACKEND
                DEVELOPMENT?
              </h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
                There are tons of online courses and useful resources on
                front-end and back-end development. Check out this in-depth
                guide about what it takes to be a front-end developer, the
                skills you’ll need, and the best places to learn. For back-end
                development, I recommend reading The Beginner’s Guide to Backend
                Development or this post on backend development skills.
              </p>
            </div>
          </div>
        </div>
        <div className="faq__img">
          <img
            src={ImgSrc.confuse}
            alt="Content Owned By <a href='https://pngtree.com/so/reading-clipart'>reading clipart png from pngtree.com</a>"
            className="faq__confuse--img"
          />
        </div>
      </section>
    </>
  );
}
