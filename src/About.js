import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Components/Header.js'

const About = () => {
  return (
    <div className="container">
      <Header/>
      <div>Version 1.0.0</div>
      <Link to="/"> Go back </Link>
    </div>
  )
}

export default About