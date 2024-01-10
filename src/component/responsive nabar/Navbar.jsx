import React from 'react';
import './navbar.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className="logo">
            <h2><span>A</span>diti
            <span>G</span>upta
            </h2>
        </div>
        <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
            </ul>
        </div> 
        {/* third pard =>social media links */}
        <div className='social-media'>
            <ul className='social-desktop'>
                <li>
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaFacebook/></a>
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaInstagramSquare/></a>
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaTelegram/></a>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
