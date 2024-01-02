import React,{createContext} from 'react'
import CompA from './CompA'

//gar data bas comp c me pass krna ho to?...context banao .kaise?
// =>pehle import kro {createContext}
//jis data ko pass krns hai usko context me dalo
//context ban yaha ab usko provide kro ,jisko provide kroge usko bich me rakhna hai
//provider ke sath value rakhna as string
//export krna context data ko
//consummer hamesha function lega {(argument)=>{}}
//agar multiple coontext create honge to nested function call hoga

const fname=createContext();
const lname=createContext();
const Contextapp = () => {
  return (
    <>
    <fname.Provider value={"aditi"}>
    <lname.Provider value={"Gupta"}>
    <CompA/>
    </lname.Provider>
   
    </fname.Provider>
    </>
    
    
  )
}

export default Contextapp;
export {fname,lname};
