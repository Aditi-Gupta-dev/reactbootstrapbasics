import React, { useContext } from 'react'
import CompC from './CompC'
import {fname,lname} from './Contextapp'

const CompB = () => {
    const a=useContext(fname),b=useContext(lname);
  return (
    <>
        <h2>calling component C</h2>
    <CompC/>
    <h1>now calling from context app</h1>
    <h2>this data called from contextapp: {a+""+b}</h2>

        
    </>
  )
}

export default CompB
