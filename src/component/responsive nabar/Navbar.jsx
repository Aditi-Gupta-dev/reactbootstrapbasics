import React ,{useState}from 'react';
import './navbar.css';
import { FaInstagramSquare,  FaFacebook, FaTelegram  } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
// import { useActionData, useSearchParams } from 'react-router-dom';

const Navbar = () => {
    const [showicon,seticon]=useState(false);
  return (
    <>
      <nav className='main-nav'>
        <div className="logo">
            <h2><span>A</span>diti
            <span>G</span>upta
            </h2>
        </div>
        <div className={showicon ? "menu-link mobile-menu-link":"menu-link"}>
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
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaFacebook className="facebook"/></a>
                </li>

                <li>
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaInstagramSquare className="instagram"/></a>
                </li>
                <li>
                    <a href='/www.youtube.com/watch?v=8AJ3Kcz5FsM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=87' target='_blank'><FaTelegram className="telegram"/></a>
                </li>
                    
            </ul>
            {/* hamberger menu */}
            <div className='hamburger-menu'>
                <a href='#' onClick={()=>{seticon(!showicon)}}><IoMenu/></a>
            </div>
        </div>
      </nav>
      
      {/* hero section */}
      <section >
      <div className='hero-section'>
      <div>
      <h3>welcom to </h3>
      <h2>developer didi page</h2>
      </div>
      
      </div>
      </section>
       
    </>
  )
}

export default Navbar;
