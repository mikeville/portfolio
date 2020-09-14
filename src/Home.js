import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
// import Nav from './Nav';
// import About from './About';
// import './Home.scss';


function Home() {
  return (
    <div className="Home">
        Homepage here
        <div><Link to="/project1">Project 1</Link></div>
        <div><Link to="/project1">Project 2</Link></div>
        <div><Link to="/project1">Project 3</Link></div>
    </div>
  );
}


export default Home;