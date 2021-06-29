import React from 'react'
import './Home.css'
import ImgSrc from './../../shared/ImgSrc'

const Home = () => {
  return (
    <section className="home__container">
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
    </section>
  )
}

export default Home
