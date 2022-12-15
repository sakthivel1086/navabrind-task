import React, { useState } from "react";
import "./styles.css";
import js1Child from "./js1Child"

export default function sha() {
    const[UIcolor,setUIColor] = useState(null);

    //our callback function
    const getColor = (color) => {
        setUIColor(color);
    };

    return(
        <div className="sha">
            <div className="sha_color_container"
            style={{background:'${UIcolor}'}}></div>
            <js1Child getColor={getColor}/>
        </div>
        

    )
}