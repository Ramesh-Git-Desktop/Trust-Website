import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">

          {/* MBA Section */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <strong>MBA</strong>
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">Top MBA Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">MBA Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Executive MBA Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">MBA Exams</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">CAT</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">MAT</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Online MBA</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">MBA College Predictors</Link></li>
            </ul>
          </div>

          {/* Engineering Section */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <strong>Engineering</strong>
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">Engineering</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Top Engineering Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Engineering Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Engineering Exams</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">JEE Main</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">JEE Advanced</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Engineering College Predictors</Link></li>
            </ul>
          </div>

          {/* Medicine Section */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <strong>Medicine</strong>
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">NEET UG</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">NEET PG</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">NEET SS</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">NEET MDS</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">INI CET</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">FMGE</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">AIAPGET</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Top Medical Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Medical Colleges</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Medical Exams</Link></li>
            </ul>
          </div>

          {/* Other Courses Section */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <strong>Other Courses</strong>
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">B.Com</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">B.Sc</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">BBA</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">CA</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Fashion Designing</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Hotel Management</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Law</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">BBS</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <strong>About Trust</strong>
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">About Us</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Management Team</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Careers</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">FAQs</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Contact Us</Link></li>
              <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
