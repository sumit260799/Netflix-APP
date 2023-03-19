import React from "react";
import  ReactDOM  from "react-dom";
import App from './componenet/App'
import NetflixData from "./netflix";

function ncard(val){
  // console.log(ncard)
  return(
    <App 
    imgsrc={val.imgURL}
    title={val. title}
    subtitle={val.subtitle}
    link= {val.link} />
  )
}
ReactDOM.render(
  <>
  <h1 className="Heading">Netflix Best WebSeries</h1>

{NetflixData.map(ncard)}
   </>,
  document.getElementById('root')
)