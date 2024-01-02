import React, { useEffect, useState } from 'react'

//agar 2 funtion lagaoge sath sath to preference kisi ek ko hi milega
//but use effect se sath sath ho jaega ..
// use effect ko pass nahi krwana hota....simple haina😄

const Useapp = () => {
    const [c,sc]=useState(0);

    useEffect(()=>{
        alert("i m clicked");
        console.log("my click")
    },[c])


    const addone=()=>{
    sc(c+1);
    }

    const alertf=()=>{
        alert("i m clicked");
    }

  return (
    <>
    <h1>{c}</h1>
    <button onClick={(addone)}>click</button>

    </>
  )
}

export default Useapp
