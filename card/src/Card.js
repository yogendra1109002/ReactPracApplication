import React from "react";
import "./index.css"

const Card = (props) => {
    return (
        <>
            <div className="card">

                <img src={props.img} alt="" />
                <h3>Nature {props.title} Image</h3>

            </div>
        </>
    )
}

export default Card