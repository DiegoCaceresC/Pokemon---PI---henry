import React from "react";
import { Link } from "react-router-dom";
import'./Loading.css'
import '../Home/Home.css'

export default function Loading () {
    return (
        <div id={"home"}>
        <div className="loading">
            <img  src="https://i.gifer.com/Yg6z.gif" alt="" />
            <p style={{color:"white"}}>Wait a second ...</p>
            
        </div>
        </div>
    )
}