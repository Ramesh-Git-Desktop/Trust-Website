import React, { useState } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import CourseCard from './coursesCards';
// import bannerImage from '../../assets/Img/banner.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';

function Home() {
     const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
        <section>
            <div className="banner">
                <div className='banner-content col-lg-6 col-md-6 col-sm-12'>
                    <h2>We’re offering students to learn today’s most in-demand skills — completely free.</h2>
                    <p>Explore our courses, read our blog, and connect with us!</p>
                    <div className='banner-buttons'>
                        <button className="primary-btn">Explore Free Courses</button>
                        <button className="default-btn">Get Recommendation</button>
                    </div>
                    <p className='py-3'> For enquiries call: 9777995144</p>
                </div>
            </div>
        </section>

        <section>
            <div className="container py-5">
                <div className="row">
                     <div className="col-lg-6 col-sm-12">
                        <img src="sfdg" alt="Image" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2>Welcom to Our Cgarety And Trust</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure deserunt, veniam ducimus temporibus dolorum rem alias quasi a optio odit nam nobis consequatur fugit accusantium laudantium debitis consectetur harum inventore praesentium recusandae. Minima quaerat commodi eaque eius eveniet quam dicta. Ea doloribus dolorum est adipisci nostrum dicta fuga distinctio sit pariatur minus possimus voluptatibus deleniti sunt nobis quaerat delectus, vitae voluptate, impedit architecto voluptates atque magni. Ea possimus non, animi error odit dolorem facilis, dolores vero labore odio consequatur eum nam voluptatibus saepe dicta temporibus vel deserunt aut mollitia consectetur. Doloribus dolorum sed magnam exercitationem eos totam voluptas ducimus!
                        </p>
                    </div>
                   
                </div>
            </div>
        </section>

        <section>
            <div className="review-content block">
                <div className="row review-content-row">
                <div className="col-lg-4 col-md-4 col-sm-12 border-end text-center">
                    <h1 className="text-primary fw-bold">
                    <CountUp start={0} end={200} duration={2.5} />+
                    </h1>
                    <p>Enrolled Learners</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 border-end text-center">
                    <h1 className="text-primary fw-bold">
                    <CountUp start={0} end={25} duration={2.5} />+
                    </h1>
                    <p>Courses Offered</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <h1 className="text-primary fw-bold">
                    <CountUp start={0} end={100} duration={2.5} />+
                    </h1>
                    <p>Expert Instructors</p>
                </div>
                </div>
            </div>
        </section>
       
        <section className="course-content">
            <h2>Explore Free Online Courses</h2>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 block">
                     <Sidebar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
                </div>

                <div className="col-lg-9 col-md-4 col-sm-12 block">
                    <h5>Popular Courses Free for All Students</h5>
                    <div>
                       <CourseCard searchTerm={searchTerm}  />
                    </div>
                </div>
                    
            </div>
        </section>

        <section>

        </section>

    </>
  )
}

export default Home