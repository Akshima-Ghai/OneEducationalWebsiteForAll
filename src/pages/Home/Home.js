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
      <div className="home__dashboard--container">
        <div className="home__dashboard">
          <div className="home__dashboard--item-1">
            <h1>Creating student success with our tech</h1>
          </div>
          <div className="home__dashboard--item-2">
            <h1>Anywhere anytime access</h1>
            <p>With The Website, students can access learning resources anytime, anywhere, on their mobility tools.</p>
          </div>
          <div className="home__dashboard--item-3">
          <h1>Free Guidance</h1>
            <p>With The Website, students can free and right guidance and information on career selecting.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
