import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"

const Landing = () => {
    return (
        <div className="home-page">
            <h1>Welcome POKEMON trainer</h1>
            <Link to="/home">
                <button className="home-button">START NOW</button>
            </Link>
        </div>
    );
};

export default Landing;
