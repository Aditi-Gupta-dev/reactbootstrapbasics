import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>home page</h1>
      <ol>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

        <li><Link to='/welcome'>error</Link></li>


      </ol>
    </>
  )
}

export default About
