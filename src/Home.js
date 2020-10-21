import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Work from './Work';
import About from './About/About';
import './Home.scss';
import homeHeaderImage from './media-global/mikemake-logo-181102-2208--squishy_600px.gif' 



function Home() {
  return (
    <div className="Home">
      <div className="home__header container">
        <h1 id="work-link">
          <img className="home__header__img" src={homeHeaderImage} alt="Mike Make logo"></img>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <h3>
              Design director for products and stories 
            </h3>
          </div>
          <div className="col-md-6 home__header__about-link-container">
            <Link to="/#about">About</Link>
          </div>
        </div>


      </div>
      <Work />
      <About />
    </div>
  );
}


export default Home;