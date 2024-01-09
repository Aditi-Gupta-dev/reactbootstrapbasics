import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Statewise = () => {
    
    //fetch use kr rah eisia async function,fetch promise return krega (either fullfiled or wait ) so use await ,again u have to store the response and then parse it to json, json bhi promise return krega to again use await


    const [data,setdata]=useState([]);
    const getCovidData=async()=>{
        
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise);
        setdata(actualData.statewise);
    
    }

    useEffect(()=>{
        getCovidData();

    },[]); //jab page refresh krenge to useeffect chalega
  return (
    <>
    <div className=' container mt-4'>
    <div className="main-heading ">
    <h2 className='container mt-2 mb-4'><span className='font-weight-bold text-secondary text-center'>INDIA</span> covid 19 tracker</h2>

    </div>
    <div className=' table-responsive'>
    <table  className='table table-hover table-bordered table-lg'>
      <thead className='table-dark'>
        <tr>
          <th>State</th>
          <th>confirmed</th>
          <th>resovered</th>
          <th>deaths</th>
          <th>active</th>
          <th>update</th>
        </tr>
      </thead>
      <tbody >
      {
         data.map((curElem,ind)=>{
          return(
          <tr key={ind}>
          <td>{curElem.state}</td>
          <td>{curElem.confirmed}</td>
          <td>{curElem.recovered}</td>
          <td>{curElem.deaths}</td>
          <td>{curElem.active}</td>
          <td>{curElem.lastupdatedtime}</td>
        
        </tr>
          )
         })
      }
      
        
          
      </tbody>
    </table>

    </div>
    </div>
    
      
    </>
  )
}

export default Statewise
