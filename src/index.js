
// babel mil jata hai react ke sath isilia ab hmlog impot use krenge
// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// ReactDOM.render('kya dikahana hai','kaha dikhanaa hai','callback');

/*
ReactDOM.render(<h1>namaste duniya</h1>,document.getElementById('root'));


//===>how babel converts the above code:
ReactDOM.render( React.createElement("h1",null,
  "namaste duniya"),
  document.getElementById("root")
);

//===>using pure javascript:
var h1=document.createElement("h1");
h1.innerHTML="aditi gupta";
document.getElementById("root").appendChild(h1);

ReactDOM.render(
  [
    <h1>hello aditi ,</h1>,
    <p>you are greate</p>
  ],
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <h1>hello aditi ,</h1>
    <p>you are greate</p>
  </div>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.Fragment>
    <h1>hello aditi </h1>
    <p>you are greate</p>
  </React.Fragment>,
  document.getElementById("root")
);
ReactDOM.render(
  <>
    <h1>hello aditi </h1>
    <p>you are greate</p>
  </>,
  document.getElementById("root")
);


///SIMPLE PROJECT OR CHALLENGE:
ReactDOM.render(
  <>
    <h1>ADDE NETFLIX PICK</h1>
    <p>list of the series are:</p>
    <ol>
      <li>name 1 </li>
      <li>name 1 </li>
      <li>name 1 </li>
      <li>name 1 </li>
      <li>name 1 </li>

    </ol>
  </>,
  document.getElementById("root")
);

const fname="aditi";
const lname="gupta";

ReactDOM.render(
  <>
    <h1>hi my name is {fname +" "+ lname}</h1>
    <h1>hi my name is { `${fname} ${lname}`}</h1>
    <h1> { ` hi my name is ${fname} ${lname}`}</h1>
    <p>let us earn react together in { 2*3} hours</p>
  </>,
  document.getElementById("root")
);



const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>THIS PROJRCT DISPLAYS THE CURRENT DATE AND TIME</h1>
    <p>CURRENT DATE IS ={currdate}</p>
    <p>CURRENT TIME IS ={currtime}</p>
    
  </>,document.getElementById("root")
);


//JSX attributes

const img1="https://picsum.photos/id/237/200/300";
const img2="https://picsum.photos/id/247/200/300";
const img3="https://picsum.photos/id/257/200/300";
const links="https://www.w3schools.com/"; 

//inline style
const head={
  color:"purple",
  fontSize: "3rem",
  textShadow: '0px 2px 4px #aaa',
  textTransform: "uppercase",
  textAlign: "center",
  margin:" 10px",

};
ReactDOM.render(
  <>
    <h1  style={head}>TRYING SOME ATTRIBUTES OF JSX (same as html)</h1>
    <div className="images"> <img src={img1} alt="randomimage"/>
    <img src={img2} alt="randomimage"/>
    <a href={links} target="_adi">
    <img src={img3} alt="randomimage"/></a>
    </div>
   
    </>,
  document.getElementById("root")
);


///===============CHALLENGE 3==============
let currdate=new Date(2023,3,4,15);
currdate=currdate.getHours();
let temp="";
const stl={ };


if(currdate>=12 && currdate<12){
  temp="Good Morning";
  stl.color="green";   //this dynamically changes the color of the greeting
}
else if(currdate>=1 && currdate<19){
  temp="Good Afternoon";
  stl.color="orange";

}else{
  temp="Good Night";
  stl.color="black";

}
 ReactDOM.render(
  <>
    <h1>Hello Sir, <sapn style={stl}>{temp}</sapn></h1>
  </>,
  document.getElementById("root")
 );
 */

 

 ////=============REACT COMPONENTS=============

 //yaha par har ek chiz ka component banaenge like heading para or usko bar bar call krenge
 //component create kro jsx file or component ka name same rakhna .... import react everywhere ..funstion se component banao ...component ke ander html ka code likho ..i mean jsx ...and then us component ko export kr do ,simple na

 ///lekin lekin lekin!!! itna sara files import krna ek bechara index file me acha nahi hai na ...isilia ek master component banao jisme sara component ho ....i.e App.jsx....isme dara components import krp chup chap or for is app ko export kro apna index file me ,,,simple na chalo kro.

//  <h1>let this be the heading</h1>
    
//     <p>taking some random content say a list:</p>
//     <ol>
//       <li>apple</li>
//       <li>apple</li>
//       <li>apple</li>
//       <li>apple</li>

//     </ol> 

// import App from './App';
//  ReactDOM.render(
//   <>
//   <App/>
  
//   </>
//   ,document.getElementById("root")
//  );
 

// =============chalange 4 :IMPORTING AND EXPORTING========
import App from './App';

ReactDOM.render(
  <>
    <App></App>
  </>,
  document.getElementById("root")
);
