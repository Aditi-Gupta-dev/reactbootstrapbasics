import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
import  {add,sub,mul,div} from './Calc';
import Bootstrap from './Bootstrap';
import Webpage from './Webpage';
import Contextapp from './contextapi/Contextapp';
import Useapp from './contextapi/useEffect/Useapp';
import Statewise from './component/stateWiseData/Statewise';

import {BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import About from './component/render/About';
import Contact from './component/render/Contact';
import Error from './component/render/Error';

  




// function App() {

//   // takung the prev challenge to create a greeting app
//   let currdate=new Date(2023,3,4,15);
// currdate=currdate.getHours();
// let temp="";
// const stl={ };


// if(currdate>=12 && currdate<12){
//   temp="Good Morning";
//   stl.color="green";   //this dynamically changes the color of the greeting
// }
// else if(currdate>=1 && currdate<19){
//   temp="Good Afternoon";
//   stl.color="orange";

// }else{
//   temp="Good Night";
//   stl.color="black";

// }
//   return (

//     <>
//       <Heading/>
//     <Para/>
//     <Para/>
//     <List/>
//     <List/>
//     <h1>Hello Sir, <sapn style={stl}>{temp}</sapn></h1>
//     </>
    
//   );
// };

function App(){
  return(
    <>
      {/* <ol>
      <li>{` the sum is ${add(2,3)}`}</li>
      <li>{` the sub is ${sub(2,3)}`}</li>
      <li>{` the prod is ${mul(2,3)}`}</li>
      <li>{` the divi is ${div(2,3)}`}</li>
    </ol>
    <Bootstrap/> */}

    {/* <Webpage/> */}

    {/* <Contextapp/> */}
    {/* <Useapp/> */}
    {/* <Statewise/> */}


    {/* render ==================== */}
    

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='welcome' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};   

export default App;