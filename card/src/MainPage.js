import React from "react";
import Card from "./Card";
import "./index.css";
import img1 from "./images/m1.jpeg"
import img2 from "./images/m2.jpeg"
import img3 from "./images/m3.jpeg"
import img4 from "./images/m4.jpeg"
import img5 from "./images/m5.jpeg"
import img6 from "./images/m6.jpeg"

const MainPage = () => {
    return(
        <>
        <h1 className="heading">Card Gallery</h1>
        <div className="cardcomp">
            <Card title={1} img={img1}/>
            <Card title={2} img={img2}/>
            <Card title={3} img={img3}/>
            <Card title={4} img={img4}/>
            <Card title={5} img={img5}/>
            <Card title={6} img={img6}/>
        </div>
        </>
    )
}

export default MainPage