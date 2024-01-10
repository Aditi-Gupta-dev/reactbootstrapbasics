import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
          <h1>home page</h1>
          <Navbar/>
          <Outlet/>
          
         
        </>
      )
}

export default Home

