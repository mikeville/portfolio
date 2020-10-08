import React from 'react';
import Work from './Work';
import About from './About';
import './Home.scss';
import homeHeaderImage from './media-global/mikemake-logo-181102-2208--squishy_600px.gif' 



function Home() {
  return (
    <div className="Home">
      <div className="home__header container">
        <h1>
          <img className="home__header__img" src={homeHeaderImage} alt="Mike Make logo"></img>
        </h1>
        <h3>
          Design director for products and stories
        </h3>
      </div>
      <Work />
      <About />
    </div>
  );
}


export default Home;