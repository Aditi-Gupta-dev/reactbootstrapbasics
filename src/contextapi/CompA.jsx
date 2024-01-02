import React, { createContext } from 'react'
import CompB from './CompB'




const CompA = () => {
  return (
    <>
        <h1>calling component B</h1>
        
        <CompB/>
    </>
  )
}

export default CompA
