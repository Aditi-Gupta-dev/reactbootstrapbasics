import React from 'react'
import { fname,lname } from './Contextapp';

const CompC = () => {
  return (
    <>
        <p>data yaha hai bhai!!....shabashii😄</p>
        <fname.Consumer>{(fname)=>{ 
        
            return (
                <lname.Consumer>{(lname)=>{
                    return <h2>my name is {fname}{lname}</h2>;
                }}</lname.Consumer>
            )
            
        }}</fname.Consumer>
    </>
  );
};

export default CompC
