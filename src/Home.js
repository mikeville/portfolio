import React from 'react';
import Work from './Work';
import About from './About';
import './Home.scss';
import homeHeaderImage from './media-global/mikemake-logo-181102-2208--squishy_600px.gif' 



function Home() {
  return (
    <div className="Home">
      <div className="home__header-wrapper">
        <div className="home__header">
          <h1>
            <img className="home__header__img" src={homeHeaderImage}></img>
          </h1>
          <h3>
            Design director for products and stories
          </h3>
        </div>
      </div>
      <Work />
      <About />
    </div>
  );
}


export default Home;