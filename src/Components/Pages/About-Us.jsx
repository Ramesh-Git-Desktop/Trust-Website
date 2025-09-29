import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
        <div className="">
            <div className="about-us-banner">
                <h1>About Us </h1>
                <p><Link to="/">Home</Link > / <Link to="/about-us">About</Link ></p>
            </div>
        </div>


    </div>
  )
}

export default AboutUs