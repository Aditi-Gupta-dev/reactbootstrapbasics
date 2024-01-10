import React from 'react'
// import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navi=useNavigate();

  const gotohome=()=>{
      navi("/");
  }
  return (
    
    <>
          <h1>contact page</h1>
          {/* <Navbar/> */}
          <button onClick={()=>{gotohome()}}>goto home</button>
          <br/>
  <button onClick={()=>{navi(-1)}}>goback</button>

        </>
  )
}

export default Contact;
