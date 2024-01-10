import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header><nav>
          <ol>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>about</NavLink></li>
    
            <li><NavLink to='/welcome'>error</NavLink></li>
    
    
          </ol>
          </nav></header>
      
    </>
  )
}

export default Navbar
