import React from 'react';
import Work from './Work';
import About from './About';
import './Home.scss';


function Home() {
  return (
    <div className="Home">
      <div className="home__header-wrapper">
        <div className="home__header">
          <h2 className="home__header__title">Mike Deal</h2>
          <h3 className="home__header__headline">
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