import React, { useState, useEffect } from "react";
import "./Home.css";
import ImgSrc from "./../../shared/ImgSrc";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import { HashLoader } from "react-spinners";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="home__container">
      {loading ? (
        <div className="preloader">
          <HashLoader color={"#E34738"} loading={loading} size={90} />
        </div>
      ) : (
        <div className="home__container">
          <Scrolltop showBelow={250} />
          <div className="home__main">
            <div className="home__info--container">
              <div className="home__info">
                <h1 className="home__h1">You Can Learn Anything</h1>
                <p className="home__p">For Free, For Everyone</p>
              </div>
            </div>
            <div className="home__banner">
              <img
                src={ImgSrc.homeBanner}
                alt="Content Owned By <a href='https://pngtree.com/so/reading-clipart'>reading clipart png from pngtree.com</a>"
                className="home__banner--img"
              />
            </div>
          </div>
          <div className="home__dashboard--container">
            <div className="home__dashboard">
              <div className="home__dashboard--item-1">
                <h1>Creating student success with our tech</h1>
              </div>
              <div className="home__dashboard--item-2">
                <h1>ANYWHERE ANYTIME ACCESS</h1>
                <p>
                  Enjoy free access to all LearnZania resources and study
                  material anytime, anywhere from your comfort and ace your
                  preparation.
                </p>
              </div>
              <div className="home__dashboard--item-3">
                <h1>FREE GUIDANCE</h1>
                <p>
                  Struggling to choose right career path? Having difficulty in
                  some topic or question? Worry not! Get free and expert
                  guidance from our mentors, who are just a click away!!
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Home;
