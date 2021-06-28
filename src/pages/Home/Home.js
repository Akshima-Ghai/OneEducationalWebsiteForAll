import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home__container">
      <div className="home__main">
        <div className="home__info--container">
          <div className="home__info">
            <h1 className="home__h1">Education</h1>
            <p className="home__p">Learn Everything</p>
            <Link to="/login" className="home__button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
