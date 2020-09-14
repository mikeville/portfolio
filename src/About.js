import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './About.scss';



function About() {
    return (
        <div className="About">
            <div className="About__container">
                This is an about view
            </div>
        </div>
    );
}

export default About;