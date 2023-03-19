import React from "react";

function App(props) {
    console.log(props)
    return(
     
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc}
                    alt="myPic"
                    className="card__img"
                />             
                <div className="cardInfo">
                <span className="card__category">{props.subtitle}</span>
                <h3 className="cardTitle">{props.title}</h3>
                <a href={props.link} target="_blank">
                <button > Watch Now</button></a>

                </div>
            </div>
        </div>

    )
}
export default App;