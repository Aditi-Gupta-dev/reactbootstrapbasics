import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navi=useNavigate();
  const gotoContact=()=>{
    navi("/contact");
  }
  return(
    <>
  <h1>About page</h1>
  <button onClick={()=>{gotoContact()}}>goto contact</button>
  <br/>
  <button onClick={()=>{navi(-1)}}>goback</button>
  {/* <Navbar/> */}
</>
  )
  
}

export default About;
